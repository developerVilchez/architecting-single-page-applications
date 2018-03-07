// @flow
import type {Article} from "../domain/Article";

// We are not mutating the author name because strings are immutable
export const getAuthorName = (article: Article): string => article.author.toUpperCase();

export const ArticleUiService = () => {
  return {
    getAuthorName
  }
};
