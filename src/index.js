import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import TodoApp from '../src/components/projects/Todo/TodoApp';

// var todoItems = [];
// todoItems.push({index: 1, value: "Ketsers", done: false});
// todoItems.push({index: 2, value: "Ketsers", done: false});
// todoItems.push({index: 3, value: "Ketsers", done: false});

// ReactDOM.render(<TodoApp initItems={todoItems}/>, document.getElementById('app'))

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
