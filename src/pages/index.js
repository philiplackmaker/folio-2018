import React from "react";
import Link from "gatsby-link"
import styled from "styled-components";
import './global.css'


import Navigation from '../components/navigation'


const Page = styled.div`
  margin: 0 ;
  padding: 0;
  width: 100%;
  postion: fixed;
`;


const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export default () => (
   <Page>
       <Navigation>
        </Navigation>
  <Container>
    <h2>
      <Link to="/audio">Cambridge Audio</Link>
    </h2>
  </Container>
  </Page>
);