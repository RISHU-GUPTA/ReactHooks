import React, { useState } from "react";

export default function UseState() {
  /**************UseSTATE******it returns an array with 2 values , first is state and second is function************/
  const arr = useState(0);
  //const [count,setcount]=useState(0);
  function increaseCount() {
    arr[1]((e) => e + 1); //always use previous
  }
  //useState can take function which run only first time, and return initial value
  const [newItem, setNew] = useState(() => {
    return 1;
  });

  const [theme, setTheme] = useState({ name: "Rishu", age: 23 });
  //if ever to modify object or array, use spread to modify as we need other values as well
  function increaseAge() {
    setTheme((prev) => {
      return { ...prev, age: prev.age++ };
    });
  }

  return (
    <>
    <h2>UseState Hook</h2>
      <div style={{ padding: "10px", margin: "10px" }}>
        <button onClick={increaseCount}> +</button>
        <span>{arr[0]}</span>
        <button>-</button>
      </div>

      <div>
        <button onClick={increaseAge}>increase age</button>
        <div>{newItem}</div>
        <div>
          {theme.name}
          {theme.age}
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}
