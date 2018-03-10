// @flow
import v1 from 'uuid';

import type {Article} from "./Article";
import * as validators from "./Validators";

export type ArticleFields = {
  +title: string;
  +author: string;
}

export type ArticleService = {
  createArticle(articleFields: ArticleFields): ?Article;
  updateLikes(article: Article, likes: number): Article;
}

export const createArticle = (articleFields: ArticleFields) => {
  const {title, author} = articleFields;
  return (
    validators.isString(title) &&
    validators.isLengthGreaterThen(title, 0) &&
    validators.isString(author) &&
    validators.isLengthGreaterThen(author, 0)
  ) ?
    Object.freeze({
      id: v1(),
      likes: 0,
      title,
      author
    }) :
    null;
};

export const updateLikes = (article: Article, likes: number) => {
  return validators.isObject(article) ?
    Object.freeze({
      ...article,
      likes
    }) :
    article;
};

export const ArticleServiceFactory = () => {
  return {
    createArticle,
    updateLikes
  }
};
