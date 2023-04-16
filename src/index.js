import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import myFirstReducer from './reducer';
import { Provider } from 'react-redux';
import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import mySaga from './sagas';

// import thunk from 'redux-thunk';

const rootReducer = combineReducers({ myFirstReducer });
const sagaMiddleware = createSagaMiddleware();
const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(rootReducer, applyMiddleware(thunk))
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
