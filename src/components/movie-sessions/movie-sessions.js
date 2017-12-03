import React from 'react';

import SessionBlock from 'components/session-block';

import DateControl from 'components/date-control';

import styles from './movie-sessions.css';

export default function MovieSessions({
  activeDay,
  addDay,
  subtractDay,
  data,
  loadActiveSession
}) {
  return (
    <div className={ styles.wrapper }>
      <DateControl
        activeDay={ activeDay }
        onLeftClick={ subtractDay.bind(this) }
        onRightClick={ addDay.bind(this) }
      />
      { data.length === 0 &&
        <span>Nenhuma sessão disponível.</span>
      }
      { data.map((item, i) => {
        return (
          <div key={ i }>
            <h3 className={ styles.movieTheater }>{ item.theater }</h3>
            <div className={ styles.list }>
              { item.sessions.map((session, i) => {
                return (
                  <SessionBlock
                    key={ i }
                    data={ session }
                    onClick={ loadActiveSession.bind(this) }
                  />
                );
              }) }
            </div>
          </div>
        );
      }) }
    </div>
  );
}
