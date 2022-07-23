import React from "react";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import CardCategory from "./CardCategory";
import { data } from "./mock-data";
import { Container } from "./style";

const Category = () => {
  const [dataItem] = useState(data);

  return (
    <Container>
      <h1 className="title">Category</h1>
      <p className="describ">
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <AliceCarousel
        className="alice-carousel__prev-btn alice-carousel__next-btn"
        items={dataItem}
        responsive={{ 0: { items: 1 }, 1024: { items: 4 } }}
      >
        {dataItem.map((item) => (
          <div key={item?.id}>
            <CardCategory info={item} />
          </div>
        ))}
      </AliceCarousel>
    </Container>
  );
};

export default Category;
