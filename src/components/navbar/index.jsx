import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Container, Nav, Ul } from "./style";
import Advanced from "./Advanced/index";
import { Link } from "react-router-dom";
// import { Pages } from "../../utils";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Nav>
          <Container>
            <Link to="/">
              <Logo />
            </Link>
            <Ul>
              {/* {
                Pages.map(value=>{
                  <Ul.a key={value.id} to={value.path}>{value.title}</Ul.a>
                })
              } */}
              <Ul.a activeStyle={{ color: "#f9e33b" }} to="/home">
                Home
              </Ul.a>
              <Ul.a activeStyle={{ color: "#f9e33b" }} to="/properties">
                Properties
              </Ul.a>
              <Ul.a activeStyle={{ color: "#f9e33b" }} to="/contacts">
                Contacts
              </Ul.a>
            </Ul>
            <Link to="/login">
              <button className="loginBtn">Login</button>
            </Link>
            <button className="hamburBtn">=</button>
          </Container>
        </Nav>
        <Advanced />
      </>
    );
  }
}

export default Navbar;
