// @flow
import React, {Component} from 'react';
import * as R from 'ramda';

import type {Validators} from "../domain/Validators";
import {ArticleFormComponent} from "./ArticleForm.component";
import {getValidators} from "../domain/ValidatorService";
import {ArticleService} from "../domain/ArticleService";
import {articleStore} from "../store/ArticleStore";

type Props = {
  validators: Validators
};

type State = {
  invalidTitle: boolean;
  invalidAuthor: boolean
};

class ArticleForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      invalidTitle: false,
      invalidAuthor: false
    };

    this.articleService = ArticleService();
    this.articleStore = articleStore;
  }

  submitForm(event) {
    const articleTitle = this.getArticleTitle(event);
    const isTitleValid = this.isTitleValid(articleTitle);
    const articleAuthor = this.getArticleAuthor(event);
    const isAuthorValid = this.isAuthorValid(articleAuthor);
    if (isTitleValid && isAuthorValid) {
      this.setState({
        invalidTitle: false,
        invalidAuthor: false
      });
      const article = this.articleService.createArticle({
        title: articleTitle,
        author: articleAuthor
      });
      this.articleStore.addArticle(article);
    } else {
      if (!isTitleValid) {
        this.setState({invalidTitle: true});
      }
      if (!isAuthorValid) {
        this.setState({invalidAuthor: true});
      }
    }
  };

  getArticleTitle(event) {
    return R.path(['target', 'articleTitle', 'value'], event);
  }

  isTitleValid(title: string): boolean {
    return this.props.validators.isString(title) &&
      this.props.validators.isLengthGreaterThen(title, 1);
  }

  changeTitle(event) {
    console.log('changeTitle', event);
  };

  getArticleAuthor(event) {
    return R.path(['target', 'articleAuthor', 'value'], event);
  }

  isAuthorValid(author: string): boolean {
    return this.props.validators.isString(author) &&
      this.props.validators.isLengthGreaterThen(author, 1);
  }

  changeAuthor(event) {
    console.log('changeAuthor', event);
  };

  render() {
    return (
      <ArticleFormComponent
        changeTitle={this.changeTitle}
        changeAuthor={this.changeAuthor}
        invalidTitle={this.state.invalidTitle}
        invalidAuthor={this.state.invalidAuthor}
        submitForm={this.submitForm.bind(this)}
      />
    )
  }
}

const articleFormHoc = (props: Props) => (WrappedComponent: any) => {
  return class extends React.Component<any> {
    render() {
      return <WrappedComponent {...props}/>;
    }
  }
};

export const ArticleFormContainer = articleFormHoc({validators: getValidators()})(ArticleForm);
