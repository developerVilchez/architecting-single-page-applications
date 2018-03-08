// @flow
import React, {Component} from 'react';
import * as R from 'ramda';

import {ArticleFormComponent} from "./ArticleForm.component";
import {ValidatorService} from "../domain/ValidatorService";
import {ArticleService} from "../domain/ArticleService";
import {articleStore} from "../store/ArticleStore";

type Props = {};

type FormField = {
  value: string;
  valid: boolean;
}

export type FormData = {
  articleTitle: FormField;
  articleAuthor: FormField;
};

export class ArticleFormContainer extends Component<Props, FormData> {
  articleStore: any;
  articleService: any;
  validators: any;

  constructor(props: Props) {
    super(props);

    this.state = {
      articleTitle: {
        value: '',
        valid: true
      },
      articleAuthor: {
        value: '',
        valid: true
      }
    };

    this.articleStore = articleStore;
    this.articleService = ArticleService();
    this.validators = ValidatorService();
  }

  changeArticleTitle(event: any) {
    this.setState(
      R.assocPath(
        ['articleTitle', 'value'],
        R.path(['target', 'value'], event)
      )
    );
  }

  changeArticleAuthor(event: any) {
    this.setState(
      R.assocPath(
        ['articleAuthor', 'value'],
        R.path(['target', 'value'], event)
      )
    );
  }

  submitForm(event: any) {
    const articleTitle = R.path(['target', 'articleTitle', 'value'], event);
    const articleAuthor = R.path(['target', 'articleAuthor', 'value'], event);

    const isTitleValid = this.isTitleValid(articleTitle);
    const isAuthorValid = this.isAuthorValid(articleAuthor);

    if (isTitleValid && isAuthorValid) {
      this.articleStore.addArticle(this.articleService.createArticle({
        title: articleTitle,
        author: articleAuthor
      }));
      this.clearForm();
    } else {
      this.markInvalid(isTitleValid, isAuthorValid);
    }
  };

  isTitleValid(title) {
    return !!(
      this.validators.isString(title) &&
      this.validators.isLengthGreaterThen(title, 0)
    );
  }

  isAuthorValid(author): boolean {
    return !!(
      this.validators.isString(author) &&
      this.validators.isLengthGreaterThen(author, 0)
    );
  }

  clearForm() {
    this.setState((state) => {
      return R.pipe(
        R.assocPath(['articleTitle', 'valid'], true),
        R.assocPath(['articleTitle', 'value'], ''),
        R.assocPath(['articleAuthor', 'valid'], true),
        R.assocPath(['articleAuthor', 'value'], '')
      )(state);
    });
  }

  markInvalid(isTitleValid: boolean, isAuthorValid: boolean) {
    this.setState((state) => {
      return R.pipe(
        R.assocPath(['articleTitle', 'valid'], isTitleValid),
        R.assocPath(['articleAuthor', 'valid'], isAuthorValid)
      )(state);
    });
  }

  render() {
    return (
      <ArticleFormComponent
        formData={this.state}
        submitForm={this.submitForm.bind(this)}
        changeArticleTitle={(event) => this.changeArticleTitle(event)}
        changeArticleAuthor={(event) => this.changeArticleAuthor(event)}
      />
    )
  }
}
