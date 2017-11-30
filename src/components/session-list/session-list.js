import React from 'react';

import SessionCard from 'components/session-card';

export default function SessionList({ data }) {
  return data.map((session, i) => {
    return (
      <SessionCard
        key={ i }
        movieTitle={ session.movieName }
        movieTheater={ session.theater }
        posterImage={ session.posterImage }
        tags={ session.type }
        time={ session.time }
        siteURL={ session.siteURL }
      />
    );
  });
}
