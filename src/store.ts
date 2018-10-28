import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { hogeAsyncReducers, IHogeState } from './states/hogeAsyncState';

const reducer = combineReducers<IAppState>({
  hoge: hogeAsyncReducers
});

export interface IAppState {
  hoge: IHogeState
};

const store = createStore(
  reducer,
  applyMiddleware(logger, thunkMiddleware)
);

export default store;