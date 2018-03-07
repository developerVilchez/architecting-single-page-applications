import {ArticleService} from "../domain/ArticleService";
import {ArticleUiService} from "../services/ArticleUiService";

const articleService = ArticleService();
const articleUiService = ArticleUiService();

const article = articleService.createArticle({
  title: '12 rules for life',
  author: 'Jordan Peterson'
});

const authorName = article ?
  articleUiService.getAuthorName(article) :
  null;

console.log(authorName);
// It will print JORDAN PETERSON

console.log(article.author);
// It will print Jordan Peterson
