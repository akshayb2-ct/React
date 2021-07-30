import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App'
import MongoPrint from './MongoConnector/MongoTestCon';

ReactDOM.render(
  <React.StrictMode>
    <div><App /><MongoPrint /></div>
  </React.StrictMode>,
  document.getElementById('root')
);

