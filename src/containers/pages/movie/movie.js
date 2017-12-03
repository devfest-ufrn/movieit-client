import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import moment from 'moment';

import { actions as activeDayActions } from 'ducks/active-day';
import { actions as activeSessionActions } from 'ducks/active-session';

import Movie from 'components/pages/movie';

function parseTheatersSessions(activeDay, movie, sessions) {
  if(!sessions) { return []; }

  const movieSessions = _.first(_.filter(sessions[movie.ingressoId], { date: activeDay }));
  if(!movieSessions) { return []; }

  let theatersSessions = [];
  const currentTime = moment().format('HH:mm');
  const currentDay = moment().format('YYYY-MM-DD');

  _.each(movieSessions.theaters, (theater) => {
    let theaterSessions = [];

    _.each(theater.rooms, (room) => {
      _.each(room.sessions, (session) => {
        if(currentDay === activeDay && session.time < currentTime) {
          return;
        }

        const sessionObj = {
          time: session.time,
          siteURL: session.siteURL,
          movieId: movie.ingressoId,
          movieName: movie.title,
          theater: theater.name,
          type: _.map(session.types, 'alias'),
          posterImage: movie.posterPortrait
        };

        theaterSessions.push(sessionObj);
      });
    });

    theatersSessions.push({
      theater: theater.name,
      sessions: _.sortBy(theaterSessions, 'time')
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
    subtractDay: activeDayActions.subtract,
    loadActiveSession: activeSessionActions.load
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
