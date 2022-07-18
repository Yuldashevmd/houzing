import React from "react";
import { Container } from "./style";
import ButtonComp from "./../GenericComp/Button/index";
import { ReactComponent as SettingIcon } from "../../assets/iconsSvg/setting-lines.svg";
import { ReactComponent as Loupe } from "../../assets/iconsSvg/001-loupe.svg";

const FilterPage = () => {
  return (
    <Container>
      <input
        type="text"
        placeholder="Enter an address, neighborhood, city, or ZIP code"
      />
      <ButtonComp width="141px" type="secondary">
        <SettingIcon style={{ marginRight: "8px" }} /> Advanced
      </ButtonComp>
      <ButtonComp width="180px" type="primary">
        <Loupe style={{ marginRight: "8px" }} /> Search
      </ButtonComp>
    </Container>
  );
};

export default FilterPage;
