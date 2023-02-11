import React, { useState, useEffect } from "react";
import Todo from './components/Todo';
import { getTodos, addTodo, deleteTodo, updateTodo } from "./utilize/HandleAPI";

const App =()=>{
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [isUpdaing, setIsUpdaing] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(()=>{
    getTodos(setTodos);
  },[]);

  const updateMode = (_id, text)=>{
    setIsUpdaing(true);
    setText(text);
    setTodoId(_id);
  }

  return (
    <div>
      <div>
        <h1>Todo App</h1>
        <div>
          <input type="text" placeholder="Add todos..." onChange={(e)=>setText(e.target.value)} value={text}/>
          <button onClick={isUpdaing ? ()=>updateTodo(todoId, setIsUpdaing, text, setText, setTodos) : ()=>addTodo(text, setText, setTodos)}>{isUpdaing ? "Update":"Add"}</button>
        </div>
        <div>
          {todos.map((todo)=> <Todo key={todo._id} text={todo.item} updateMode={()=>updateMode(todo._id, todo.item)} deleteMode={()=>deleteTodo(todo._id, setTodos)}/> )}
        </div>
      </div>
    </div>
  )
};

export default App;