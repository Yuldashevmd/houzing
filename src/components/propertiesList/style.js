import styled, { css } from "styled-components";

// vars
const flex = css `
  display: flex;
  justify-content: center;
  align-items: center;
`;
const color = css `
  color: #0d263b;
`;
// ========================================
export const Properties = styled.div `
  width: 1180px;
  margin: auto;

  /* Media */
  @media only screen and (max-width: 1200px) and (min-width: 950px) {
    width: 80%;
  }
  @media only screen and (max-width: 949px) and (min-width: 740px) {
    width: 80%;
  }
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 80%;
  }
  @media screen and (max-width: 543px) {
    width: 90%;
  }
  h1 {
    font-size: 28px;
    margin-bottom: 10px;
    font-weight: 600;
    ${color};
  }
  p {
    color: #696969;
    font-size: 16px;
  }
`;
export const HeaderText = styled.div `
  margin: 5rem 0;
  text-align: center;
`;
export const Sort = styled.div `
  display: flex;
  justify-content: space-between;
  select {
    border: none;
    outline: none;
    font-size: 16px;
    color: #696969;
  }
  .sortSelect {
    border-bottom: 1px solid #e6e9ec;
    padding-bottom: 10px;
  }
`;
export const Content = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  /* Media */
  @media only screen and (max-width: 1200px) and (min-width: 950px) {
    width: 100%;
    margin: auto;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 949px) and (min-width: 740px) {
    width: 50%;
    margin: auto;
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 543px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Block = styled.div `
  width: 380px;
  height: 429px;
  margin-bottom: 24px;
  border: 1px solid #e6e9ec;
  box-shadow: 0 0 5px grey;
  border-radius: 3px;
  position: relative !important;

  /* Media */
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 100%;
  }
  @media screen and (max-width: 543px) {
    width: 100%;
  }
`;
export const Img = styled.div `
  width: 381px;
  height: 220px;

  /* Media */
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 100%;
  }
  @media screen and (max-width: 543px) {
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 3px 3px 0 0;
  }
`;
export const BlockSale = styled.div `
  width: 320px;
  height: 222px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 18px;
  left: 8%;

  /* Media */
  @media only screen and (max-width: 739px) and (min-width: 544px) {
    width: 85%;
  }
  @media screen and (max-width: 543px) {
    width: 85%;
  }
  .sale__img {
    width: 40px;
    height: 40px;
    margin-left: auto;
    border: 3px solid #fff;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .sale__btn {
    display: flex;
    justify-content: space-between;
  }
`;
export const Button = styled.div `
  width: 73px;
  height: 23px;
  ${flex}
  border-radius: 3px;
  background: ${(props) => (props.color === "blue" ? "#0061DF" : "#0D263B")};
  color: #fff;
  border: none;
  font-size: 10px;
  cursor: pointer;
`;
export const BlockText = styled.div `
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;

  /* Media */
  @media screen and (max-width: 543px) {
    width: 100% !important;
  }
`;
export const TextParagh = styled.div `
  width: 90%;
  margin: auto;
  h3 {
    ${color}
    font-size: 16px;
  }
  p {
    color: #696969;
    font-size: 14px;
  }
`;
export const TextIcons = styled.div `
  width: 90%;
  margin: 4% auto;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
export const TextFooter = styled.div `
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footer__i {
    width: 20%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
`;
export const Icon = styled.div `
  ${flex};
  flex-direction: column;
  span {
    color: #696969;
  }
  img {
    width: 19px;
  }
`;
export const BtnShowDiv = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const BtnShow = styled.button `
  width: 250px;
  height: 44px;
  margin: 5% auto 10% auto;
  border-radius: 2px;
  background: #0061df;
  color: #fff;
  border: none;
  outline: none;
  transition: all 0.2s linear;
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;