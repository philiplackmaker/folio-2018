import React from 'react';
import Navigation from '../components/navigation';
import styled from "styled-components";
import '../pages/fonts.css';
import * as Base from '../style/base';
import '../style/globals';
import Img from "gatsby-image";
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
          <Img fluid={about.frontmatter.cover_image.childImageSharp.fluid}/>

          <h2>{about.frontmatter.title}</h2>
          <h3>{about.frontmatter.subtitle}</h3>
          </Container>
        </Navigation>
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

