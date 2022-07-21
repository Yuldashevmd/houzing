import React, { useState } from "react";
import {
  BtnShow,
  BtnShowDiv,
  CardWrap,
  HeaderText,
  Properties,
  Sort,
} from "./style";
import CardDiv from "../genericComp/Card";
import { data } from "../genericComp/Card/mock-item";

const PropertiesList = () => {
  const [dataItem] = useState(data);
  return (
    <Properties>
      <HeaderText>
        <h1 className="title">Properties</h1>
        <p className="describ">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </HeaderText>
      <Sort>
        <p>13,474 results</p>
        <div className="sortSelect">
          <span>Sort by:</span>
          <select name="sortBy">
            <option>Newest Listings</option>
          </select>
        </div>
      </Sort>
      <CardWrap>
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
      </CardWrap>
      <BtnShowDiv>
        <BtnShow>Show more</BtnShow>
      </BtnShowDiv>
    </Properties>
  );
};

export default PropertiesList;
