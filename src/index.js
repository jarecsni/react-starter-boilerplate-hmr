import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.scss';

import Worker from './Simple.worker';

const worker = new Worker();

worker.postMessage({ a: 1 });
worker.onmessage = function (event) {
  console.log('On Message: ', event.data);
};


const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

render(App);
if (module.hot) module.hot.accept('./components/App', () => render(App));
