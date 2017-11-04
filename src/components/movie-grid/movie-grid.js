import React from 'react';

import MovieCard from 'components/movie-card';

import styles from './movie-grid.css';

export default class MovieGrid extends React.Component {
  render() {
    const movies = [
      { title: 'Thor: Ragnarok', posterImg: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/19730-cartaz.jpg' },
      { title: 'Big Pai, Big Filho', posterImg: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/20053-cartaz.jpg' },
      { title: 'Tempestade: Planeta em Fúria', posterImg: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/19927-cartaz.jpg' },
      { title: 'A noiva', posterImg: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/20417-cartaz.jpg' },
      { title: 'Historietas assombradas - O filme', posterImg: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/19990-cartaz.jpg' },
      { title: 'A Morte te dá Parabéns', posterImg: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/20034-cartaz.jpg' }
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
