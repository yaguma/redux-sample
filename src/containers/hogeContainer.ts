import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { Action } from 'typescript-fsa';
import { hogeActions } from '../actions/hogeActions';
import { HogeComponent } from '../components/hogeComponent';
import { IAppState } from '../store';

export interface IHogeActions {
  updateEmail: (v: string) => Action<string>;
  updateName: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
  return {
    updateEmail: (v: string) => dispatch(hogeActions.updateEmail(v)),
    updateName: (v: string) => dispatch(hogeActions.updateName(v))
  };
}

function mapStateToProps(appState: IAppState) {
  return Object.assign({}, appState.hoge);
}

export default connect(mapStateToProps, mapDispatchToProps)(HogeComponent);
