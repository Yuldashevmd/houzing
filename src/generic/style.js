import styled from 'styled-components';

export const Proccess = styled.div `
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
h1{
  text-transform: capitalize;
  color: teal;
  margin:0 5px;
  animation: move 1s 1s ease-in-out 1 ;
  @keyframes move{
   0%{
    transform: scale(1);
   } 
   50%{
    transform: scale(1.5);
   } 
   100%{
    transform: scale(1);
   }
  }
  
}


`