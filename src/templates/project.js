import React from 'react';
import Navigation from '../components/navigation';
import styled from "styled-components";
import '../pages/fonts.css';
import '../style/globals';
import * as Base from '../style/base';
import * as Spacing from '../style/spacing';
import * as Type from '../style/typography';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import FooterEverything from '../components/footereverything';
import * as BreakPoints from '../style/breakpoints';
import Fade from 'react-reveal/Fade';


const Container = styled.div`
${Base.GRID};
`;

const Proeject = styled.div`
  ${BreakPoints.SMALL} {
    grid-column: 2 / span 10;
    }
  ${BreakPoints.MEDIUM} {
    grid-column: 1 / span 12;
    }
  ${BreakPoints.LARGE} {
    grid-column: 1 / span 12;
    }
  ${BreakPoints.XLARGE} {
    grid-column: 1 / span 12;
    }
  ${BreakPoints.XXLARGE} {
    grid-column: 1 / span 12;
    }
`;
const Content = styled.div`
grid-column: 1 / span 12;
`;

const HeroImage = styled.div`
`;

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
      ${BreakPoints.SMALL} {
        grid-column: 2 / span 10;
        padding-top: ${Spacing.XSMALL};  
        height: ${Spacing.XLARGE};                     
      }
      ${BreakPoints.MEDIUM} {  
        grid-column: 1 / span 12;
        padding-top: ${Spacing.XSMALL};  
        height: ${Spacing.XXLARGE};                     
      }
      ${BreakPoints.LARGE}{ 
        grid-column: 1 / span 12;
        padding-top: ${Spacing.SMALL};  
        height: ${Spacing.XXLARGE};                     
      }
      ${BreakPoints.XLARGE} { 
        grid-column: 1 / span 12;
        padding-top: ${Spacing.SMALL};  
        height: ${Spacing.XXLARGE};                     
      }
      ${BreakPoints.XXLARGE} { 
        grid-column: 1 / span 12;
        padding-top: ${Spacing.SMALL};  
        height: ${Spacing.XXLARGE};                     
  }
`;

const ProjectHeaderText = styled.text`
  ${Type.SUBHEADER};
  padding-bottom: ${Spacing.XSMALL};
`;

const ProjectHeaderSubText = styled.text`
${Type.LARGEBODY};
text-align: center;
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
          <Fade  duration={2000}>
            <Img fluid={project.frontmatter.cover_image.childImageSharp.fluid}/>
            </Fade>
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

