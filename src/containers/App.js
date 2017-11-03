import React, { Component } from 'react';

import MovieGrid from 'components/movie-grid';

import 'styles/app.css';

import styles from './app.css';

export default class App extends Component {
  render() {
    return (
      <div className={ styles.container }>
        <header>
          <h1>MovieIt</h1>
        </header>
        <div>
          <h2>Filmes em exibição</h2>
          <MovieGrid />
        </div>
      </div>
    );
  }
}
