import React, { Component } from 'react';
// import TodoApp from './components/projects/Todo/TodoApp';
import './App.css';


import TodoForm from '../src/components/projects/Todo/TodoForm';
import TodoHeader from '../src/components/projects/Todo/TodoHeader';
import TodoList from '../src/components/projects/Todo/TodoList';
import TodoListItem from '../src/components/projects/Todo/TodoListItem';

var todoItems = [];
todoItems.push({index: 1, value: "Ketsers", done: false});
todoItems.push({index: 2, value: "Ketsers", done: false});
todoItems.push({index: 3, value: "Ketsers", done: false});

class App extends Component {
    constructor (props) {
      super(props);
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.markTodoDone = this.markTodoDone.bind(this);
      this.state = {todoItems: todoItems};
    }
    addItem(todoItem) {
      todoItems.unshift({
        index: todoItems.length+1, 
        value: todoItem.newItemValue, 
        done: false
      });
      this.setState({todoItems: todoItems});
    }
    removeItem (itemIndex) {
      todoItems.splice(itemIndex, 1);
      this.setState({todoItems: todoItems});
    }
    markTodoDone(itemIndex) {
      var todo = todoItems[itemIndex];
      todoItems.splice(itemIndex, 1);
      todo.done = !todo.done;
      todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
      this.setState({todoItems: todoItems});  
    }
    render() {
      return (
        
        <div id="main">
          <TodoHeader />
          <TodoList items={todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
          <TodoForm addItem={this.addItem} />
        </div>
      );
    }
  }


export default App ;
