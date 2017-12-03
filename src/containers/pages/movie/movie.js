import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { actions as activeDayActions } from 'ducks/active-day';

import Movie from 'components/pages/movie';

function parseTheatersSessions(activeDay, movie, sessions) {
  if(!sessions) { return []; }

  const movieSessions = _.first(_.filter(sessions[movie.ingressoId], { date: activeDay }));
  if(!movieSessions) { return []; }

  let theatersSessions = [];

  _.each(movieSessions.theaters, (theater) => {
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
  const { activeDay, movies, sessions } = state;

  const movie = _.find(movies, { id: Number(movieId) });
  const theatersSessions = parseTheatersSessions(activeDay, movie, sessions)

  return {
    activeDay,
    movie,
    theatersSessions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addDay: activeDayActions.add,
    subtractDay: activeDayActions.subtract
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
