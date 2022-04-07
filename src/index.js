import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';

import Request from './services/services';

const requestApi = new Request();
requestApi.getAllCharacters().then((res) => res.data.results.forEach((char) => console.log(char.name)));
requestApi.getCharacter(1009148).then((res) => console.log(res));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);