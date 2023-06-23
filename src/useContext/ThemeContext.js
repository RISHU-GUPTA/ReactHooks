import React, { useContext, useState } from 'react';

const ThemeContext=React.createContext();
const ThemeUpdateContext=React.createContext();

export function useTheme(){
    return useContext(ThemeContext);
}

export function useThemeUpdate(){
    return useContext(ThemeUpdateContext)
}

export default function ThemeProvider({children}) {
    const [darkTheme,setDarkTheme]=useState(true);

    function toogleTheme(){
        setDarkTheme(e=>!e);
    }
  return (
    <ThemeContext.Provider>
        <ThemeUpdateContext.Provider>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
    
  )
}
//now this is way easire and cleaner code for parent component where theme provider is used, so this all can be done in separate compoent like this
//and will be used in child component with help of custom hooks, useTheme and useThemeUpdate 

//In Parent component, use Themeprovide which is this file
{/* <ThemeProvider>
    <ChildCopinent/>
</ThemeProvider> */}


//Now in children we can use these directly

// const darkTheme=useTheme();
// const toogletheme=useThemeUpdate();
