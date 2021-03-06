import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.svg";
import { Container, LinkWrap, Nav, SignedUser, Ul, UlUser } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import userSvg from "../../assets/Login.svg";
import { ContextWrap } from "../../Context";
import { navbar } from "../../utils/Navbar";
import { user } from "../../utils/user";
import ButtonComp from "./../genericComp/Button/index";

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));
  const [btnValue] = useContext(ContextWrap);

  return (
    <>
      <Nav>
        <Container>
          <img
            style={{ cursor: "pointer" }}
            src={Logo}
            onClick={() => navigate("/")}
            alt="img"
          />
          <LinkWrap>
            {navbar?.map((item) => (
              <Ul key={item.id}>
                <Ul.a to={item.path}>{item.title}</Ul.a>
              </Ul>
            ))}
          </LinkWrap>
          {!btnValue && userData?.token ? (
            <>
              <SignedUser>
                <img
                  onClick={() => setDisplay(!display)}
                  src={userSvg}
                  alt="1"
                />
              </SignedUser>
              <UlUser display={display}>
                {user.map((item) => (
                  <div key={item.id}>
                    <li onClick={() => navigate(item.path)}>{item?.title}</li>
                  </div>
                ))}
              </UlUser>
            </>
          ) : (
            <ButtonComp
              width={"131px"}
              onClick={() => navigate("/login")}
              className="loginBtn"
            >
              Login
            </ButtonComp>
          )}
          <button className="hamburBtn">=</button>
        </Container>
      </Nav>

      <Outlet />
    </>
  );
};

export default Navbar;
