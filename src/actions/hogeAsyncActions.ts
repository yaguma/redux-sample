import actionCreatorFactory, { ActionCreator, Failure, Success } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

const submit =
  actionCreator.async<{}, {email:string, name:string}, {}>('ACTIONS_SUBMIT')

export interface IHogeAsyncActions {
  doneLogin: ActionCreator<Success<{}, {}>>;
  failedLogin: ActionCreator<Failure<{}, {}>>;
  startLogin: ActionCreator<{}>;
}

export const hogeAsyncActions = {
  doneLogin: submit.done,
  failedLogin: submit.failed,
  startLogin: submit.started,
  updateEmail: actionCreator<string>('ACTIONS_UPDATE_EMAIL'),
  updateName: actionCreator<string>('ACTIONS_UPDATE_NAME'),
}
