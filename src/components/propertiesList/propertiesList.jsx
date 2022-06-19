import React, { Component } from "react";
import {
  BtnShow,
  BtnShowDiv,
  HeaderText,
  Properties,
  Sort,
} from "./style";

import ContentDiv from "./Content";

class PropertiesList extends Component {
  render() {
    return (
      <Properties>
        <HeaderText>
          <h1>Properties</h1>
          <p>
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
       <ContentDiv/>
        <BtnShowDiv>
          <BtnShow>Show more</BtnShow>
        </BtnShowDiv>
      </Properties>
    );
  }
}

export default PropertiesList;
