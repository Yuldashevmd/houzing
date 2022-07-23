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
import { useQuery } from "react-query";

const PropertiesList = () => {
  const [dataItem, setDataItem] = useState();
  useQuery(
    "",
    () => {
      return fetch("https://houzing-app.herokuapp.com/api/v1/houses/list").then(
        (res) => res.json()
      );
    },
    {
      onSuccess: (res) => setDataItem(res?.data),
      onError: (err) => console.log(err),
    }
  );
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
          <CardDiv info={item} />
        ))}
      </CardWrap>
      <BtnShowDiv>
        <BtnShow>Show more</BtnShow>
      </BtnShowDiv>
    </Properties>
  );
};

export default PropertiesList;
