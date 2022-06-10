import React, { Component } from "react";
import {
  Block,
  BlockSale,
  BlockText,
  BtnShow,
  BtnShowDiv,
  Button,
  Content,
  HeaderText,
  Icon,
  Img,
  Properties,
  Sort,
  TextFooter,
  TextIcons,
  TextParagh,
} from "./style";
import imgItem from "../../assets/photoItem.png";
import imgItem2 from "../../assets/photoItem2.png";
import personImg from "../../assets/photoPerson.png";
import personImg2 from "../../assets/photoPerson2.png";
import personImg3 from "../../assets/photoPerson3.png";
import Beds from "../../assets/iconsSvg/bed.svg";
import Bath from "../../assets/iconsSvg/bath.svg";
import Car from "../../assets/iconsSvg/car.svg";
import Ruler from "../../assets/iconsSvg/ruler.svg";
import Resize from "../../assets/iconsSvg/resize 1.svg";
import Love from "../../assets/iconsSvg/love 1.svg";

class PropertiesList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const item = [
      {
        id: "1",
        img: imgItem,
        personImg: personImg,
        title: "New Apartment Nice Wiew",
        paragh: "Quincy St, Brooklyn, NY, USA",
        oldPrice: "$2,800/mo",
        price: "$7,500/mo",
      },
      {
        id: "2",
        img: imgItem2,
        personImg: personImg2,
        title: "New Apartment Nice Wiew",
        paragh: "Quincy St, Brooklyn, NY, USA",
        oldPrice: "$2,800/mo",
        price: "$7,500/mo",
      },
      {
        id: "3",
        img: imgItem,
        personImg: personImg3,
        title: "New Apartment Nice Wiew",
        paragh: "Quincy St, Brooklyn, NY, USA",
        oldPrice: "$2,800/mo",
        price: "$7,500/mo",
      },
      {
        id: "4",
        img: imgItem2,
        personImg: personImg,
        title: "New Apartment Nice Wiew",
        paragh: "Quincy St, Brooklyn, NY, USA",
        oldPrice: "$2,800/mo",
        price: "$7,500/mo",
      },
      {
        id: "5",
        img: imgItem,
        personImg: personImg2,
        title: "New Apartment Nice Wiew",
        paragh: "Quincy St, Brooklyn, NY, USA",
        oldPrice: "$2,800/mo",
        price: "$7,500/mo",
      },
      {
        id: "6",
        img: imgItem2,
        personImg: personImg3,
        title: "New Apartment Nice Wiew",
        paragh: "Quincy St, Brooklyn, NY, USA",
        oldPrice: "$2,800/mo",
        price: "$7,500/mo",
      },
      {
        id: "7",
        img: imgItem,
        personImg: personImg,
        title: "New Apartment Nice Wiew",
        paragh: "Quincy St, Brooklyn, NY, USA",
        oldPrice: "$2,800/mo",
        price: "$7,500/mo",
      },
      {
        id: "8",
        img: imgItem2,
        personImg: personImg2,
        title: "New Apartment Nice Wiew",
        paragh: "Quincy St, Brooklyn, NY, USA",
        oldPrice: "$2,800/mo",
        price: "$7,500/mo",
      },
      {
        id: "9",
        img: imgItem,
        personImg: personImg3,
        title: "New Apartment Nice Wiew",
        paragh: "Quincy St, Brooklyn, NY, USA",
        oldPrice: "$2,800/mo",
        price: "$7,500/mo",
      },
      {
        id: "10",
        img: imgItem2,
        personImg: personImg,
        title: "New Apartment Nice Wiew",
        paragh: "Quincy St, Brooklyn, NY, USA",
        oldPrice: "$2,800/mo",
        price: "$7,500/mo",
      },
      {
        id: "11",
        img: imgItem,
        personImg: personImg2,
        title: "New Apartment Nice Wiew",
        paragh: "Quincy St, Brooklyn, NY, USA",
        oldPrice: "$2,800/mo",
        price: "$7,500/mo",
      },
      {
        id: "12",
        img: imgItem2,
        personImg: personImg3,
        title: "New Apartment Nice Wiew",
        paragh: "Quincy St, Brooklyn, NY, USA",
        oldPrice: "$2,800/mo",
        price: "$7,500/mo",
      },
    ];
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
                  <h3>{value.title}</h3>
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
        <BtnShowDiv>
          <BtnShow>Show more</BtnShow>
        </BtnShowDiv>
      </Properties>
    );
  }
}

export default PropertiesList;
