import React from 'react';
import cx from 'classnames';

import styles from './movie-card.css';

export default function MovieCard({
  className,
  title,
  posterImg
}) {
  return (
    <article className={ cx(styles.wrapper, className) }>
      <img
        className={ styles.posterImg }
        src={ posterImg }
        alt={ `Pôster do filme ${ title }` }
      />
      <header className={ styles.header }>
        <h3 className={ styles.title }>{ title }</h3>
      </header>
    </article>
  );
}
