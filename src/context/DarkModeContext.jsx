// let us import create contex

import React,  {createContext, useEffect, useState} from 'react';

export const DarkModeContext=createContext();

export const DarkModeContextProvider=({children})=>{

    // here if the user is visiting the site for the first time , means nothing is in the local storage and he will have a false darkMode
const [darkMode, setDarkMode]=useState( JSON.parse(localStorage.getItem("darkMode")) || false);

// let us toggle this

const toggle=()=>{
setDarkMode(!darkMode);
}


// now let us set our localStorage using useEffect

useEffect(()=>{
    localStorage.setItem("darkMode", darkMode)
},[darkMode])

return(
    <DarkModeContext.Provider value={{darkMode, toggle}}>{children}</DarkModeContext.Provider>
)

}
