import React from 'react';
import _ from 'lodash';

import MovieCard from 'components/movie-card';

import styles from './movie-grid.css';

export default class MovieGrid extends React.Component {
  render() {
    const { data } = this.props;
    if(!data) { return null; }

    const listWidth = (data.length * (140 + 15)) - 15;
    const sortedMovies = _.sortBy(data, (movie) => {
      return -movie.ratings[0].value;
    });

    return (
      <div
        className={ styles.wrapper }
      >
        <div style={ { width: `${ listWidth }px` } }>
          { sortedMovies.map((movie, i) => {
            return (
              <MovieCard
                key={ i }
                id={ movie.id }
                className={ styles.entry }
                title={ movie.title }
                posterImg={ movie.posterPortrait }
                rating={ movie.ratings[0].value }
              />
            );
          }) }
        </div>
      </div>
    );
  }
}
