import React, { useState } from "react";
import ClassContextComponent from "./ClassContextComponent";
import FunctionThemeContext from "./FunctionThemeContext";
export const ThemeContext = React.createContext();

export default function UseContext() {
  const [darkTheme, setTheme] = useState(true);
  function toogleTheme() {
    setTheme((e) => !e);
  }
  return (
    //context is used to passing props to its children
    //So context makes sure that every coponent inside the themecontextProvider has access to single property value to all components
    //inside it and also it children components automatically without any explicit passing of props
    <>
    <h2>Use Context</h2>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toogleTheme}>Toogle Theme</button>
        <ClassContextComponent />
        <FunctionThemeContext />
      </ThemeContext.Provider>
      <div className="line"></div>
    </>
  );
}
