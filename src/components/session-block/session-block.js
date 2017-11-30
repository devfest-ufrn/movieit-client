import React from 'react';

import styles from './session-block.css';

export default function SessionBlock({
  siteURL,
  time,
  tags
}) {
  return (
    <a href={ siteURL } className={ styles.wrapper }>
      <span className={ styles.time }>{ time }</span>
      <span className={ styles.tags }>{ tags.join(' | ') }</span>
    </a>
  );
}
