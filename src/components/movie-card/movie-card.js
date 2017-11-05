import React from 'react';
import { Link } from 'react-router-dom'
import cx from 'classnames';

import styles from './movie-card.css';

export default function MovieCard({
  className,
  id,
  title,
  posterImg,
  rating
}) {
  return (
    <article className={ cx(styles.wrapper, className) }>
      <Link to={ `/movie/${ id }` }>
        <img
          className={ styles.posterImg }
          src={ posterImg }
          alt={ `Pôster do filme ${ title }` }
        />
        <span className={ styles.rating }>{ rating }</span>
        <header className={ styles.header }>
          <h3 className={ styles.title }>{ title }</h3>
        </header>
      </Link>
    </article>
  );
}
