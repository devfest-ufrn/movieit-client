import React, { Component } from 'react';

import DateControl from 'components/date-control';
import MovieGrid from 'components/movie-grid';
import SessionList from 'components/session-list';

import logo from './logo.png';

import styles from './home.css';

export default class Home extends Component {
  render() {
    return (
      <div className={ styles.container }>
        <header>
          <img className={ styles.logo } src={ logo } alt="" />
        </header>
        <div>
          <h2>Filmes em exibição</h2>
          <MovieGrid data={ this.props.movies } />
        </div>
        <div>
          <DateControl
            activeDay={ this.props.activeDay }
            onLeftClick={ this.props.subtractDay.bind(this) }
            onRightClick={ this.props.addDay.bind(this) }
          />
          <SessionList
            data={ this.props.nextSessions }
            loadActiveSession={ this.props.loadActiveSession.bind(this) }
          />
        </div>
      </div>
    );
  }
}
