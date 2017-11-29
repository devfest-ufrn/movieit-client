import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/pages/home';
import Movie from 'components/pages/movie';

import 'styles/app.css';

import styles from './app.css';

export default class App extends Component {
  render() {
    return (
      <main className={ styles.container }>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/movie/:id' component={ Movie }/>
        </Switch>
      </main>
    );
  }
}
