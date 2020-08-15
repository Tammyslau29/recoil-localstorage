import React from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import useLocalStorage from '../hooks/useLocalStorage.js'

export default function Todos({todoListState}) {

  const [persistedTodoList, setPersistedTodoList] = useLocalStorage(
    "todoList",
    []
  );

    //getter for state
  const todoList = useRecoilValue(todoListState);

  //setter for state
  const setTodoList = useSetRecoilState(todoListState);

  const deleteTodo = (index) => {
    setTodoList((oldTodoList) => {
      const newTodoList = oldTodoList.filter(function (el, i) {
        return index !== i;
      });
      
      //sets localstorage to match state
      setPersistedTodoList(newTodoList);

      return newTodoList;
    });
  };

  return (
    <ul>
      {todoList.map((todo, index) => (
        <li className="to-do-item" key={index + 100}>
          <button onClick={() => deleteTodo(index)} className="delete-btn">x</button>
          <label htmlFor="todo" data-content={todo.text} className="to-do-text">
            {todo.text}
          </label>
        </li>
      ))}
    </ul>
  );
}
