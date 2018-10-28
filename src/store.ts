import { combineReducers, createStore } from 'redux';
import { hogeAsyncReducers, IHogeState } from './states/hogeAsyncState';

export interface IAppState {
  hoge: IHogeState
};

const store = createStore(
  combineReducers<IAppState>({
    hoge: hogeAsyncReducers
  })
);

export default store;