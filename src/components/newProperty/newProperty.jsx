import React from "react";
import {
  AmenitiesBlog,
  Block,
  BlockCheck,
  Con2,
  ContactInfo,
  Form,
  Form2,
  FormDown,
  FormUp,
  Input,
  Input2,
  LongLat,
  MediaBtn,
  MediaImg,
  MediaPart,
  Map,
  Price,
  PriceLeft,
  PriceRight,
  SelectInput,
  SubmitBtn,
  Label,
  Select,
  H1,
} from "./style";

class NewProperty extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="NewProperty">
          <Con2>
            <H1>Add new property</H1>

            <ContactInfo>
              <p>Contact information</p>
              <Form>
                <FormUp>
                  <input type="text" placeholder="Property title*" required />
                  <input type="text" placeholder="Type" required />
                </FormUp>
                <FormDown>
                  <input type="text" placeholder="Property Description*" />
                </FormDown>
              </Form>
            </ContactInfo>

            <ContactInfo>
              <p>Additional</p>
              <Form2>
                <Block>
                  <Input type="text" placeholder="Property ID" />
                  <Input type="text" placeholder="Label" />
                  <Input type="text" placeholder="Beds" />
                  <Input type="text" placeholder="Year build" />
                  <Input type="text" placeholder="Lot area(sqft)" />
                </Block>
                <Block>
                  <Select name="block">
                    <option value="Parent property">Parent property</option>
                  </Select>
                  <Input type="text" placeholder="Material" />
                  <Input type="text" placeholder="Bath" />
                  <Input type="text" placeholder="Home area(sqft)" />
                </Block>
                <Block>
                  <Select name="block">
                    <option value="Parent property">Status</option>
                  </Select>
                  <Input type="text" placeholder="Rooms" />
                  <Input type="text" placeholder="Garages" />
                  <Input
                    type="text"
                    placeholder="Lot dimensions"
                    className="input"
                  />
                </Block>
              </Form2>
            </ContactInfo>

            <ContactInfo>
              <p>Price</p>
              <Price>
                <PriceLeft>
                  <Input type="text" placeholder="Price ($)" />
                  <Input type="text" placeholder="Price Suffix" />
                </PriceLeft>
                <PriceRight>
                  <Input type="text" placeholder="Price Prefix" />
                  <Input type="text" placeholder="Price Custom" />
                </PriceRight>
              </Price>
            </ContactInfo>

            <ContactInfo>
              <p>Location</p>
              <Form>
                <FormUp>
                  <Select w="half">
                    <option>Regions</option>
                  </Select>
                  <Input type="text" placeholder="Friendly address" required />
                </FormUp>
                <Input type="text" placeholder="Map location" />
                <Map></Map>
                <LongLat>
                  <Input2 type="text" placeholder="Latidude" />
                  <Input2 type="text" placeholder="Logtitude" />
                </LongLat>
              </Form>
            </ContactInfo>

            <ContactInfo>
              <p>Media</p>
              <MediaImg>
                <span>Featured image</span>
                <div className="media__img">
                  <img src="" alt="1" />
                  <img src="" alt="2" />
                  <img src="" alt="3" />
                  <img src="" alt="4" />
                </div>
                <MediaBtn>Upload</MediaBtn>
              </MediaImg>
              <MediaPart height="20">
                <span>Gallery</span>
                <MediaBtn>Upload</MediaBtn>
              </MediaPart>
              <MediaPart>
                <span>Attachment</span>
                <span>
                  <i className="fas fa-file"></i>
                </span>
                <MediaBtn>Upload</MediaBtn>
              </MediaPart>
              <MediaPart>
                <Input type="text" placeholder="Video link" />
                <Input
                  type="text"
                  placeholder="Virtual tour"
                  style={{ paddingBottom: "12%" }}
                />
              </MediaPart>
            </ContactInfo>

            <ContactInfo>
              <p>Amenities</p>
              <AmenitiesBlog>
                <div className="blog">
                  <BlockCheck>
                    <input type="checkbox" name="air" className="checkbox" />
                    <Label name="air">Air conditioning</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="barbeque"
                      className="checkbox"
                    />
                    <Label name="barbeque">Barbeque</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input type="checkbox" name="dryer" className="checkbox" />
                    <Label name="dryer">Dryer</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input type="checkbox" name="gym" className="checkbox" />
                    <Label name="gym">Gym</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="laundry"
                      className="checkbox"
                    />
                    <Label name="laundry">Laundry</Label>
                  </BlockCheck>
                </div>
                <div className="blog">
                  <BlockCheck>
                    <input type="checkbox" name="lawn" className="checkbox" />
                    <Label name="lawn">Lawn</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="microwave"
                      className="checkbox"
                    />
                    <Label name="microwave">Microwave</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="outdoor"
                      className="checkbox"
                    />
                    <Label name="outdoor">Outdoor Shower</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="refrigerator"
                      className="checkbox"
                    />
                    <Label name="refrigerator">Refrigerator</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="stunningView"
                      className="checkbox"
                    />
                    <Label name="stunningView">Stunning views</Label>
                  </BlockCheck>
                </div>
                <div className="blog">
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="dinningRoom"
                      className="checkbox"
                    />
                    <Label name="dinningRoom">Dining Room</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="fireplace"
                      className="checkbox"
                    />
                    <Label name="fireplace">Fireplace</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input type="checkbox" name="pets" className="checkbox" />
                    <Label name="pets">Pets Allowed</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="washer/dryer"
                      className="checkbox"
                    />
                    <Label name="washer/dryer">Unit Washer/Dryer</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="onsiteparking"
                      className="checkbox"
                    />
                    <Label name="onsiteparking">Onsite Parking</Label>
                  </BlockCheck>
                </div>
                <div className="blog">
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="waterfront"
                      className="checkbox"
                    />
                    <Label name="waterfront">Waterfront</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="parking"
                      className="checkbox"
                    />
                    <Label name="parking">Parking</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="doorman"
                      className="checkbox"
                    />
                    <Label name="doorman">Doorman</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="heating"
                      className="checkbox"
                    />
                    <Label name="heating">Central Heating</Label>
                  </BlockCheck>
                  <BlockCheck>
                    <input
                      type="checkbox"
                      name="service"
                      className="checkbox"
                    />
                    <Label name="service">Cleaning Service</Label>
                  </BlockCheck>
                </div>
              </AmenitiesBlog>
            </ContactInfo>

            <ContactInfo>
              <p>Select Energy Class</p>
              <SelectInput>
                <input
                  type="text"
                  placeholder="Energy class"
                  className="energyClass"
                />
                <input
                  type="text"
                  placeholder="Energy Index in kWh/m2a"
                  className="energyIndex"
                />
              </SelectInput>
            </ContactInfo>

            <Form>
              <SubmitBtn>Save</SubmitBtn>
            </Form>
          </Con2>
        </div>
      </>
    );
  }
}

export default NewProperty;
