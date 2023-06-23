import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  //UseCallback is same only diff it returns function (arrow function here) instead of value and can be directly used as function
  //1. now the slow function is runned only when number changes and if same it picked memoised value and return
  const doubleNumber = useMemo(() => {
    return slowfunction(number);
  }, [number]);
  //2.now everytime render themestyle get new reference variable so any useEffect
  //useing themestyle will always run due to diiference variable as reference so to 
  //stop this we can use memoisation

  const themestyle = useMemo(()=>{
    return {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  }},[dark]
  )

  return (
    <>
      <h2>UseMemo Hook | UseCallback Hook</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setDark((e) => !e)}> Change Theme</button>
      <div style={themestyle}>{doubleNumber}</div>
      <div className="line"></div>
    </>
  );
}

function slowfunction(num) {
  for (let i = -0; i <= 99999999; i++) {}
  return num * 2;
}
//now this runs on each rerender and takes a lot of time causing performace issue
//so this long running code can be memoised
