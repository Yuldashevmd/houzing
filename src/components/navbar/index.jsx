import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Container, Nav, Ul } from "./style";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Nav>
          <Container>
            <NavLink to="/">
              <Logo />
            </NavLink>
            <Ul>
              <Ul.a  to="/home">
                Home
              </Ul.a>
              <Ul.a  to="/properties">
                Properties
              </Ul.a>
              <Ul.a  to="/contacts">
                Contacts
              </Ul.a>
            </Ul>
            <NavLink to="/login">
              <button className="loginBtn">Login</button>
            </NavLink>
            <button className="hamburBtn">=</button>
          </Container>
        </Nav>
        
      </>
    );
  }
}

export default Navbar;
