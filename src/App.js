import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import articleService from "./domain/ArticleService";

const article1 = articleService.createArticle({title: '12 traits', author: 'Peterson'});

const incrementedArticle = articleService.incrementLikes(article1, 4);

console.log('article1', article1);
console.log('incrementedArticle', incrementedArticle);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
