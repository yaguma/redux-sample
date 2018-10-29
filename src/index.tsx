import { MuiThemeProvider } from '@material-ui/core/styles'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Store from './store';
import Theme from './theme'

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <Provider store={Store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();