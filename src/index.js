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
    if(action.type==='FETCH_GIF') {
        return action.payload
    }
    return state
}

const favoriteReducer = (state = [], action) => {
    return state
}

const imageReducer = (state = [], action) => {
    if(action.type==='SET_GIF') {
        return action.payload
    }
    return state;
}

// Sagas ------

function* fetchGif(searchTerm) {
    try{
    yield console.log('in fetch Gif', searchTerm.payload);
    const imageResponse = yield axios.get(`/api/category/request/${searchTerm.payload}`)
    yield put({ type: 'SET_GIF', payload: imageResponse.data})
    } catch (err) {
        console.log(err);
    }
}

const sagaMiddleware = createSagaMiddleware();

function* watcherSaga() {
    yield takeEvery('FETCH_GIF', fetchGif)
    // yield takeEvery('ADD_GIF', addGif)
}

// createStore

const storeInstance = createStore(
    combineReducers({
        categoryReducer,
        imageReducer,
        favoriteReducer
    }),
    applyMiddleware(sagaMiddleware, logger),
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
