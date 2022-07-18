import styled from "styled-components";
import "../../index.css";

export const Wrapper = styled.div `
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
export const Slider = styled.div `
  width: 100%;
  height: 571px;
  position: relative;
  .bg {
    width: 100%;
    height: 571px;
    object-fit: cover;
    filter: brightness(30%);
  }
`;

export const Card = styled.div `
  width: 492px;
  height: 303px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: var(--white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    margin-bottom: 5px;
  }
  button {
    width: 180px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    background: transparent;
    border: 1px solid var(--white);
    border-radius: 2px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    :hover {
      background: var(--pColor);
    }
    :active {
      transform: scale(0.98);
    }
  }
  .card__icons {
    display: flex;
    color: var(--white);
    .icon {
      margin: 0 10px;
    }
  }
`;
export const Icon = styled.img `
  width: 30px !important;
  height: 20px !important;
  filter: invert(100%);
`;