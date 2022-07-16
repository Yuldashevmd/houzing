import React from "react";
import { createContext, useState } from "react";
import { person } from "../components/login/token";

export const ContextWrap = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState(person);
  const [btnValue, setBtnValue] = useState(false);
  return (
    <ContextWrap.Provider value={[data, setData, btnValue, setBtnValue]}>
      {children}
    </ContextWrap.Provider>
  );
};

export default Context;
