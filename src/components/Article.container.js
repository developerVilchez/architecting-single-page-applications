// @flow
import React, {Component} from 'react';

import type {Article} from "../domain/Article";
import {ArticleComponent} from "./Article.component";
import {articleStore} from "../store/ArticleStore";
import {ArticleService} from "../domain/ArticleService";

type Props = {
  article: Article;
};

export class ArticleContainer extends Component<Props> {
  articleStore: any;
  articleService: any;

  constructor(props: Props) {
    super(props);

    this.articleStore = articleStore;
    this.articleService = ArticleService();
  }

  likeArticle(article: Article) {
    const updatedArticle = this.articleService.updateLikes(article, article.likes + 1);
    this.articleStore.updateArticle(updatedArticle);
  }

  removeArticle(article: Article) {
    this.articleStore.removeArticle(article);
  }

  render() {
    return (
      <div>
        <ArticleComponent
          article={this.props.article}
          likeArticle={(article: Article) => this.likeArticle(article)}
          deleteArticle={(article: Article) => this.removeArticle(article)}
        />
      </div>
    )
  }
}
