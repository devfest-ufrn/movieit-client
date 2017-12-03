import React from 'react';

import styles from './session-block.css';

export default function SessionBlock({
  data,
  onClick = () => {}
}) {
  const { time, type } = data;
  return (
    <button className={ styles.wrapper } onClick={ onClick.bind(this, data) }>
      <span className={ styles.time }>{ time }</span>
      <span className={ styles.tags }>{ type.join(' | ') }</span>
    </button>
  );
}
