import React, { Component } from 'react';

import MovieGrid from 'components/movie-grid';
import SessionList from 'components/session-list';

import styles from './home.css';

export default class Home extends Component {
  render() {
    return (
      <div className={ styles.container }>
        <header>
          <h1>MovieIt</h1>
        </header>
        <div>
          <h2>Filmes em exibição</h2>
          <MovieGrid data={ this.props.movies } />
        </div>
        <div>
          <h2>Próximas sessões</h2>
          <SessionList />
        </div>
      </div>
    );
  }
}


