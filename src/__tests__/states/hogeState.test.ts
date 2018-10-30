import {hogeAsyncReducers, IHogeState} from '../../states/hogeAsyncState';
import { hogeAsyncActions } from '../../actions/hogeAsyncActions';

const initialState:IHogeState = {
  email: '',
  errors: {},
  isFetching: false,
  name: '',
  params: {},
  result: {}
};
 
describe('store/hogeAsyncState', () => {
  it('should have initial state', () => {
    expect(hogeAsyncReducers(undefined,{type:'@@INIT'}))
      .toEqual(
        Object.assign({}, initialState));
  });
  it('should update state. isFetching to true', () => {
    expect(
      hogeAsyncReducers(
          initialState,
          {type:'ACTIONS_SUBMIT_STARTED'})
        ).toEqual(
          Object.assign({},
            initialState,
            {isFetching:true})
        );
  });
  it('should update state. email, name', () => {
    expect(
      hogeAsyncReducers(
        initialState,
        {type:'ACTIONS_SUBMIT_DONE', payload:{result:{email:'email', name:'name'}})
      ).toEqual(
        Object.assign({},
          initialState,
          {isFetching:false, email:'email', name:'name'})
      );
  });
  it('should update state. error', () => {
    expect(
      hogeAsyncReducers(
        initialState,
        {type:'ACTIONS_SUBMIT_FAILED', payload:{error:'error'})
      ).toEqual(
        Object.assign({},
          initialState,
          {isFetching:false, errors:'error'})
      );
  });
  it('should update state. email', () => {
    expect(
      hogeAsyncReducers(
        initialState,
        {type:'ACTIONS_UPDATE_EMAIL', payload:'email')
      ).toEqual(
        Object.assign({},
          initialState,
          {email:'email'})
      );
  });
  it('should update state. name', () => {
    expect(
      hogeAsyncReducers(
        initialState,
        {type:'ACTIONS_UPDATE_NAME', payload:'name')
      ).toEqual(
        Object.assign({},
          initialState,
          {name:'name'})
      );
  });
});