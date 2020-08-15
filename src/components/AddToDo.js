import React from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import useLocalStorage from "../hooks/useLocalStorage.js";

export default function AddTodo({todoListState, textState}) {
  const [persistedTodoList, setPersistedTodoList] = useLocalStorage(
    "todoList",
    []
  );

  //getter for state
  const [text, setText] = useRecoilState(textState);

  //setter for state
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    setTodoList((oldTodoList) => {
      const newTodoList = [
        ...oldTodoList,
        {
          text,
          isComplete: false,
        },
      ];
      setPersistedTodoList(newTodoList);
      return newTodoList;
    });
    setText("");
  };
  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <form>
      <input type="text" value={text} onChange={onChange} className="todo-input" placeholder="What would you like todoody today?"/>
      <button onClick={addItem} className="add-item">+</button>
    </form>
  );
}