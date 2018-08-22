import React from 'react';
import Navigation from '../components/navigation';
import styled from "styled-components";
import '../pages/fonts.css';
import '../style/globals';
import * as Base from '../style/base';
// import * as BreakPoints from '../style/breakpoints';
import * as Type from '../style/typography';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import FooterEverything from '../components/footereverything';



const Container = styled.div`
${Base.GRID};
`;

const Proeject = styled.div`
grid-column: 1 / span 12;
`;

const Content = styled.div`
grid-column: 1 / span 12;
`;

const HeroImage = styled.div`
`;

const ProjectHeader = styled.div`
// grid-column: col-start 1 / span 11;
background-color: red;
// width: 5000px;
// display: flex;
// // justify-content: center;
// // align-items: center;
// padding: 0;
// height: 4rem;
`;


const ProjectHeaderText = styled.text`
${Type.SUBHEADER};
text-align: center;
align-self: flex-start;
`;

const ProjectHeaderSubText = styled.text`
${Type.LARGEBODY};
align-self: flex-end;
`;



export default function Template({data}) {
  const {markdownRemark: project, } = data;
  return (
    <div>
        <Navigation>
        </Navigation>
        <Container>
        <ProjectHeader>
        <ProjectHeaderText>{project.frontmatter.title}</ProjectHeaderText>
        <ProjectHeaderSubText>{project.frontmatter.subtitle}</ProjectHeaderSubText>

        </ProjectHeader>
           </Container>
        <HeroImage>
            <Img fluid={project.frontmatter.cover_image.childImageSharp.fluid}/>
        </HeroImage>
        <Container>
          <Proeject>
            <Content dangerouslySetInnerHTML={{ __html: project.html }}/>
          </Proeject>
       </Container>
       <FooterEverything></FooterEverything>
    </div>
  )
}



export const postQuery = graphql`
  query ProjectByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html 
      frontmatter {
        path
        title
        subtitle
        cover_image{
          childImageSharp{
            fluid(maxHeight: 500 ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

