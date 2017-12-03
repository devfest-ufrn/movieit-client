import React from 'react';
import { Link } from 'react-router-dom'
import cx from 'classnames';
import _ from 'lodash';

import MovieSessions from 'components/movie-sessions';
import Ratings from 'components/ratings';

import leftArrow from './left-arrow.svg';

import styles from './movie.css';

export default function Movie({
  activeDay,
  addDay,
  subtractDay,
  movie: movieData,
  theatersSessions
}) {
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
      <Ratings ratings={ movieData.ratings } />
      <div className={ styles.about }>
        <p>{ movieData.synopsis }</p>
        <p><b>Diretor</b>{ movieData.director }</p>
        <p><b>Elenco principal</b>{ movieData.cast }</p>
      </div>
      <MovieSessions
        activeDay={ activeDay }
        addDay={ addDay.bind(this) }
        subtractDay={ subtractDay.bind(this) }
        data={ theatersSessions }
      />
      <div
        style={ { backgroundImage: `url(${ movieData.posterHorizontal })` } }
        className={ styles.bgOverlay }
      />
    </article>
  );
}
