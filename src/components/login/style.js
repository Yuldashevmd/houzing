import styled from 'styled-components';

// vars
const color = `
color: #0D263B;
`;
// start
export const Container = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginForm = styled.div `
width: 580px;
height: 376px;
padding: 30px;
margin: 5rem 0;
border-radius: 3px;
background: #fff;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
display: flex;
flex-direction: column;
justify-content: space-between;
p{
  ${color};
  font-size: 18px;
  font-weight: 600;
}
`;
export const Form = styled.div `
height: 85%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`;
LoginForm.InputForm = styled.div `
width: 100%;
display: flex;
flex-direction: column;
label{
  ${color};
  font-size: 14px;
  font-weight: 600;
}
`;
export const Input = styled.input `
width: 100%;
height: 40px;
${color};
border: none;
border-bottom: 2px solid #E6E9EC;
outline: none;
transition: all 0.2s linear;
:focus{
  border-color: #0061DF;
}
`;
export const CheckForget = styled.div `
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
button{
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-decoration-line: underline;
color: #0061DF;
border: none;
background: transparent;
cursor: pointer;
:hover{
  color: #006500;
}
}
`;
CheckForget.Check = styled.div `
width: 25%;
display: flex;
justify-content: space-between;
align-items: center;
span{
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;
user-select: none;
}
`;
export const Button = styled.button `
width: 520px;
height: 44px;
display: flex;
justify-content: center;
align-items: center;
background: #0061DF;
border: none;
border-radius: 2px;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #fff;
margin-top: 20px;
:hover{
  cursor: pointer;
}
:active{
  transform: scale(0.99);
}
`;