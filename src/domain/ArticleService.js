// @flow
import validate from 'validate.js';
import {Map} from 'immutable';
import {Article, ArticleFields} from "./Article";

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
    return Map(new Article(fields));
  }
  return null;
};

export const incrementLikes = (article: Map<Article>, likes: number): Article => {
  return article.merge({
    likes
  });
};

const articleService = () => {
  return {
    createArticle,
    incrementLikes
  }
};

export default articleService();
