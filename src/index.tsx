import { MuiThemeProvider } from '@material-ui/core/styles'
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import App from './App';
import './index.css';
import Bar from './pages/Bar';
import Foo from './pages/Foo';
// import Home from './pages/Home';
import registerServiceWorker from './registerServiceWorker';
import { hogeAsyncReducers, IHogeState } from './states/hogeAsyncState';
import Theme from './theme'

const history = createBrowserHistory()

const reducer = combineReducers<IAppState>({
  hoge: hogeAsyncReducers
});

export interface IAppState {
  hoge: IHogeState
};

const initialState = {
}

const store = createStore(
  connectRouter(history)(reducer),
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history),
      logger
    )
  )
);

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
            <Route exact={true} path={'/'} component={App} />
            <Route exact={true} path={'/foo'} component={Foo}/>
            <Route exact={true} path={'/bar'} component={Bar}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();