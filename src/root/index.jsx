import React from "react";
import Navbar from "../components/navbar/index";
import NewProperty from "../components/newProperty/newProperty";
import PropertiesList from "../components/propertiesList/propertiesList";
import Footer from "../components/footer/index";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Generic from "../generic";
import Login from "../components/login";
import Register from "../components/login/Register";


const Root = () => {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route  path="/" element={<Generic/>} />
          <Route  path="/home" element={<Generic/>} />
          <Route  path="/properties" element={<PropertiesList/>} />
          <Route  path="/properties:id" element={<Generic/>} />
          <Route  path="/contacts" element={<NewProperty/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/login/register" element={<Register/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Root;
