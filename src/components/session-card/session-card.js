import React from 'react';

import styles from './session-card.css';

export default function SessionCard({
  movieTitle,
  movieTheater,
  posterImage,
  tags,
  time
}) {
  const timeSplit = time.split(':');

  return (
    <article className={ styles.wrapper }>
      <span className={ styles.time }>
        <span>{ timeSplit[0] }h</span>
        <span>{ timeSplit[1] }</span>
      </span>
      <header className={ styles.header }>
        <h3 className={ styles.movieTitle }>{ movieTitle }</h3>
        <p className={ styles.movieTheater }>{ movieTheater }</p>
      </header>
      <ul className={ styles.tags }>
        { tags.map((tag, i) => {
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
