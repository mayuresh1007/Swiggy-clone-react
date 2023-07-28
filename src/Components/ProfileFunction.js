import React, { useEffect } from "react";

import { useState } from "react";

const ProfileFunction = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log("thisi suseeffect from functiona compo");
    // }, 1000);

    // this will called when the component is unmounting it
    // unmounting phase kind of componentwillunmount
    return () => {
      // clearInterval(timer);
      console.log("return of useeffect component will unmount kind of called when component distroy means the change of the component / page")
    };
  }, []);
  return (
    <div>
      <hr />
      <h3>Profile from Function</h3>
      <p>{props.name}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increse</button>
    </div>
  );
};

export default ProfileFunction;
