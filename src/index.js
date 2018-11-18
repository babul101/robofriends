import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Card from './Card';
//import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();



//State :A state is an object that gives the  description of  the application
// npm start : To start the project