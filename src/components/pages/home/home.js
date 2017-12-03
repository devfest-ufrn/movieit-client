import React, { Component } from 'react';
import moment from 'moment';
import cx from 'classnames';

import MovieGrid from 'components/movie-grid';
import SessionList from 'components/session-list';

import styles from './home.css';

export default class Home extends Component {
  render() {
    const currentDay = moment().format('YYYY-MM-DD');

    return (
      <div className={ styles.container }>
        <header>
          <h1>MovieIt</h1>
        </header>
        <div>
          <h2>Filmes em exibição</h2>
          <MovieGrid data={ this.props.movies } />
        </div>
        <div>
          <div className={ styles.controlWrapper }>
            <h2 className={ styles.subTitle }>Próximas sessões</h2>
            <div className={ styles.dayControl }>
              { this.props.activeDay > currentDay &&
                <button className={ styles.button } onClick={ this.props.subtractDay.bind(this) }>
                  <i className="material-icons">chevron_left</i>
                </button>            
              }
              <span className={ styles.dayInfo }>
                <span className={ cx('material-icons', styles.dayIcon) }>date_range</span>
                <span className={ styles.dayLabel }>{ moment(this.props.activeDay).format('DD/MM') }</span>
              </span>
              <button className={ styles.button } onClick={ this.props.addDay.bind(this) }>
                <i className="material-icons">chevron_right</i>
              </button>
            </div>
          </div>
          <SessionList data={ this.props.nextSessions } />
        </div>
      </div>
    );
  }
}
