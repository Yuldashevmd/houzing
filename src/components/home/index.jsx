import React from "react";
import CarouselPage from "./Carousel";
import Category from "./Category";
import Recommend from "./Recommend";

const Home = () => {
  return (
    <>
      <CarouselPage />
      <Recommend />
      <Category />
    </>
  );
};

export default Home;
