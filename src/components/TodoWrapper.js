import React from 'react';
import { atom } from "recoil";
import AddTodo from "./AddToDo.js";
import Todos  from "./Todos.js";
import useLocalStorage from "../hooks/useLocalStorage.js"
  
export default function TodoWrapper() {

    const [persistedTodoList, setPersistedTodoList] = useLocalStorage(
        "todoList",
        []
      );
      
      const todoListState = atom({
        key: "todoListState",
        default: persistedTodoList,
      });

      const textState = atom({
        key: "textState", // unique ID (with respect to other atoms/selectors)
        default: "", // default value (aka initial value)
      });

    return (
        <div>
          <AddTodo todoListState={todoListState}  textState={textState}/>
          <Todos todoListState={todoListState}/>
        </div>
    )
}