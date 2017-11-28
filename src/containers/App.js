import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from 'containers/pages/home';
import Movie from 'components/pages/movie';

import { actions as appActions } from 'ducks/app';

import 'styles/app.css';

import styles from './app.css';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    load: appActions.load
  }, dispatch);
}

class App extends Component {
  componentDidMount() {
    this.props.load();
  }

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

export default connect(undefined, mapDispatchToProps)(App);
