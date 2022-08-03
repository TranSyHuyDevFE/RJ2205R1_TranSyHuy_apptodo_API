import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import TodoList from "../components/TodoList";

import axios from "axios";
const AddToDo = () => {
  const [todo, setTodo] = useState(null);
  const [item, setItem] = useState({});
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      setTodo(result.data);
    });
  }, []); // only fires one time when the component loads
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };
  const onSubmitToDo = (e) => {
    e.preventDefault();
    setItem("");
    axios
      .post("https://jsonplaceholder.typicode.com/todos", item)
      .then((result) => {
        if (result.status === 201) {
          alert(result.status + "---success!");
          setTodo([item, ...todo]);
          setItem("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          name="title"
          onChange={handleChangeInput}
          placeholder="Add to do"
        />
        <span className="input-group-text">
          <button className="btn btn-success" onClick={onSubmitToDo}>
            Add New
          </button>
        </span>
      </div>
      {todo ? <TodoList todo={todo} /> : <Loading />}
    </div>
  );
};

export default AddToDo;
