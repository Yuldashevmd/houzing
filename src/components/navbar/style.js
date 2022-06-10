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
  align-items: center;
  .loginBtn {
    width: 120px;
    height: 44px;
    padding: 12px 40px;
    border: 1px solid #ffffff;
    color: #fff;
    border-radius: 2px;
    background: transparent;
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.3s linear;
    @media screen and (max-width: 370px) {
      display: none;
    }
    :hover {
      opacity: 1;
    }
    :active {
      transform: scale(0.95);
    }
  }
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
export const Ul = styled.div `
  width: 38%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  color: #fff;
  font-size: 14px;
  letter-spacing: 2px;
  @media screen and (max-width: 543px) {
    display: none;
  }
`;
Ul.a = styled(NavLink)
`
color:white;
  opacity: 0.7;
  cursor: pointer;
  :hover {
    opacity: 1;
    transition: all 0.3s ease-out;
  }
`;