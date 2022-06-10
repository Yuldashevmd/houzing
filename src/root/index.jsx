import React from "react";
import Navbar from "../components/navbar/index";
import NewProperty from "../components/newProperty/newProperty";
import PropertiesList from "../components/propertiesList/propertiesList";
import Footer from "../components/footer/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Generic from "../generic";
import Login from "../components/login";
// import { Pages } from "../utils";

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* {
            Pages.map((value)=>{
              <Route  exact path={value.path} key={value.id} component={value.component}/>
            })
          } */}
          <Route exact path="/" component={Generic} />
          <Route exact path="/home" component={Generic} />
          <Route exact path="/properties" component={PropertiesList} />
          <Route exact path="/contacts" component={NewProperty} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Root;
