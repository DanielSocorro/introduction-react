import React from 'react';
import { TodoCounter } from './TodoCounter'; 
import { TodoSearch } from './TodoSearch'; 
import { TodoList } from './TodoList'; 
import { TodoItem } from './TodoItem'; 
import { CreateTodoButton } from './CreateTodoButton'; 
/* import './App.css'; */


const todos=[
  { text:'Sign Pau Torres', completed:true},
  { text:'Sign Frankie de Jong', completed:false},
  { text:'Sign Anthony', completed:false},
  { text:'Sign Timber', completed:false},
  { text:'Sign Vitinha', completed:false},
];

function App() {
  return (
 <React.Fragment> 
  <TodoCounter />
  <TodoSearch />
  <TodoList>
      {todos.map(todo => (
      <TodoItem 
      key={todo.text} 
      text={todo.text}
      completed={todo.completed}
      />
      ))}
    </TodoList>
    <CreateTodoButton />
 </React.Fragment>
  );
}

export default App;
