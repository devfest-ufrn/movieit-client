import React from 'react';

import SessionBlock from 'components/session-block';

import styles from './movie-sessions.css';

export default function MovieSessions({ data }) {
  return (
    <div className={ styles.wrapper }>
      <h2 className={ styles.date }>Próximas sessões</h2>
      { data.map((item, i) => {
        return (
          <div key={ i }>
            <h3 className={ styles.movieTheater }>{ item.theater }</h3>
            <div className={ styles.list }>
              { item.sessions.map((session, i) => {
                return (
                  <SessionBlock
                    key={ i }
                    time={ session.time }
                    tags={ session.type }
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
