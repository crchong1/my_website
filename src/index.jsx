import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './app'

const renderApp = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp(App);

// // Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./app', () => {
//     renderApp(require('./app').default);
//   })
// }
