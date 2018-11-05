import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { Action } from 'typescript-fsa';
import { hogeAsyncActions } from '../actions/hogeAsyncActions';
import { HogeComponent } from '../components/hogeComponent';
import { IAppState } from '../index';


export interface IHogeAsyncActions {
  startLogin: () => Action<string>;
  updateEmail: (v: string) => Action<string>;
  updateName: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    startLogin() {
      dispatch(hogeAsyncActions.startLogin({}));

      fetch("test.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch(hogeAsyncActions.doneLogin({
            params: {}, result: {
              email: data.email,
              name: data.name
            }
          }));
        })
        .catch(() => {
          dispatch(hogeAsyncActions.failedLogin({
            error: {}, params: {}
          }));
        });
    },
    updateEmail: (v: string) => dispatch(hogeAsyncActions.updateEmail(v)),
    updateName: (v: string) => dispatch(hogeAsyncActions.updateName(v))
  };
}

function mapStateToProps(appState: IAppState) {
  return Object.assign({}, appState.hoge);
}

export default connect(mapStateToProps, mapDispatchToProps)(HogeComponent);
