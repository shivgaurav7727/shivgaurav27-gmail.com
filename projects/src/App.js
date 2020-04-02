import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
class App extends Component {
  state = {  }
  render() { 
    return <div>
      Hello From Main
      <TodoInput/>
      <TodoList/>
    </div>
  }
}
 
export default App;