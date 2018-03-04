// @flow
import v1 from 'uuid';

import type {Article} from "./Article";
import type {Validator} from "./Validator";
import {validatorService} from "./ValidatorService";

export type ArticleFields = {
  +title: string;
  +author: string;
}

export const createArticle = (validator: Validator) =>
  ({title, author}: ArticleFields): ?Article => {
    return (
      validator.isString(title) &&
      validator.isLengthGreaterThen(title, 1) &&
      validator.isString(author) &&
      validator.isLengthGreaterThen(author, 1)
    ) ?
      Object.freeze({
        id: v1(),
        likes: 0,
        title,
        author
      }) :
      null;
  };

export const updateLikes = (validator: Validator) =>
  (article: Article, likes: number): Article => {
    return validator.isObject(article) ?
      Object.freeze({
        ...article,
        likes
      }) :
      article;
  };

export const articleService = () => {
  const validator = validatorService();
  return {
    createArticle: createArticle(validator),
    updateLikes: updateLikes(validator)
  }
};
