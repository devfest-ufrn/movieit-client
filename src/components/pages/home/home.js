import React, { Component } from 'react';

import MovieGrid from 'components/movie-grid';
import SessionList from 'components/session-list';

export default class Home extends Component {
  render() {
    return [
      <header>
        <h1>MovieIt</h1>
      </header>,
      <div>
        <h2>Filmes em exibição</h2>
        <MovieGrid />
      </div>,
      <div>
        <h2>Próximas sessões</h2>
        <SessionList />
      </div>
    ];
  }
}


