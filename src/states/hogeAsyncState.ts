import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { hogeAsyncActions } from '../actions/hogeAsyncActions';


export interface IHogeState {
  email: string;
  errors: object;
  isFetching: boolean;
  name: string;
  params: object;
  result: object;
}

const initialState: IHogeState = {
  email: '',
  errors: {},
  isFetching: false,
  name: '',
  params: {},
  result: {}
};

export const hogeAsyncReducers = reducerWithInitialState(initialState)
  .case(hogeAsyncActions.startLogin, (state) => {
    return {
      ...state,
      isFetching:true
    }
  })
  .case(hogeAsyncActions.failedLogin, (state, action) => {
    return {
      ...state,
      errors: action.error,
      isFetching:false,
    }
  })
  .case(hogeAsyncActions.doneLogin, (state, action) => {
    return Object.assign({}, state, {
      email: action.result.email,
      isFetching:false,
      name: action.result.name
    });
  })
  .case(hogeAsyncActions.updateName, (state, name) => {
    return Object.assign({}, state, { name });
  })
  .case(hogeAsyncActions.updateEmail, (state, email) => {
    return Object.assign({}, state, { email });
  });