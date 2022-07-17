import React from "react";
import Navbar from "../components/navbar/index";
import { Footer } from "../components/footer/index";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { navbar } from "../utils/Navbar";
import ErrorPage from "../page/Error";
import Register from "../components/login/register";
import Login from "../components/login";
import ProductView from "../components/propertiesList/Content/ProductView";
import NewProperty from "../components/newProperty/newProperty";
import Favourite from "../components/favourite/index";
import { user } from "../utils/user";

const Root = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route element={<Navbar />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/register" element={<Register />} />
            <Route path="/properties:id" element={<ProductView />} />
            <Route path="/addpost" element={<NewProperty />} />
            <Route path="/favourite" element={<Favourite />} />
            {navbar?.map((item) => (
              <Route key={item.id} path={item?.path} element={item?.element} />
            ))}
            {user?.map((item) => (
              <Route key={item.id} path={item?.path} element={item?.element} />
            ))}
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default Root;
