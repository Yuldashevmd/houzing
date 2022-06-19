import React from 'react';
import { data } from './mock-item';
import { Block, BlockSale, BlockText, Button, Content, Icon, Img, TextFooter, TextIcons, TextParagh } from '../style';
import Beds from "../../../assets/iconsSvg/bed.svg";
import Bath from "../../../assets/iconsSvg/bath.svg";
import Car from "../../../assets/iconsSvg/car.svg";
import Ruler from "../../../assets/iconsSvg/ruler.svg";
import Resize from "../../../assets/iconsSvg/resize 1.svg";
import Love from "../../../assets/iconsSvg/love 1.svg";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ContentDiv = () => {
  const [item]=useState(data);
  const navigate =useNavigate();

  return (
    <Content>
    {item.map((value) => (
      <Block key={value.id}>
        <Img>
          <img src={value.img} alt="img" />
        </Img>
        <BlockSale>
          <div className="sale__btn">
            <Button color="blue">FEATURED</Button>
            <Button color="grey">FOR SALE</Button>
          </div>
          <div className="sale__img">
            <img src={value.personImg} alt="" />
          </div>
        </BlockSale>
        <BlockText>
          <TextParagh>
            <h3 onClick={()=>navigate(`/properties:${value.id}`)}>{value.title}</h3>
            <p>{value.paragh}</p>
          </TextParagh>
          <TextIcons>
            <Icon>
              <img src={Beds} alt="beds" />
              <span>4 Beds</span>
            </Icon>
            <Icon>
              <img src={Bath} alt="bath" />
              <span>5 Baths</span>
            </Icon>
            <Icon>
              <img src={Car} alt="car" />
              <span>1 Garage</span>
            </Icon>
            <Icon>
              <img src={Ruler} alt="ruler" />
              <span>1200 Sq Ft</span>
            </Icon>
          </TextIcons>
          <hr style={{ opacity: "0.4", background: "grey" }} />
          <TextFooter>
            <div className="footer__price">
              <p style={{ textDecoration: "line-through" }}>
                {value.oldPrice}
              </p>
              <span style={{ color: "#0D263B", fontWeight: "bold" }}>
                {value.price}
              </span>
            </div>
            <div className="footer__i">
              <img src={Resize} alt="resize" />
              <img src={Love} alt="love" />
            </div>
          </TextFooter>
        </BlockText>
      </Block>
    ))}
  </Content>
  );
};

export default ContentDiv;