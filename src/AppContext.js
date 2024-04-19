import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [contactState, setContactState] = useState(false);
  const toggleState = () => {
    setContactState((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ contactState, toggleState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
