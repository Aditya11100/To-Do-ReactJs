import React, { useEffect, useState } from "react";
import "./Header.css";

interface Props {
  todo: string[];
  setTodo: React.Dispatch<React.SetStateAction<string[] | []>>;
  editText: string;
  setEditText: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<Props> = ({ todo, setTodo, editText, setEditText }) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    setText(editText);
  }, [editText]);

  const handleclick = () => {
    if (editText) {
      setTodo(
        todo?.map((item) => {
          if (item === editText) {
            return text;
          }
          return item;
        })
      );
    } else {
      setTodo([...todo, text]);
    }
    setText("");
    setEditText("");
  };

  return (
    <div className="input">
      <input
        className="inputtag"
        type={"text"}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleclick}>Add</button>
    </div>
  );
};

export default Header;
