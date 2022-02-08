import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import './assets/styles/fonts.css';

//if (process.env.NODE_ENV === 'development') {
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { worker } = require('./mocks/browser');
//}
worker.start().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
});
