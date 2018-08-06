import React from 'react';
import Navigation from '../components/navigation';
import styled from "styled-components";
import '../pages/fonts.css';
import * as Base from '../style/base';
import '../style/globals';
// import Img from "gatsby-image";
import Footer from '../components/footer';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const Container = styled.div`
${Base.GRID};
`;

const Proeject = styled.div`
grid-column: 1 / span 5;
`;

const Content = styled.div`
grid-column: 1 / span 1;
`;

const HeroImage = styled.div`
`;

export default function Template({data}) {
  const {markdownRemark: project,} = data;
  return (
    <div>
        <Navigation>
        </Navigation>
        <HeroImage>
          <Img fluid={project.frontmatter.cover_image.childImageSharp.fluid}/>
        </HeroImage>
        <Container>
          <Proeject>
            <h2>{project.frontmatter.title}</h2>
            <h3>{project.frontmatter.subtitle}</h3>
            <Content dangerouslySetInnerHTML={{ __html: project.html }}/>
          </Proeject>
       </Container>
       <Footer>
      </Footer>
    </div>
  )
}


export const postQuery = graphql`
  query ProjectByPath($path: String!) {
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

