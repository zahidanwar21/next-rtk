"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../redux/todoSlice";

function Page() {
  const [todos, setTodos] = useState("");
  const todoData = useSelector((data) => data.todosData.todos);
  //   console.log("todoData", todoData)
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <h1>Add Todo</h1>
      <input
        type="text"
        placeholder="Add Todo here"
        className="w-full mt-3 border-2 border-gray-500 px-2 py-1 rounded-xl"
        onChange={(e) => setTodos(e.target.value)}
      />
      <button
        onClick={() => dispatch(addTodos(todos))}
        className="mt-2 px-2 py-2 bg-red-400 text-slate-200 w-full rounded-lg"
      >
        Add Todo
      </button>

      <br />

      <h3>Add Todo here</h3>

      <br />

      {todoData.length &&
        todoData.map((item) => <div key={item.id}>{item.name}</div>)}
    </div>
  );
}

export default Page;
