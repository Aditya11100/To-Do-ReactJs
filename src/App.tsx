import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string[] | []>([]);
  const [editText, setEditText] = useState<string>("");

  useEffect(() => {
    const list: any = localStorage.getItem("todo" || []);
    if (list?.length > 0) {
      setTodo(JSON.parse(list));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="App">
      <Header
        todo={todo}
        setTodo={setTodo}
        editText={editText}
        setEditText={setEditText}
      />
      <TodoList
        todo={todo}
        setTodo={setTodo}
        editText={editText}
        setEditText={setEditText}
      />
    </div>
  );
}

export default App;
