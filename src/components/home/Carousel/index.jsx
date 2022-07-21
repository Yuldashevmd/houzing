import React, { useRef } from "react";
import { ArrowBtn, Arrows, Container, Content, Wrap } from "./style";
import { Carousel } from "antd";
import { home } from "../../../utils/home";

const CarouselPage = () => {
  const slider = useRef();

  return (
    <Container>
      <Carousel ref={slider}>
        {home?.map((item) => (
          <Content key={item?.id}>
            <Wrap style={{ background: `url(${item?.bgImg})` }}>
              <h1>{item?.title}</h1>
            </Wrap>
          </Content>
        ))}
      </Carousel>
      <Arrows>
        <ArrowBtn className="left" onClick={() => slider?.current?.prev()}>
          {"<"}
        </ArrowBtn>
        <ArrowBtn className="right" onClick={() => slider?.current?.next()}>
          {">"}
        </ArrowBtn>
      </Arrows>
    </Container>
  );
};

export default CarouselPage;
