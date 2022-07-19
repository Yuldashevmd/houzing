import React from "react";
import { BtnBlock, Container, Fragment, Title, Wrapper } from "./style";
import ButtonComp from "./../genericComp/Button/index";
import { ReactComponent as SettingIcon } from "../../assets/iconsSvg/setting-lines.svg";
import { ReactComponent as Loupe } from "../../assets/iconsSvg/001-loupe.svg";
import { ReactComponent as House } from "../../assets/iconsSvg/home.svg";
import { Popover } from "antd";
import InputDiv from "../genericComp/Input";
const FilterPage = () => {
  const content = (
    <Wrapper>
      <Title>Address</Title>
      <Fragment>
        <InputDiv type="text" width="200px" placeholder="Country" />
        <InputDiv type="text" width="200px" placeholder="Region" />
        <InputDiv type="text" width="200px" placeholder="City" />
        <InputDiv type="number" width="200px" placeholder="Zip code" />
      </Fragment>
      <Title>Apartment info</Title>
      <Fragment>
        <InputDiv type="text" width="200px" placeholder="Rooms" />
        <InputDiv type="text" width="200px" placeholder="Size" />
        <InputDiv type="text" width="200px" placeholder="Sort" />
      </Fragment>
      <Title>Price</Title>
      <Fragment>
        <InputDiv type="number" width="200px" placeholder="Min price" />
        <InputDiv type="number" width="200px" placeholder="Max price" />
      </Fragment>
      <BtnBlock>
        <ButtonComp type="filter" width="131px">
          Cancel
        </ButtonComp>
        <ButtonComp type="primary" width="131px">
          Submit
        </ButtonComp>
      </BtnBlock>
    </Wrapper>
  );
  return (
    <Container>
      <InputDiv
        width="80%"
        type="text"
        placeholder="Enter an address, neighborhood, city, or ZIP code"
      >
        <House />
      </InputDiv>
      <Popover trigger="click" placement="bottomLeft" content={content}>
        <div>
          <ButtonComp width="141px" type="secondary">
            <SettingIcon style={{ marginRight: "8px" }} /> Advanced
          </ButtonComp>
        </div>
      </Popover>
      <ButtonComp width="180px" type="primary">
        <Loupe style={{ marginRight: "8px" }} /> Search
      </ButtonComp>
    </Container>
  );
};

export default FilterPage;
