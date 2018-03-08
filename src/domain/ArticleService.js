// @flow
import v1 from 'uuid';

import type {Article} from "./Article";
import type {Validators} from "./Validators";
import {ValidatorService} from "./ValidatorService";

export type ArticleFields = {
  +title: string;
  +author: string;
}

export const createArticle = (validator: Validators) =>
  ({title, author}: ArticleFields): ?Article => {
    return (
      validator.isString(title) &&
      validator.isLengthGreaterThen(title, 0) &&
      validator.isString(author) &&
      validator.isLengthGreaterThen(author, 0)
    ) ?
      Object.freeze({
        id: v1(),
        likes: 0,
        title,
        author
      }) :
      null;
  };

export const updateLikes = (validator: Validators) =>
  (article: Article, likes: number): Article => {
    return validator.isObject(article) ?
      Object.freeze({
        ...article,
        likes
      }) :
      article;
  };

export const ArticleService = () => {
  const validators = ValidatorService();
  return {
    createArticle: createArticle(validators),
    updateLikes: updateLikes(validators)
  }
};
