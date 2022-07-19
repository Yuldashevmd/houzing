import styled from "styled-components";

export const Container = styled.div `
  width: 1180px;
  margin: 10px auto;
  display: flex;
  gap: 20px;
  input {
    width: 80%;
    border: 1px solid #e6e6e6;
    padding: 5px 10px;
    outline: none;
  }
`;
export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
`;
export const Fragment = styled.div `
  display: flex;
  margin-bottom: 20px;
  gap: 20px;
`;
export const BtnBlock = styled.div `
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  border-top: 1px solid #e6e6e6;
  padding: 20px 0;
`;
export const Title = styled.div `
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
  margin-bottom: 10px;
`;