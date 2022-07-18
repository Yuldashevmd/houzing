import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div `
  width: 100%;
  height: 64px;
  background: #0d263b;
`;
export const Container = styled.div `
  width: 1180px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .hamburBtn {
    display: none;
    /* media */
    @media screen and (max-width: 370px) {
      width: 20px;
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-content: center;
      background: transparent;
      color: #fff;
      border: none;
      outline: none;
      padding: 5px;
    }
  }
  /* media */
  @media only screen and (max-width: 1200px) and (min-width: 740px) {
    width: 80%;
  }
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 544px;
  }
  @media screen and (max-width: 543px) {
    width: 80%;
    justify-content: space-evenly;
  }
`;
export const LinkWrap = styled.div `
  width: 38%;
  display: flex;
`;
export const Ul = styled.div `
  margin: auto;
  display: flex;
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
  .active {
    color: #0061df;
  }
  @media screen and (max-width: 543px) {
    display: none;
  }
`;
Ul.a = styled(NavLink)
`
  color: white;
  opacity: 0.7;
  cursor: pointer;
  :hover {
    opacity: 1;
    transition: all 0.3s ease-out;
  }
`;

export const SignedUser = styled.div `
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    width: 25px;
    transition: all 0.2s linear;
    :hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;
export const UlUser = styled.ul `
  width: 180px;
  display: ${(props) => (props.display ? "flex" : "none")};
  border-radius: 8px;
  box-shadow: 0 0 5px grey;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: lightgrey;
  z-index: 999;
  position: absolute;
  top: 3rem;
  right: 0;
  animation: show 0.4s ease-in-out;
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  li {
    border-bottom: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    cursor: pointer;
    :hover {
      background: lightskyblue;
      color: #fff;
    }
  }
`;