import {hogeAsyncActions} from '../../actions/hogeAsyncActions';
import {hogeAsyncReducers, IHogeState} from '../../states/hogeAsyncState';

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
        hogeAsyncActions.doneLogin)
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
        hogeAsyncActions.failedLogin)
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
        hogeAsyncActions.updateEmail)
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
        hogeAsyncActions.updateName)
      ).toEqual(
        Object.assign({},
          initialState,
          {name:'name'})
      );
  });
});