import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';


const BackGroundGradient = styled.div`
  background-image: linear-gradient(72deg, red, #f06d06);
  height: 100vh;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;
const ImageHolder = styled.div`
  width: 1000px;
  padding: 5%;
`;

const NotFoundPage = ({ data }) => (
  <div>
   <BackGroundGradient>
      <h2>Fuck Off</h2> 
      <ImageHolder>
      <Img fluid={data.file.childImageSharp.fluid} />
      </ImageHolder>
    </BackGroundGradient>
  </div>
);

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "kitten.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default NotFoundPage
