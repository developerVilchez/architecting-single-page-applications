// @flow
import React, {Component} from 'react';

import {ArticleComponent} from "./Article.component";

type Props = {
  articles: Article[];
};

export class ArticleContainer extends Component<Props> {
  likeArticle(id: string) {
    console.log('Like article', id);
  }

  deleteArticle(id: string) {
    console.log('Delete article', id);
  }

  submitForm(event: any) {
    console.log('submitForm', event);
  };

  changeTitle(event: any) {
    console.log('changeTitle', event);
  };

  changeAuthor(event: any) {
    console.log('changeAuthor', event);
  };

  render() {
    return (
      <div>
        <ArticleComponent
          article={this.props.article}
          likeArticle={this.likeArticle}
          deleteArticle={this.deleteArticle}
        />
      </div>
    )
  }
}
