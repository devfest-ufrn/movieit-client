import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import moment from 'moment';

import { actions as activeDayActions } from 'ducks/active-day';
import { actions as activeSessionActions } from 'ducks/active-session';

import Home from 'components/pages/home';

function parseNextSessions(activeDay, movies, sessions) {
  const nextSessions = [];

  if(!sessions) { return nextSessions; }
  const moviesIds = _.map(movies, movie => movie.ingressoId);
  const filteredSessions = {};
  _.each(moviesIds, (movieId) => {
    filteredSessions[movieId] = _.first(_.filter(sessions[movieId], { date: activeDay }));
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

  const currentDay = moment().format('YYYY-MM-DD');
  const currentTime = moment().format('HH:mm');

  return _(nextSessions)
    .filter((session) => {
      if(currentDay !== activeDay) { return true; }
      return session.time > currentTime;
    })
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
    subtractDay: activeDayActions.subtract,
    loadActiveSession: activeSessionActions.load
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
