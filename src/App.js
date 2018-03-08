// @flow
import React, {Component} from 'react';

import './App.css';

import {ArticleFormContainer} from "./components/ArticleForm.container";
import {ArticleListContainer} from "./components/ArticleList.container";

type Props = {};

type State = {};

class App extends Component<Props, State> {
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
