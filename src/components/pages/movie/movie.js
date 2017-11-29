import React from 'react';
import { Link } from 'react-router-dom'
import cx from 'classnames';
import _ from 'lodash';

import MovieSessions from 'components/movie-sessions';

import leftArrow from './left-arrow.svg';

import styles from './movie.css';

export default function Movie({
  movie: movieData,
  theatersSessions
}) {
  const { ratings } = movieData;
  const findRating = (key) => {
    const rating = _.find(ratings, { name: key });
    return rating ? rating.value : null;
  };

  return (
    <article className={ styles.wrapper }>
      <header className={ styles.header }>
        <Link to="/">
          <img className={ styles.arrowBack } src={ leftArrow } alt="imagem seta para voltar" />
        </Link>
        <img
          className={ styles.banner }
          src={ movieData.posterHorizontal }
          alt={ `Pôster do filme ${ movieData.title }` }
        />
        <div className={ styles.headerInfoWrapper }>
          <h1 className={ styles.title }>{ movieData.title }</h1>
          <p className={ styles.basicInfo }>
            <span>{ movieData.genres.join(', ') }</span>
            <span>{ movieData.duration }min</span>
            <span>{ movieData.contentRating }</span>
          </p>
        </div>
      </header>
      <ul className={ styles.ratings }>
        <li className={ styles.ratingItem }>
          <img className={ styles.ratingImage } src="https://png.icons8.com/imdb/color/50/000000" />
          <span className={ styles.ratingValue }>{ findRating('IMDb') }</span>
        </li>
        <li className={ styles.ratingItem }>
          <img className={ cx(styles.ratingImage, styles.metacriticImage) } src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/500px-Metacritic.svg.png" />
          <span className={ styles.ratingValue }>{ findRating('Metascore') }</span>
        </li>
        <li className={ styles.ratingItem }>
          <img className={ cx(styles.ratingImage, styles.filmowImage) } src="https://ui.fstatic.com/static/images/header-filmow-logo.png" />
          <span className={ styles.ratingValue }>{ findRating('Filmow') }</span>
        </li>
      </ul>
      <div className={ styles.about }>
        <p>{ movieData.synopsis }</p>
        <p><b>Diretor</b>{ movieData.director }</p>
        <p><b>Elenco principal</b>{ movieData.cast }</p>
      </div>
      <MovieSessions data={ theatersSessions } />
      <div
        style={ { backgroundImage: `url(${ movieData.posterHorizontal })` } }
        className={ styles.bgOverlay }
      />
    </article>
  );
}
