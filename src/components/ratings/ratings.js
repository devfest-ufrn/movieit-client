import React from 'react';
import cx from 'classnames';
import _ from 'lodash';

import styles from './ratings.css';

export default function Ratings({
  ratings
}) {
  const findRating = (key) => {
    const rating = _.find(ratings, { name: key });
    return rating ? rating.value : null;
  };

  return (
    <ul className={ styles.wrapper }>
      <li className={ styles.item }>
        <img className={ styles.image } src="https://png.icons8.com/imdb/color/50/000000" />
        <span className={ styles.value }>{ findRating('IMDb') }</span>
      </li>
      <li className={ styles.item }>
        <img className={ cx(styles.image, styles.metacriticImage) } src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/500px-Metacritic.svg.png" />
        <span className={ styles.value }>{ findRating('Metascore') }</span>
      </li>
      <li className={ styles.item }>
        <img className={ cx(styles.image, styles.filmowImage) } src="https://ui.fstatic.com/static/images/header-filmow-logo.png" />
        <span className={ styles.value }>{ findRating('Filmow') }</span>
      </li>
    </ul>
  );
}
