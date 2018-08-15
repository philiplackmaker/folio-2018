import React from 'react';
import Navigation from '../components/navigation';
import styled from "styled-components";
import '../pages/fonts.css';
import '../style/globals';
import * as Base from '../style/base';
import * as Type from '../style/typography';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import FooterEverything from '../components/footereverything';



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


const ProjectHeaderContianer = styled.div`
${Base.GRID};
grid-template-rows: 25% 45px auto;
`;

const ProjectHeader = styled.div`
grid-column: 1 / span 4;
display: flex;
justify-content: center;
align-items: center;
`;

const ProjectSubHeader = styled.div`
grid-column: 1 / span 4;
display: flex;
justify-content: center;
align-items: center;
padding: 0;
height: 2rem;

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
        <ProjectHeaderContianer>
        <ProjectHeader>
            <ProjectHeaderText>{project.frontmatter.title}</ProjectHeaderText>
        </ProjectHeader>
        <ProjectSubHeader>
            <ProjectHeaderSubText>{project.frontmatter.subtitle}</ProjectHeaderSubText>
        </ProjectSubHeader>
           </ProjectHeaderContianer>
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

