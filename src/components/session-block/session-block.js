import React from 'react';

import styles from './session-block.css';

export default function SessionBlock({
  time,
  tags
}) {
  return (
    <div className={ styles.wrapper }>
      <span className={ styles.time }>{ time }</span>
      <span className={ styles.tags }>{ tags.join(' | ') }</span>
    </div>
  );
}
