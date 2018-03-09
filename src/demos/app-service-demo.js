// @flow
import {ArticleServiceFactory} from "../domain/ArticleServiceFactory";
import {ArticleUiServiceFactory} from "../services/ArticleUiServiceFactory";

const articleService = ArticleServiceFactory();
const articleUiService = ArticleUiServiceFactory();

const article = articleService.createArticle({
  title: '12 rules for life',
  author: 'Jordan Peterson'
});

const authorName = article ?
  articleUiService.displayAuthor(article.author) :
  null;

console.log(authorName);
// It will print JORDAN PETERSON

if (article) {
  console.log(article.author);
// It will print Jordan Peterson
}
