import React from 'react';

import styles from './session-card.css';

export default function SessionCard({
  data,
  loadActiveSession
}) {
  const {
    movieName,
    theater,
    posterImage,
    type,
    time
  } = data;
  const timeSplit = time.split(':');

  return (
    <article className={ styles.wrapper } onClick={ loadActiveSession.bind(this, data) }>
      <span className={ styles.time }>
        <span>{ timeSplit[0] }h</span>
        <span>{ timeSplit[1] }</span>
      </span>
      <header className={ styles.header }>
        <h3 className={ styles.movieTitle }>{ movieName }</h3>
        <p className={ styles.movieTheater }>{ theater }</p>
      </header>
      <ul className={ styles.tags }>
        { type.map((tag, i) => {
          return (
            <li key={ i }>{ tag }</li>
          );
        }) }
      </ul>
      <div
        style={ { backgroundImage: `url(${ posterImage })` } }
        className={ styles.posterImage }
      />
    </article>
  );
}
