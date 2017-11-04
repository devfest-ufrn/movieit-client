import React from 'react';

import SessionCard from 'components/session-card';

export default function SessionList() {
  const sessions = [
    {
      movieTitle: 'Thor: Ragnarok',
      movieTheater: 'Cinépolis Partage Norte Shopping Natal',
      posterImage: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/19730-cartaz.jpg',
      tags: ['3D', 'D-Box', 'Dub'],
      time: '18:15'
    },
    {
      movieTitle: 'Big Pai, Big Filho',
      movieTheater: 'Cinépolis Natal Shopping',
      posterImage: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/20053-cartaz.jpg',
      tags: ['Dub'],
      time: '18:30'
    },
    {
      movieTitle: 'Tempestade: Planeta em Fúria',
      movieTheater: 'Cinemark Natal',
      posterImage: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/19927-cartaz.jpg',
      tags: ['Leg'],
      time: '18:40'
    },
    {
      movieTitle: 'A noiva',
      movieTheater: 'Cinemark Natal',
      posterImage: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/20417-cartaz.jpg',
      tags: ['Dub'],
      time: '18:45'
    },
    {
      movieTitle: 'Historietas assombradas - O filme',
      movieTheater: 'Cinépolis Partage Norte Shopping Natal',
      posterImage: 'https://ingresso-a.akamaihd.net/img/cinema/cartaz/19990-cartaz.jpg',
      tags: ['Dub'],
      time: '18:50'
    }
  ];

  return sessions.map((session, i) => {
    return (
      <SessionCard
        key={ i }
        movieTitle={ session.movieTitle }
        movieTheater={ session.movieTheater }
        posterImage={ session.posterImage }
        tags={ session.tags }
        time={ session.time }
      />
    );
  });
}
