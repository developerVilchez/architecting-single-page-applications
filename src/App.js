// @flow
import React, {Component} from 'react';
import './App.css';

import type {Article} from "./domain/Article";
import {ArticleFormContainer} from "./components/ArticleForm.container";
import {ArticleListContainer} from "./components/ArticleList.container";

type Props = {};

type State = {
  show: false;
  articles: Article[];
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const article1: Article = {
      id: 'a1',
      likes: 0,
      title: '12 rules for life',
      author: 'Jordan Peterson'
    };
    const article2: Article = {
      id: 'a2',
      likes: 0,
      title: 'The Subtle Art of Not Giving a F.',
      author: 'Mark Manson'
    };
    this.state = {
      show: true,
      articles: [article1, article2]
    };
  }

  render() {
    return (
      <div className="App">
        <ArticleFormContainer/>
        <ArticleListContainer/>
      </div>
    );
  }
}

export default App;
