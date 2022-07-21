import React from "react";
import {
  Block,
  BlockSale,
  BlockText,
  Button,
  Icon,
  Img,
  TextFooter,
  TextIcons,
  TextParagh,
} from "./style";
import Beds from "../../../assets/iconsSvg/bed.svg";
import Bath from "../../../assets/iconsSvg/bath.svg";
import Car from "../../../assets/iconsSvg/car.svg";
import Ruler from "../../../assets/iconsSvg/ruler.svg";
import Resize from "../../../assets/iconsSvg/resize 1.svg";
import Love from "../../../assets/iconsSvg/love 1.svg";
import { useNavigate } from "react-router-dom";

const CardDiv = ({
  id,
  img,
  personImg,
  title,
  paragh,
  oldPrice,
  price,
  beds,
  bath,
  car,
  ruler,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <Block>
        <Img>
          <img src={img} alt="img" />
        </Img>
        <BlockSale>
          <div className="sale__btn">
            <Button color="blue">FEATURED</Button>
            <Button color="grey">FOR SALE</Button>
          </div>
          <div className="sale__img">
            <img src={personImg} alt="img" />
          </div>
        </BlockSale>
        <BlockText>
          <TextParagh>
            <h3 onClick={() => navigate(`/properties:${id}`)}>
              {title || "Title"}
            </h3>
            <p>{paragh || "Paragh"}</p>
          </TextParagh>
          <TextIcons>
            <Icon>
              <img src={Beds} alt="beds" />
              <span>{beds || 0}Beds</span>
            </Icon>
            <Icon>
              <img src={Bath} alt="bath" />
              <span>{bath || 0}Baths</span>
            </Icon>
            <Icon>
              <img src={Car} alt="car" />
              <span>{car || 0}Garage</span>
            </Icon>
            <Icon>
              <img src={Ruler} alt="ruler" />
              <span>{ruler || 0} Sq Ft</span>
            </Icon>
          </TextIcons>
          <hr style={{ opacity: "0.4", background: "grey" }} />
          <TextFooter>
            <div className="footer__price">
              <p style={{ textDecoration: "line-through" }}>
                {oldPrice || "$0.00"}
              </p>
              <span style={{ color: "#0D263B", fontWeight: "bold" }}>
                {price || "$0.00"}
              </span>
            </div>
            <div className="footer__i">
              <img src={Resize} alt="resize" />
              <img src={Love} alt="love" />
            </div>
          </TextFooter>
        </BlockText>
      </Block>
    </div>
  );
};

export default CardDiv;