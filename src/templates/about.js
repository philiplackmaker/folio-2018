import React from 'react';
import Navigation from '../components/navigation';
import styled from "styled-components";
import '../pages/fonts.css';
import * as Base from '../style/base';
import '../style/globals';
// import Img from "gatsby-image";
import { graphql } from 'gatsby';
import FooterEverything from '../components/footereverything';


const Container = styled.div`
${Base.GRID};
`;

export default function Template({data}) {
  const {markdownRemark: about, } = data;
  return (
    <div>
        <Navigation>
          <Container>
          <h1>{about.frontmatter.title}</h1>
          </Container>
        </Navigation>
       <FooterEverything></FooterEverything>
    </div>
  )
}


export const aboutQuery = graphql`
  query AboutByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html 
      frontmatter {
        path
        title
        subtitle
        cover_image{
          childImageSharp{
            fluid(maxHeight: 600 ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

