// @flow
import type {Article} from "../domain/Article";

export const getAuthorName = (article: Article): string => article.author.toUpperCase();

export const ArticleUiService = () => {
  return {
    getAuthorName
  }
};
