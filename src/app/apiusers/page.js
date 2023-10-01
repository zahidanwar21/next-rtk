"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../redux/slice";

const Page = () => {
  const dispatch = useDispatch();
  const apidata = useSelector((data) => data.usersData.apiUserData);
  //   console.log("apidata", apidata.usersData.apiUserData);

  useEffect(() => {
    dispatch(fetchApiUsers());
  }, []);

  return (
    <div>
      <h1>API User page</h1>
      {/* <button onClick={() => )}>Load Users</button> */}

      {apidata.length &&
        apidata.map((item) => <div key={item.id}>{item.name}</div>)}
    </div>
  );
};

export default Page;
