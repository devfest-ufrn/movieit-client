import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, compose, combineReducers } from 'redux';

import * as reducers from './ducks';

import Root from 'containers/Root';

const rootReducer = combineReducers({
  ...reducers
});

const store = createStore(
  rootReducer,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
  <AppContainer>
    <Root
      store={ store }
    />
  </AppContainer>,
  document.getElementById('root')
);

if(module.hot) {
  module.hot.accept('./containers/Root', () => {
    const RootContainer = require('./containers/Root').default;
    render(
      <AppContainer>
        <RootContainer
          store={ store }
        />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
