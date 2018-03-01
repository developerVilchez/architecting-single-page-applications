// @flow
import v1 from 'uuid';
import * as R from 'ramda';
import Immutable from 'seamless-immutable';
import validate from 'validate.js';

import {Article, ArticleFields} from "./Article";

// export const validate = (input: string): boolean => !!(input && input.length > 2 && input.length < 100);
//
// export const toLowercase = (input: string): string => input.toLowerCase();
//
// export const create = (props: {
//   title: string,
//   author: string
// }): Article => ({
//   id: v1(),
//   likes: 0,
//   ...props,
// });
//
// export const freeze = (props: Article): Article => Object.freeze(props);
//
// export const createArticle = (props: {
//   title: string,
//   author: string
// }): ?Article =>
//   validate(props.title) && validate(props.author) ?
//     R.pipe(
//       R.map(toLowercase),
//       create,
//       freeze
//     )(props) :
//     null;
//
// export const incrementLikes = (article: Article): Article => ({
//   ...article,
//   likes: article.likes + 1
// });

export const createArticle = (fields: ArticleFields): ?Article => {
  if (
    validate.isString(fields.title) &&
    validate.isString(fields.author) &&
    !validate({
      title: fields.title,
      author: fields.author
    }, {
      title: {presence: {allowEmpty: false}},
      author: {presence: {allowEmpty: false}}
    })
  ) {
    return Immutable(new Article(fields));
  }
  return null;
};

export const incrementLikes = (article: Article): Article => {
  return Immutable([122]);
};

export const articleService = () => {
  return {
    createArticle,
    incrementLikes
  }
};

export default articleService();
