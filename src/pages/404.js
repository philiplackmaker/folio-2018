import React from 'react'
import Kitten from '../images/Kitten.jpg';
import styled from "styled-components";
import { graphql } from 'gatsby';



const CatBackground = styled.div`
background-image: url(${Kitten});
height: 100vh;
background-repeat: no-repeat;
background-position: center; 
background-size:1000px 750px;
transition: transform 200ms ease-in-out;
&:hover {
  transform: scale(1.6);

}
`;

const BackGroundGradient = styled.div`
background-image: linear-gradient(72deg, red, #f06d06);

`;


const NotFoundPage = () => (
  <div>
    <BackGroundGradient>
      <CatBackground>
        <h1>Fuck off</h1>
      </CatBackground>
    </BackGroundGradient>
  </div>
)


export const pageQuery = graphql`
  query NotFoundPageQuery {
    allMarkdownRemark(limit: 5) {
      edges {
        node{
          frontmatter {
            title
            path
            subtitle
            note_title
            templateKey
            small_image{
                childImageSharp{
                  fluid(maxHeight: 800 ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
          }
        }
      }
    }
  }
`

export default NotFoundPage
