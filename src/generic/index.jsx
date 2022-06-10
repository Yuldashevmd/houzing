import React from "react";
import { useLocation } from "react-router-dom";
import { Proccess } from "./style";

const Generic = () => {
  const location = useLocation();
  return (
    <Proccess>
      <h1>{location.pathname}</h1>
      <h1> page</h1>
      <h1> on</h1>
      <h1> proccess...</h1>
    </Proccess>
  );
};

export default Generic;
