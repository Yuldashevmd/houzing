import React from "react";
import { home } from "../../utils/home";
import { Card, Icon, Slider, Wrapper } from "./style";
import Beds from "../../assets/iconsSvg/bed.svg";
import Bath from "../../assets/iconsSvg/bath.svg";
import Garage from "../../assets/iconsSvg/car.svg";
import Sqrt from "../../assets/iconsSvg/ruler.svg";
import FilterPage from "../Filter";

const Home = () => {
  return (
    <>
      <FilterPage />
      <Wrapper>
        <Slider>
          {home?.map((item) => (
            <div key={item?.id}>
              <div>
                <img className="bg" src={item.bgImg} alt="img" />
              </div>
              <Card>
                <div>
                  <h1>{item?.title}</h1>
                  <p>{item?.p}</p>
                </div>
                <div className="card__icons">
                  <div className="icon">
                    <Icon src={Beds} alt="img" />
                    <p>{item?.bed}</p>
                  </div>
                  <div className="icon">
                    <Icon src={Bath} alt="img" />
                    <p>{item?.bath}</p>
                  </div>
                  <div className="icon">
                    <Icon src={Garage} alt="img" />
                    <p>{item?.garage}</p>
                  </div>
                  <div className="icon">
                    <Icon src={Sqrt} alt="img" />
                    <p>{item?.sqrt}</p>
                  </div>
                </div>
                <h1>{item?.price}</h1>
                <button>Read more</button>
              </Card>
            </div>
          ))}
        </Slider>
      </Wrapper>
    </>
  );
};

export default Home;
