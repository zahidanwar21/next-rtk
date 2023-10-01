"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";
import Link from "next/link";

function AddUser() {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const userDispach = () => {
    // console.log(name);
    dispatch(addUser(name));
  };

  return (
    <div className="flex flex-col my-10 w-96 border-2 border-blue-300 h-80 p-4">
      <h1 className="items-center text-center font-bold text-4xl">Add User</h1>
      <div className="flex flex-col  mt-2 p-2 my-3">
        <input
          type="text"
          placeholder="Add User"
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-3 border-2 border-gray-500 px-2 py-1 rounded-xl"
        />
        <button
          onClick={userDispach}
          className="mt-2 px-2 py-2 bg-red-400 text-slate-200 w-full rounded-lg"
        >
          Add User
        </button>

        <Link href="/removeuser">Remove User Page</Link>
        <Link href="/todolist">Add Todos Page</Link>
        <br />
        <Link href="/apiusers">Add apiUsers Page</Link>
      </div>
    </div>
  );
}

export default AddUser;
