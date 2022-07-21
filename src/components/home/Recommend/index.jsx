import React from "react";
import { useState } from "react";
import CardDiv from "../../genericComp/Card";
import { data } from "../../genericComp/Card/mock-item";
import AliceCarousel from "react-alice-carousel";
import { Container } from "./style";

const Recommend = () => {
  const [dataItem] = useState(data);

  return (
    <Container>
      <h1 className="title">Recommended</h1>
      <p className="describ">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <AliceCarousel
        className="alice-carousel__prev-btn alice-carousel__next-btn"
        responsive={true}
      >
        {dataItem?.map((item) => (
          <CardDiv
            key={item?.id}
            className="cardDiv"
            id={item?.id}
            img={item?.img}
            personImg={item?.personImg}
            title={item?.title}
            paragh={item?.paragh}
            oldPrice={item?.oldPrice}
            price={item?.price}
          />
        ))}
      </AliceCarousel>
    </Container>
  );
};

export default Recommend;
