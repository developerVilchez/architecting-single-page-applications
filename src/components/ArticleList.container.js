// @flow
import React from 'react';

import type {ArticleState} from "../store/ArticleState";
import {articleStore} from "../store/ArticleStore";
import {ArticleListComponent} from "./ArticleList.component";

type State = {
  articles: [];
}

export const articleContainerHoc = (articleStore) => (ArticleListComponent: any) => {
  return class extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);

      this.state = {
        articles: []
      };

      this.subscriber = articleStore.subscribe(this.mapStateToProps.bind(this));
    }

    mapStateToProps(articles: ArticleState) {
      this.setState({articles});
    }

    componentWillUnmount() {
      articleStore.unsubscribe(this.subscriber);
    }

    render() {
      return <ArticleListComponent {...this.state}/>;
    }
  }
};

export const ArticleListContainer = articleContainerHoc(articleStore)(ArticleListComponent);
