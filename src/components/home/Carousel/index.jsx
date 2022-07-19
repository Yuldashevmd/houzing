import React from "react";
import { Container } from "./style";
import { Carousel } from "antd";
import { home } from "../../../utils/home";

const CarouselPage = () => {
  const contentStyle = {
    width: "100%",
    height: "571px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    objectFit: "cover",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Container>
      <Carousel autoplay={true} afterChange={onChange}>
        {home?.map((item) => (
          <div>
            <img src={item?.bgImg} alt="img" style={contentStyle} />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default CarouselPage;
