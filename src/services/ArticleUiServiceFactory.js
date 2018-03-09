// @flow
export type ArticleUiService = {
  displayAuthor(article: string): string;
}

export const displayAuthor = (author: string) => author.toUpperCase();

export const ArticleUiServiceFactory = (): ArticleUiService => {
  return {
    displayAuthor
  }
};
