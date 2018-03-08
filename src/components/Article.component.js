// @flow
import React from 'react';

import type {Article} from "../domain/Article";

type Props = {
  article: Article;
  likeArticle: Function;
  deleteArticle: Function;
}

export const ArticleComponent = (props: Props) => {
  const {
    article,
    likeArticle,
    deleteArticle
  } = props;

  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.author}</p>
      <p>{article.likes}</p>
      <button
        type="button"
        onClick={() => likeArticle(article.id)}
      >
        Like
      </button>
      <button
        type="button"
        onClick={() => deleteArticle(article.id)}
      >
        Delete
      </button>
    </div>
  );
};
