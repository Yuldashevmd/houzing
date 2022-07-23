import styled from "styled-components";

export const Wrapper = styled.div `
  width: 280px;
  height: 350px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  border: 1px solid grey;
  text-align: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  :hover img {
    transform: scale(1.2) rotate(5deg);
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }
`;
export const Icon = styled.img `
  width: 60px !important;
  height: 60px;
`;
export const Block = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
  }
`;