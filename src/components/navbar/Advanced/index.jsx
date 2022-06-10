import React from "react";
import Home from "../../../assets/iconsSvg/home.svg";
import CarKey from "../../../assets/iconsSvg/car-key 1.svg";
import Price from "../../../assets/iconsSvg/price 1.svg";
import Settings from "../../../assets/iconsSvg/setting-lines.svg";
import Loupe from "../../../assets/iconsSvg/001-loupe.svg";
import { Container } from "../style";
import { Sidebar, AdBtn, Row, Input, Submit } from "./style";

class Advanced extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  render() {
    const openAdvan = () => {
      this.setState({ checked: !this.state.checked });
    };
    return (
      <>
        <Container>
          <Sidebar>
            <div className="left">
              <img src={Home} alt="home" />
              <input
                type="text"
                placeholder="Enter an address, neighborhood, city, or ZIP code"
              />
            </div>
            <div className="right">
              <div className="right__button">
                <img src={CarKey} alt="carkey" />
                <button>Status</button>
              </div>
              <div className="right__button">
                <img src={Price} alt="price" />
                <button>Price</button>
              </div>
              <div className="right__button" onClick={openAdvan}>
                <img src={Settings} alt="setting" />
                <button onClick={openAdvan}>Advanced</button>
              </div>
              <div className="right__button__search">
                <img src={Loupe} alt="loupe" />
                <button>Search</button>
              </div>
            </div>
          </Sidebar>
        </Container>
        <Container style={{position:'relative'}}>
          <AdBtn display={this.state.checked}>
            <Row>
              <p>Address</p>
              <div className="inputs">
                <Input>
                  <input type="text" placeholder="Country" />
                </Input>
                <Input>
                  <input type="text" placeholder="Region" />
                </Input>
                <Input>
                  <input type="text" placeholder="City" />
                </Input>
                <Input>
                  <input type="number" placeholder="Zip code" />
                </Input>
              </div>
            </Row>
            <Row>
              <p>Apartment info</p>
              <div className="inputs">
                <Input>
                  <input type="text" placeholder="Rooms" />
                </Input>
                <Input>
                  <input type="number" placeholder="Size" />
                </Input>
                <Input>
                  <input type="text" placeholder="Sort" />
                </Input>
              </div>
            </Row>
            <Row>
              <p>Price</p>
              <div className="inputs">
                <Input>
                  <input type="number" placeholder="Min price" />
                </Input>
                <Input>
                  <input type="number" placeholder="Max price" />
                </Input>
              </div>
            </Row>
            <Submit>
              <button onClick={openAdvan}>Cancel</button>
              <button>Submit</button>
            </Submit>
          </AdBtn>
        </Container>
      </>
    );
  }
}

export default Advanced;
