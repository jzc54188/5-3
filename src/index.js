import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles.css'
import {Provider} from 'react-redux'
import store from './store/index'
import './axios.config'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

