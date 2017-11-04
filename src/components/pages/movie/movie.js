import React, { Component } from 'react';
import _ from 'lodash';

import MovieSessions from 'components/movie-sessions';

import MOVIES from 'data/sample-movies';

import styles from './movie.css';

export default class Movie extends Component {
  render() {
    const movieData = _.find(MOVIES, { id: Number(this.props.match.params.id) });

    return (
      <article className={ styles.wrapper }>
        <header className={ styles.header }>
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
        <div className={ styles.about }>
          <p>{ movieData.synopsis }</p>
          <p><b>Diretor</b>{ movieData.director }</p>
          <p><b>Elenco principal</b>{ movieData.cast }</p>
        </div>
        <MovieSessions />
        <div
          style={ { backgroundImage: `url(${ movieData.posterHorizontal })` } }
          className={ styles.bgOverlay }
        />
      </article>
    );
  }
}
