import React from 'react'
import Kitten from '../images/Kitten.jpg';
import styled from "styled-components";


const CatBackground = styled.div`
background-image: url(${Kitten});
height: 100vh;
background-repeat: no-repeat;
background-position: center; 
background-size:1000px 750px;
transition: transform 200ms ease-in-out;
&:hover {
  transform: scale(1.1);

}
`;

const BackGroundGradient = styled.div`
background-image: linear-gradient(72deg, red, #f06d06);

`;


const NotFoundPage = () => (
  <div>
    <BackGroundGradient>
    <CatBackground>
    <h1>Fuck off</h1>
    </CatBackground>
    </BackGroundGradient>
 
    
  </div>
)

export default NotFoundPage
