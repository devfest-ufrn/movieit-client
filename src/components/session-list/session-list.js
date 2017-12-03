import React from 'react';

import SessionCard from 'components/session-card';

export default function SessionList({ data, loadActiveSession }) {
  if(data.length === 0) {
    return <span>Nenhuma sessão disponível.</span>
  }

  return data.map((session, i) => {
    return (
      <SessionCard
        key={ i }
        data={ session }
        loadActiveSession={ loadActiveSession.bind(this) }
      />
    );
  });
}
