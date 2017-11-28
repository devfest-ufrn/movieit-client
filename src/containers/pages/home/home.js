import { connect } from 'react-redux';
import _ from 'lodash';

import Home from 'components/pages/home';

function parseNextSessions(movies, sessions) {
  const nextSessions = [];

  if(!sessions) { return nextSessions; }

  _.each(movies, (movie) => {
    const sessionsGroup = sessions[movie.ingressoId];
    if(!sessionsGroup) { return; }

    _.each(sessionsGroup.theaters, (theater) => {
      _.each(theater.rooms, (room) => {
        _.each(room.sessions, (session) => {
          const sessionObj = {
            time: session.time,
            movieId: movie.ingressoId,
            movieName: movie.title,
            theater: theater.name,
            type: _.map(session.types, 'alias'),
            posterImage: movie.posterPortrait
          };

          nextSessions.push(sessionObj);
        });
      });
    });
  });

  return _(nextSessions)
    .sortBy('time')
    .take(10)
    .value();
}

function mapStateToProps(state) {
  const { movies, sessions } = state;

  return {
    movies,
    nextSessions: parseNextSessions(movies, sessions)
  };
}

export default connect(mapStateToProps)(Home);
