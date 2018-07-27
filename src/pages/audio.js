import React from "react";
import Link from "gatsby-link"
import styled from "styled-components";

import Navigation from '../components/navigation'

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

const ProjectHeader = styled.div`
grid-column-start: 1;
grid-column-end: 11;
`;

export default () => (
   <Page>
       <Navigation>
        </Navigation>
  <Container>
    <ProjectHeader>
  <h2>Cambridge Audio</h2>
  </ProjectHeader>
  </Container>
  </Page>
);