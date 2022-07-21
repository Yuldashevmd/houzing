import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  max-height: 100vh;
`;
export const Content = styled.div`
  width: 100%;
  height: 571px;
  position: relative;
`;
export const Wrap = styled.div`
  width: 100%;
  height: 571px;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  h1 {
    color: #fff;
  }
`;

export const Arrows = styled.div`
  max-width: 1180px;
  margin: auto;
  position: absolute;
  left: 50%;
  top: 25rem;
  transform: translate(-50%);
  display: flex;
  justify-content: space-between !important;
  z-index: 999;
  .right {
    position: absolute;
    left: 35rem;
  }
  .left {
    position: absolute;
    right: 35rem;
  }
`;
export const ArrowBtn = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(11, 11, 11, 0.4);
  border: none;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  :hover {
    opacity: 0.8;
  }
`;
