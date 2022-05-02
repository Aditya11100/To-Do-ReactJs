import React from "react";
import "./TodoList.css";

interface Props {
  todo: string[] | [];
  setTodo: React.Dispatch<React.SetStateAction<string[] | []>>;
  editText: string;
  setEditText: React.Dispatch<React.SetStateAction<string>>;
}

const TodoList: React.FC<Props> = ({
  todo,
  setTodo,
  editText,
  setEditText,
}) => {
  const editItem = (item: string, i: number) => {
    // setTodo(todo.filter((item, index) => index !== i));
    setEditText(item);
  };

  const deleteItem = (i: number) => {
    setTodo(todo.filter((item, index) => index !== i));
  };

  return (
    <div className="list">
      {todo?.map((item, index) => (
        <div key={index} className="map">
          <div style={{ fontSize: "20px" }}>{item}</div>
          <div className="buttons">
            <button
              style={{ marginLeft: "5px" }}
              onClick={() => editItem(item, index)}
            >
              Edit
            </button>
            <button
              style={{ marginLeft: "5px" }}
              onClick={() => deleteItem(index)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
