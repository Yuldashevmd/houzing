import styled from "styled-components";


// vars
const colorText = `#0D263B`;
const btnColor = `#0061DF`;
const radius = `border-radius:4px`;
const border = `border:1px solid lightgrey`;

// Sidebar
export const Sidebar = styled.div `
  width: 100%;
  height: 44px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 2px;
  /* media */
  @media screen and (max-width: 1180px) and (min-width: 744px) {
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  @media screen and (max-width: 743px) and (min-width: 544px) {
    height: fit-content;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
  }
  @media screen and (max-width: 543px) {
    height: fit-content;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
  }
  .left {
    width: 45%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 16px;
    ${border};
    ${radius};
    /* media */
    @media screen and (max-width: 1180px) and (min-width: 744px) {
      width: 100%;
      margin-bottom: 15px;
    }
    @media screen and (max-width: 743px) and (min-width: 544px) {
      width: 100%;
      margin-bottom: 15px;
    }
    @media screen and (max-width: 543px) {
      width: 100%;
      margin-bottom: 15px;
    }
    input {
      width: 100%;
      border: none;
      outline: none;
      outline: none;
      background: transparent;
      font-size: 14px;
      padding: 4px;
      margin-left: 8px;
      ::placeholder {
        color: ${colorText};
      }
    }
  }
  .right {
    width: 50%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* media */
    @media screen and (max-width: 1180px) and (min-width: 744px) {
      width: 100%;
      margin-bottom: 15px;
    }
    @media screen and (max-width: 743px) and (min-width: 544px) {
      width: 100%;
      margin-bottom: 15px;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    }
    @media screen and (max-width: 543px) {
      width: 100%;
      height: fit-content;
      margin-bottom: 15px;
      flex-wrap: wrap;
      justify-content: space-evenly;
      gap: 10px;
    }
    .right__button {
      width: 131px;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 8px;
      justify-content: space-evenly;
      cursor: pointer;
      ${border};
      ${radius};
      user-select: none;
      /* media */
      @media screen and (max-width: 543px) {
      width: 100%;
      justify-content: flex-start;
    }
      :hover {
        background: lightgray;
      }
      :active {
        transform: scale(0.95);
      }
      button {
        border: none;
        color: ${colorText};
        background: transparent;
        /* media */
        @media screen and (max-width: 543px) {
          margin-left: 20px;
    }
      }
    }
    .right__button__search {
      width: 180px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      ${border};
      cursor: pointer;
      background-color: ${btnColor};
      color: #fff;
      ${radius};
      user-select: none;
      :active {
        transform: scale(0.95);
      }
      /* media */
      @media screen and (max-width: 543px) {
      width: 130px;
    }
      button {
        border: none;
        background: transparent;
        color: #fff;
        letter-spacing: 2px;
        cursor: pointer;
      }
    }
  }
`;
// advanced btn
export const AdBtn = styled.div `
  width: 920px;
  height: 409px;
  border-radius: 5px;
  background: #fff;
  margin-left: auto;
  margin-top: 15px ;
  z-index: 999;
 box-shadow: 0 0 5px lightgrey;
 display: ${({display})=> display ? 'block': 'none'};
 /* Media */
 @media screen and (min-width:1190px) {
   position: absolute;
   top:0;
   right: 0;
   margin: 1rem auto;
  }
 @media screen and (max-width:1180px) and (min-width:992px) {
  position: absolute;
  top:4rem !important;
 }
 @media screen and (max-width:991px) and (min-width:767px) {
   width: 100%;
  position: absolute;
  top:4rem !important;
 }
 @media screen and (max-width:766px) and (min-width:545px) {
  width: 100%;
  position: absolute;
  top:4rem !important;
 }
 @media screen and (max-width:544px){
   width: 100%;
   height: fit-content;
 }
`;

export const Row = styled.div `
width: 100%;
height: 25%;
padding: 25px;
display: flex;
flex-direction: column;
align-items: flex-start;
p{
  display: block;
  margin-bottom: 12px;
}
.inputs{
  width: 100%;
  display: flex;
  gap: 20px;
  /* Media */
  @media screen and (max-width:544px){
   width: 100%;
   height: fit-content;
   display: flex;
   flex-direction: column;
 }
}
`;
export const Input = styled.div `
width: 200px;
height: 44px;
border-radius: 6px;
/* media */
@media screen and (max-width:544px){
   width: 100%;
   height: fit-content;
 }
input{
  width: 100%;
  height: 100%;
  border: 1px solid #E6E9EC;
  outline: none;
  padding: 10px;
  font-size: 15px;
}
`;
export const Submit = styled.div `
width: 100%;
height: 84px;
margin-top: 18px;
background: #F6F8F9;
display: flex;
justify-content: flex-end;
align-items: center;
button{
  width: 128px;
  height: 44px;
  margin-right: 28px;
  background: transparent;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  :active{
    transform: scale(0.95);
  }
}
button:nth-child(2){
  color: #fff;
  background: #0061DF;
}
`;

export const Block = styled.div `
display: none;
`;