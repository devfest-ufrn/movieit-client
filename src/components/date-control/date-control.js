import React from 'react';
import moment from 'moment';
import cx from 'classnames';

import styles from './date-control.css';

export default function DateControl({
  activeDay,
  onLeftClick = () => {},
  onRightClick = () => {}
}) {
  const currentDay = moment().format('YYYY-MM-DD');

  return (
    <div className={ styles.controlWrapper }>
      <h2 className={ styles.title }>Próximas sessões</h2>
      <div className={ styles.dayControl }>
        { activeDay > currentDay &&
          <button className={ styles.button } onClick={ onLeftClick.bind(this) }>
            <i className="material-icons">chevron_left</i>
          </button>            
        }
        <span className={ styles.dayInfo }>
          <span className={ cx('material-icons', styles.dayIcon) }>date_range</span>
          <span className={ styles.dayLabel }>{ moment(activeDay).format('DD/MM') }</span>
        </span>
        <button className={ styles.button } onClick={ onRightClick.bind(this) }>
          <i className="material-icons">chevron_right</i>
        </button>
      </div>
    </div>
  );
}
