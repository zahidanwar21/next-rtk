"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

function Page() {
  const userData = useSelector((data) => data.usersData.users);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="font-medium text-lg">Display User</h1>

      {userData.map((item) => (
        <div
          className="px-2 py-2 font-light text-lg flex flex-nowrap"
          key={item.id}
        >
          <span className="bg-red-400 w-80">{item.name}</span>

          <button onClick={() => dispatch(removeUser(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Page;
