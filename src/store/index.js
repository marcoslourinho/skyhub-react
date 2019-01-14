import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reports from './reducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    reports,
  }),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;