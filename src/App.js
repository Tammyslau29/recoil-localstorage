import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { atom, RecoilRoot } from "recoil";
// import AddTodo from "./components/AddToDo.js";
// import Todos  from "./components/Todos.js";
// import useLocalStorage from './hooks/useLocalStorage.js';
import TodoWrapper from "./components/TodoWrapper.js"

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          <p>
           Howdy ToDoody
          </p>
          {/* <AddTodo todoListState={todoListState} setPersistedTodoList={setPersistedTodoList}/>
          <Todos todoListState={todoListState}/> */}
          <TodoWrapper/>
        </header>
      </div>
      </RecoilRoot>
  );
}

export default App;
