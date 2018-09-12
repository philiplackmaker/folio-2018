import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as Base from '../style/base';
import  * as Type from '../style/typography';
import { Link } from "gatsby"
import * as Colors from '../style/colors';

const BackGroundGradient = styled.div`
  background-image: linear-gradient(72deg, red, #f06d06);
  height: 100vh;
  width: 100%;
  grid-column: 1 / span 12;
`;

const Content = styled.div`
${Base.GRID}
background: transparent;
z-index: 2000;
`;

const ImageContainer = styled.div`
  grid-column: 4 / span 10;
  postion: relative;
`;

const TypeHeader = styled.text`
${Type.LARGEHEADER};
grid-column: 1 / span 11;
z-index: 2000;
color: ${Colors.WHITE};
postion: fixed;
`;

const BackLink = styled(Link)`
    text-decoration: none;
    transition: all 0.4s ease-in;
    color: black;
    z-index: 2000;
    grid-column: 7 / span 13;
    ${Type.LARGEHEADER};
    :visited, :active{
        color: ${Colors.PRIMARY};
        text-underline: none;
    }
    &:hover{
        color: ${Colors.PRIMARY};
        text-underline: none;
    }
`;
const NotFoundPage = ({ data }) => (
  <div>
    <BackGroundGradient>
      <Content>
          <TypeHeader>Meowwww, I'm a QT fluffy cat but I'm not the page you looking for..maybe go <BackLink to ="/">back home.</BackLink> </TypeHeader> 
          <ImageContainer>
             <Img fluid={data.file.childImageSharp.fluid} />
          </ImageContainer>
      </Content>
    </BackGroundGradient>
  </div>
);

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "kitten.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default NotFoundPage
