import styled from "styled-components";
import "../../../index.css";

const getType = (type) => {
    switch (type) {
        case "secondary":
            return { border: "1px  solid #e6e9ec", color: "#0D263B" };

        case "primary":
            return {
                background: "#0061df",
                border: "none",
                color: "#fff",
            };

        default:
            return { color: "#fff", border: "1px solid #e6e9ec" };
            break;
    }
};

export const Button = styled.div `
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "44px")};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
  margin-bottom: ${({ mb }) => mb};
  margin-top: ${({ mt }) => mt};
  ${({ type }) => getType(type)};
  :active {
    transform: scale(0.98);
  }
`;