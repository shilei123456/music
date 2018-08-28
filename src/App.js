import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import serverApi from './middleware/serverApi';
import MusicHome from './container/MusicHome';
import rootReducer from './reducers';
import './App.css';

const logger = createLogger();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, serverApi, logger))
);
const App = () => (
  <Provider store={store}>
    <div>
      <MusicHome />
    </div>
  </Provider>
);

export default App;
