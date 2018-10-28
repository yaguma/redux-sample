import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const hogeActions = {
  updateEmail: actionCreator<string>('ACTIONS_UPDATE_EMAIL'),
  updateName: actionCreator<string>('ACTIONS_UPDATE_NAME')
};
