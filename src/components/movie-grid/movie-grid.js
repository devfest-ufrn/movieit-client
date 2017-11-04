import React from 'react';

import MovieCard from 'components/movie-card';

import styles from './movie-grid.css';

export default class MovieGrid extends React.Component {
  render() {
    const movies = [
      { id: 1, title: 'Thor: Ragnarok', posterImg: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/19730-cartaz.jpg' },
      { id: 2, title: 'Big Pai, Big Filho', posterImg: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/20053-cartaz.jpg' },
      { id: 3, title: 'Tempestade: Planeta em Fúria', posterImg: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/19927-cartaz.jpg' },
      { id: 4, title: 'A noiva', posterImg: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/20417-cartaz.jpg' },
      { id: 5, title: 'Historietas assombradas - O filme', posterImg: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/19990-cartaz.jpg' }
    ];
    const listWidth = (movies.length * (140 + 15)) - 15;

    return (
      <div
        className={ styles.wrapper }
      >
        <div style={ { width: `${ listWidth }px` } }>
          { movies.map((movie, i) => {
            return (
              <MovieCard
                key={ i }
                id={ movie.id }
                className={ styles.entry }
                title={ movie.title }
                posterImg={ movie.posterImg }
              />
            );
          }) }
        </div>
      </div>
    );
  }
}
