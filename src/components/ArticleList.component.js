// @flow
import React, {Component} from 'react';

import {ArticleContainer} from "./Article.container";

export class ArticleListComponent extends Component<Props> {
  render() {
    return (
      <div>
        {
          this.props.articles.map((article: Article, index) => (
            <ArticleContainer
              article={article}
              key={index}
            />
          ))
        }
      </div>
    )
  }
}
