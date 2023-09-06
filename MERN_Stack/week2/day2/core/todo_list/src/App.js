import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


function App() {
 
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
     
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
      
      <Todos todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
