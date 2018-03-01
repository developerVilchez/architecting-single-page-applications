// @flow
import v1 from 'uuid';

export interface ArticleFields {
  title: string;
  author: string;
}

export class Article {
  id: string = v1();
  likes: number = 0;
  title: string;
  author: string;

  constructor(fields: ArticleFields) {
    this.title = fields.title;
    this.author = fields.author;
  }
}
