import {createStore,applyMiddleware} from 'redux'
import totalReducer from './reducers/root-reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../store/saga/root-saga'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(totalReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store