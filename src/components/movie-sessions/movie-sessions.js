import React from 'react';

import SessionBlock from 'components/session-block';

import styles from './movie-sessions.css';

export default function MovieSessions() {
  return (
    <div className={ styles.wrapper }>
      <h2 className={ styles.date }>Hoje <small>07/11</small></h2>
      <div>
        <h3 className={ styles.movieTheater }>Cinemark Natal</h3>
        <div className={ styles.list }>
          <SessionBlock
            time="18:20"
            tags={ ['3D', 'Macro XE', 'Leg'] }
          />
          <SessionBlock
            time="18:30"
            tags={ ['VIP', '3D', 'Leg'] }
          />
          <SessionBlock
            time="18:45"
            tags={ ['3D', 'D-Box', 'Leg'] }
          />
          <SessionBlock
            time="18:50"
            tags={ ['Leg'] }
          />
        </div>
      </div>
      <div>
        <h3 className={ styles.movieTheater }>Cinépolis Natal Shopping</h3>
        <div className={ styles.list }>
          <SessionBlock
            time="18:20"
            tags={ ['3D', 'Macro XE', 'Leg'] }
          />
          <SessionBlock
            time="18:30"
            tags={ ['VIP', '3D', 'Leg'] }
          />
        </div>
      </div>
      <div>
        <h3 className={ styles.movieTheater }>Cinépolis Partage Norte Shopping Natal</h3>
        <div className={ styles.list }>
          <SessionBlock
            time="18:20"
            tags={ ['3D', 'Macro XE', 'Leg'] }
          />
          <SessionBlock
            time="18:30"
            tags={ ['VIP', '3D', 'Leg'] }
          />
          <SessionBlock
            time="18:45"
            tags={ ['3D', 'D-Box', 'Leg'] }
          />
        </div>
      </div>
      <div>
        <h3 className={ styles.movieTheater }>Moviecom Natal Praia Shopping</h3>
        <div className={ styles.list }>
          <SessionBlock
            time="18:20"
            tags={ ['3D', 'Macro XE', 'Leg'] }
          />
        </div>
      </div>
    </div>
  );
}
