// @flow
import React, {Component} from 'react';
import {path, assocPath} from "ramda";
import * as R from 'ramda';

import type {ArticleStore} from "../store/ArticleStoreFactory";
import type {ArticleService} from "../domain/ArticleServiceFactory";
import type {ValidatorService} from "../domain/ValidatorServiceFactory";
import {ArticleServiceFactory} from "../domain/ArticleServiceFactory";
import {ValidatorServiceFactory} from "../domain/ValidatorServiceFactory";
import {articleStore} from "../store/ArticleStoreFactory";
import {ArticleFormComponent} from "./ArticleFormComponent";

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
  articleStore: ArticleStore;
  articleService: ArticleService;
  validatorService: ValidatorService;

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
    this.articleService = ArticleServiceFactory();
    this.validatorService = ValidatorServiceFactory();
  }

  changeArticleTitle(event: Event) {
    this.setState(
      assocPath(
        ['articleTitle', 'value'],
        path(['target', 'value'], event)
      )
    );
  }

  changeArticleAuthor(event: Event) {
    this.setState(
      assocPath(
        ['articleAuthor', 'value'],
        path(['target', 'value'], event)
      )
    );
  }

  submitForm(event: Event) {
    const articleTitle = path(['target', 'articleTitle', 'value'], event);
    const articleAuthor = path(['target', 'articleAuthor', 'value'], event);

    const isTitleValid = this.isTitleValid(articleTitle);
    const isAuthorValid = this.isAuthorValid(articleAuthor);

    if (isTitleValid && isAuthorValid) {
      const newArticle = this.articleService.createArticle({
        title: articleTitle,
        author: articleAuthor
      });
      if (newArticle) {
        this.articleStore.addArticle(newArticle);
      }
      this.clearForm();
    } else {
      this.markInvalid(isTitleValid, isAuthorValid);
    }
  };

  isTitleValid(title: string) {
    return (
      this.validatorService.isString(title) &&
      this.validatorService.isLengthGreaterThen(title, 0)
    );
  }

  isAuthorValid(author: string) {
    return (
      this.validatorService.isString(author) &&
      this.validatorService.isLengthGreaterThen(author, 0)
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
