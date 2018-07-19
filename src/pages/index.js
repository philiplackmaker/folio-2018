import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import Navigation from '../components/navigation';
import './fonts.css';
import './global.css';


const Page = styled.div`
  margin: 0 ;
  padding: 0;
  width: 100%;
  postion: fixed;
`;


const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  display: grid;
  grid-template-columns: repeat(10, 10% [col-start]);
  grid-template-rows: 25% 100px auto;
`;

const Header = styled.div`
  grid-column-start: 1;
  grid-column-end: 11;
  height:75vh;
  margin: 0;
`;

const ProjecctCard = styled(Link)`
grid-column-start: 1;
grid-column-end: 4;
background-color: red;
transition: all 0.4s ease-in;

:visited, :active{
  background-color: red;
  text-underline: none;
}
&:hover{
  background-color: black;
  text-underline: none;
}

`;

export default () => (
   <Page>
    <Navigation>
    </Navigation>
  <Container>
    <Header>
      <h1>
Need to write a really long and wanky statement. So I look better than I am.      </h1>
    </Header>
    <ProjecctCard to ="/audio">
      <h2>
      Cambridge Audio
      </h2>
    </ProjecctCard> 

  </Container>
</Page>
);