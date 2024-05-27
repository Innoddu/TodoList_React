import './App.css';
import React, { useState, useRef } from 'react'
import Header from './component/Header.js'
import Writer from './component/Writer.js'
import Todolist from './component/Todolist.js'
import Todoitem from './component/Todoitem'
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "Studying React",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Lundurying",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: true,
    content: "FastAPI",
    createDate: new Date().getTime(),
  }



]
function App() {
  // Create todo
  const idRef = useRef(0);
  const [todo, setTodo] = useState([]);
  const onCreate = (content) => {
    const newItem = {
    id: idRef.current,
    isDone: false,
    content,
    createDate: new Date().getTime(),
    };
    if (!todo) {
      setTodo([newItem]);
      idRef.current += 1
    } else {
    setTodo([newItem, ...todo]);
    idRef.current += 1
    }
  };

  // Toggle Update 
  const onUpdate = (targetId) => {
    setTodo(
      todo.map( (it) => {
        if (it.id === targetId) {
          return {
            ...it,
            isDone: !it.isDone,
          };
        } else {
          return it;
        }
    })
    );
  };

  // Delete Todo
  const onDelete = (targetId) => {
      setTodo( todo.filter( (it) => it.id !==targetId ));
  };

    



  return (
    <div className="App">
          <Header />
          <Writer onCreate={onCreate}/>
          <Todolist todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
