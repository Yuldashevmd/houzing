import React from "react";
import { Block, Icon, Wrapper } from "./style";

const CardCategory = ({ info }) => {
  return (
    <Wrapper>
      <Block>
        <Icon src={info?.icon} alt="icon" />
        <h1>{info?.title}</h1>
      </Block>
      <img src={info?.bgImg} alt="bg" />
    </Wrapper>
  );
};

export default CardCategory;
