// @flow
import React, {Component} from 'react';

import type {Article} from "../domain/Article";
import type {ArticleService} from "../domain/ArticleServiceFactory";
import type {ArticleStore} from "../store/ArticleStoreFactory";
import type {ArticleUiService} from "../services/ArticleUiServiceFactory";
import {ArticleComponent} from "./ArticleComponent";
import {articleStore} from "../store/ArticleStoreFactory";
import {ArticleServiceFactory} from "../domain/ArticleServiceFactory";
import {ArticleUiServiceFactory} from "../services/ArticleUiServiceFactory";

type Props = {
  article: Article;
};

export class ArticleContainer extends Component<Props> {
  articleStore: ArticleStore;
  articleService: ArticleService;
  articleUiService: ArticleUiService;

  constructor(props: Props) {
    super(props);

    this.articleStore = articleStore;
    this.articleService = ArticleServiceFactory();
    this.articleUiService = ArticleUiServiceFactory();
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
          articleUiService={this.articleUiService}
          likeArticle={(article: Article) => this.likeArticle(article)}
          deleteArticle={(article: Article) => this.removeArticle(article)}
        />
      </div>
    )
  }
}
