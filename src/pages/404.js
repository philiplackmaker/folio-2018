import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';


const BackGroundGradient = styled.div`
  background-image: linear-gradient(72deg, red, #f06d06);
`;

const NotFoundPage = ({ data }) => (
  <div>
    <Img fixed={data.file.childImageSharp.fixed} />
    <BackGroundGradient>
      tes
    </BackGroundGradient>
  </div>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "src/images/kitten.jpg" }) {
      childImageSharp{
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default NotFoundPage
