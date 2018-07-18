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
  height:400px;
  margin: 0;
`;

const ProjecctCard = styled.div`
grid-column-start: 1;
grid-row-start: 2;

`;

export default () => (
   <Page>
    <Navigation>
    </Navigation>
  <Container>
    <Header>
      <h1>
      Philip Lackmaker is a lead product designers. Previously he led design at Potato, Method, ustwo 
      & Village Green Studio. 
      Philip has worked with brands such as Red Bull, Google, Ebay, Laterooms, Barclays, Fabric and more.      
      </h1>
    </Header>
    <ProjecctCard>
    <h2>
      <Link to="/audio">Cambridge Audio</Link>
    </h2>
    </ProjecctCard> 
  </Container>
  </Page>
);