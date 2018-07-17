import React from "react";
import styled from "styled-components";

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
  <h1>Cam
  </h1>
  </Container>
  </Page>
);