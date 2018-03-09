// @flow
import v1 from 'uuid';

import type {Article} from "./Article";
import type {ValidatorService} from "./ValidatorServiceFactory";
import {ValidatorServiceFactory} from "./ValidatorServiceFactory";

export type ArticleFields = {
  +title: string;
  +author: string;
}

export type ArticleService = {
  createArticle(articleFields: ArticleFields): ?Article;
  updateLikes(article: Article, likes: number): Article;
}

export const createArticle = (validatorService: ValidatorService) => (articleFields: ArticleFields) => {
  const {title, author} = articleFields;
  return (
    validatorService.isString(title) &&
    validatorService.isLengthGreaterThen(title, 0) &&
    validatorService.isString(author) &&
    validatorService.isLengthGreaterThen(author, 0)
  ) ?
    Object.freeze({
      id: v1(),
      likes: 0,
      title,
      author
    }) :
    null;
};

export const updateLikes = (validatorService: ValidatorService) => (article: Article, likes: number) => {
  return validatorService.isObject(article) ?
    Object.freeze({
      ...article,
      likes
    }) :
    article;
};

export const ArticleServiceFactory = () => {
  const validatorService = ValidatorServiceFactory();
  return {
    createArticle: createArticle(validatorService),
    updateLikes: updateLikes(validatorService)
  }
};
