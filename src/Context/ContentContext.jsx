import React, { createContext, useContext, useState } from "react";

// export const ContentContext = createContext();
const ContentContext = createContext();
const ContentProvider = ({ children }) => {
  const [pick, setPick] = useState(null);

  const value = {
    pick,
    setPick,
  };
  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};

export default ContentProvider;
