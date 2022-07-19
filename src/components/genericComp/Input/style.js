import styled from "styled-components";
import "../../../index.css";

export const Input = styled.input `
  width: ${({ width }) => (width ? width : "100%")} !important;
  height: ${({ height }) => (height ? height : "44px")};
  margin-top: ${({ mt }) => (mt ? mt : "0")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0")};
  margin-left: ${({ ml }) => (ml ? ml : "0")};
  margin-right: ${({ mr }) => (mr ? mr : "0")};
  outline: none;
  padding: 0 8px;
  border: 1px solid #e6e6e6;
  :focus {
    box-shadow: 0 0 2px var(--btnColor);
  }
`;