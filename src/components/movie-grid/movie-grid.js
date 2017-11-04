import React from 'react';

import MovieCard from 'components/movie-card';

import MOVIES from 'data/sample-movies';

import styles from './movie-grid.css';

export default class MovieGrid extends React.Component {
  render() {
    const listWidth = (MOVIES.length * (140 + 15)) - 15;

    return (
      <div
        className={ styles.wrapper }
      >
        <div style={ { width: `${ listWidth }px` } }>
          { MOVIES.map((movie, i) => {
            return (
              <MovieCard
                key={ i }
                id={ movie.id }
                className={ styles.entry }
                title={ movie.title }
                posterImg={ movie.posterPortrait }
              />
            );
          }) }
        </div>
      </div>
    );
  }
}
