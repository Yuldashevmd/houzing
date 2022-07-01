import React from 'react';
import { createContext, useState } from 'react';
import {person} from '../login/token';

export const ContextWrap =createContext();

const Context = ({children}) => {
  const [data,setData]=useState(person);
  return (
    <ContextWrap.Provider value={[data,setData]}>
      {children}
    </ContextWrap.Provider>
  );
};

export default Context;