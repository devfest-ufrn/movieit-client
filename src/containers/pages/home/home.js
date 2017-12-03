import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { actions as activeDayActions } from 'ducks/active-day';

import Home from 'components/pages/home';

function parseNextSessions(activeDay, movies, sessions) {
  const nextSessions = [];

  if(!sessions) { return nextSessions; }
  const moviesIds = _.map(movies, movie => movie.ingressoId);
  const filteredSessions = {};
  _.each(sessions, (resultItem, index) => {
    filteredSessions[moviesIds[index]] = _.first(_.filter(resultItem, { date: activeDay }));
  });

  _.each(movies, (movie) => {
    const sessionsGroup = filteredSessions[movie.ingressoId];
    if(!sessionsGroup) { return; }

    _.each(sessionsGroup.theaters, (theater) => {
      _.each(theater.rooms, (room) => {
        _.each(room.sessions, (session) => {
          const sessionObj = {
            time: session.time,
            siteURL: session.siteURL,
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
  const { activeDay, movies, sessions } = state;

  return {
    activeDay,
    movies,
    nextSessions: parseNextSessions(activeDay, movies, sessions)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addDay: activeDayActions.add,
    subtractDay: activeDayActions.subtract
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
