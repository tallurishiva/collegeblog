/*import React from "react";
export const Gc = React.createContext();
export const useGc = () => React.useContext(Gc);
export default function AppContext({ children }) {
  const [eid, seteid] = React.useState("srk");
  const contextValue = {
    eid,
    seteid
  };
  return <Gc.Provider value={contextValue}>{children}</Gc.Provider>;
}*/
import React, { createContext, useState } from 'react';

// Create a new context
export const AppContext = createContext();

// Create a provider component to wrap the entire application
export const AppProvider = ({ children }) => {
  // Your global state variable goes here (example: userLoggedIn)
  const [userLoggedIn, setUserLoggedIn] = useState("srk");

  // Define any functions or state updates that will be accessible globally
  // For example, a function to toggle the userLoggedIn state:
  const toggleUserLoggedIn = () => {
    setUserLoggedIn((prevValue) => !prevValue);
  };

  // Define the context value that will be accessible by all children components
  const contextValue = {
    userLoggedIn,
    setUserLoggedIn,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

