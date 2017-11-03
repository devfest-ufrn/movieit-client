import React, { Component } from 'react';

import 'styles/app.css';

import styles from './app.css';

export default class App extends Component {
  render() {
    return (
      <header className={ styles.myClass }>
        <h1>App</h1>
      </header>
    );
  }
}
