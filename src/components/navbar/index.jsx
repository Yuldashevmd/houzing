import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Container, Nav, SignedUser, Ul, UlUser } from "./style";
import { useNavigate } from "react-router-dom";
import userSvg from "../../assets/Login.svg";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));
  const signOut = () => {
    localStorage.clear("user");
    navigate("/home");
  };
  return (
    <>
      <Nav>
        <Container>
          <Logo onClick={() => navigate("/")} />
          <Ul>
            <Ul.a to="/home">Home</Ul.a>
            <Ul.a to="/properties">Properties</Ul.a>
            <Ul.a to="/contacts">Contacts</Ul.a>
          </Ul>
          {userData?.token ? (
            <>
              <SignedUser>
                <img
                  onClick={() => setDisplay(!display)}
                  src={userSvg}
                  alt="1"
                />
              </SignedUser>
              <UlUser display={display}>
                <li>My Account</li>
                <li>Basket</li>
                <li>Setting</li>
                <li onClick={signOut}>Sign out</li>
              </UlUser>
            </>
          ) : (
            <button onClick={() => navigate("/login")} className="loginBtn">
              Login
            </button>
          )}

          <button className="hamburBtn">=</button>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;
