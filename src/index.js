import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import axios from 'axios';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { takeEvery, put } from 'redux-saga/effects' 
import createSagaMiddleware from 'redux-saga';

const categoryReducer = (state = [], action) => {

}

const favoritieReducer = (state = [], action) => {

}

// Sagas ------


const sagaMiddleware = createSagaMiddleware();


// createStore



// sagaMiddleware.run('');

ReactDOM.render(<App />, document.getElementById('root'));
