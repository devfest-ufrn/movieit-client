import { connect } from 'react-redux';
import _ from 'lodash';

import Movie from 'components/pages/movie';

function parseTheatersSessions(movie, sessions) {
  let theatersSessions = [];

  if(!sessions) { return theatersSessions; }

  const sessionsGroup = sessions[movie.ingressoId];
  if(!sessionsGroup) { return; }

  _.each(sessionsGroup.theaters, (theater) => {
    let theaterSessions = [];

    _.each(theater.rooms, (room) => {
      _.each(room.sessions, (session) => {
        const sessionObj = {
          time: session.time,
          type: _.map(session.types, 'alias'),
          siteURL: session.siteURL
        };

        theaterSessions.push(sessionObj);
      });
    });

    theatersSessions.push({
      theater: theater.name,
      sessions: theaterSessions
    });
  });

  return theatersSessions;
}

function mapStateToProps(state, ownProps) {
  const movieId = ownProps.match.params.id;
  const { movies, sessions } = state;

  const movie = _.find(movies, { id: Number(movieId) });
  const theatersSessions = parseTheatersSessions(movie, sessions);

  return {
    movie,
    theatersSessions
  };
}

export default connect(mapStateToProps)(Movie);
