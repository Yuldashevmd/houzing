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
import Register from "../components/login/Register";
import Login from "../components/login";
import ProductViewPage from "../components/propertiesList/ProductView";
import NewProperty from "../components/newProperty/newProperty";
import FavouritePage from "../components/Favourite";
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
            <Route path="/properties:id" element={<ProductViewPage />} />
            <Route path="/addpost" element={<NewProperty />} />
            <Route path="/favourite" element={<FavouritePage />} />
            {navbar?.map((item) => (
              <Route key={item?.id} path={item?.path} element={item?.element} />
            ))}
            {user?.map((item) => (
              <Route key={item?.id} path={item?.path} element={item?.element} />
            ))}
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default Root;
