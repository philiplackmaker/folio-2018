import React from 'react';
import Navigation from '../components/navigation';
import styled from "styled-components";
import '../pages/fonts.css';
import * as Base from '../style/base';
import '../style/globals';
import { graphql } from 'gatsby';
import FooterEverything from '../components/footereverything';


const Container = styled.div`
${Base.GRID};
`;

export default function Template({data}) {
  const {markdownRemark: about, } = data;
  return (
    <div>
        <Navigation class ="test">
        </Navigation>
          <Container>
          <h6>{about.frontmatter.title_test}</h6>
          </Container>

       <FooterEverything></FooterEverything>
    </div>
  )
}


export const aboutQuery = graphql`
  query AboutByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html 
      frontmatter {
        path
        title_test
        templateKey
      }
    }
  }
`

