import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Navigation from '../components/navigation';
import ButtonSmall from '../components/buttonsmall';
import './fonts.css';
import * as Colors from '../style/colors';
import '../style/globals';
import * as Base from '../style/base';
import * as Type from '../style/typography';
import Line from '../images/small_underline.svg';
import Circle from '../images/circle.svg';
import { graphql } from 'gatsby';
import Img from "gatsby-image";
import FooterEverything from '../components/footereverything';
import * as BreakPoints from '../style/breakpoints';
import Fade from 'react-reveal/Fade';
import * as Spacing from '../style/spacing';


 
const Page = styled.div`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  ${Base.GRID}
`;

const Header = styled.div`
  height: 100vh;
  background-color: ${Colors.PRIMARY};
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center; 
 `;

 const HeaderText = styled.text `
    ${Type.LARGEHEADER};
    z-index: 200;
    text-align: center;
    color: ${Colors.WHITE};
    display: block;
    padding-left: 3rem;
    padding-right: 3rem;
 `;

 const HeaderContents = styled.div`
 `;

 const UnderLine = styled.span`
  z-index: -1;
  background-image: url(${Line});
  background-repeat: no-repeat, repeat;
  background-position: bottom;
`;

const DrawnCircle = styled.span`
  z-index: -1;
  background-image: url(${Circle});
  padding: 1rem;
  height: 10rem;
  background-repeat: no-repeat, repeat;
  background-position: bottom;
`;

// const UnderlineText = styled.text`
//   ${Type.NOTES}
//   color:${Colors.PRIMARY};
// `;

const DesignerRolesContainer = styled.div`
Padding-left: 75%;
Padding-bottom: 2rem;
`;

const ProjectCard = styled(Link)`
  display: flex;
  flex: row;
  justify-content: space-between;
    ${BreakPoints.SMALL} {
      grid-column: 2 / span 10;
      height: 15rem;
      margin-top: 5rem;
    }
    ${BreakPoints.MEDIUM} {
      grid-column: 1 / span 12;
      height: 25rem;
      margin-top: 15rem;
      }
    ${BreakPoints.LARGE} {
      grid-column: 1 / span 12;
      height: 25rem;
      margin-top: 15rem;
      }
    ${BreakPoints.XLARGE} {
        grid-column: 1 / span 12;
        height: 25rem;
        margin-bottom: 10rem;
        }
    ${BreakPoints.XXLARGE} {
      grid-column: 1 / span 12;
      height: 25rem;
      margin-bottom: 20rem;
    }   
`;

const ProjectInfo = styled.div `
  display: flex;
  flex-direction: column;
`;

const ProjectHeader = styled(Link)`
  ${Type.SUBHEADER};
  text-align: left;
  dispaly: block;
  color: ${Colors.BLACK};
    ${BreakPoints.SMALL} {
      padding-top: ${Spacing.MEDIUM};
    }
    ${BreakPoints.MEDIUM} {  
      padding-top: ${Spacing.MEDIUM};
    }
    ${BreakPoints.LARGE}{ 
      padding-top: ${Spacing.MEDIUM};
    }
    ${BreakPoints.XLARGE} { 
      padding-top: ${Spacing.SMALL};
    }
    ${BreakPoints.XXLARGE} { 
      padding-top: ${Spacing.MEDIUM};
    }
`;

const ProjectSubtitle = styled(Link)`
  ${Type.LARGEBODY}
  color: ${Colors.BLACK};
    ${BreakPoints.SMALL} {
      padding-top: .5rem;
      padding-bottom: 1rem;    
    }
    ${BreakPoints.MEDIUM} {  
      padding-top: .5rem;
      padding-bottom: 1rem;    
    }
    ${BreakPoints.LARGE}{ 
      padding-top: .5rem;
      padding-bottom: 1rem;    
    }
    ${BreakPoints.XLARGE} { 
      padding-top: 1.25rem;
      padding-bottom: 3rem;    
    }
    ${BreakPoints.XXLARGE} { 
      padding-top: 1.5rem;
      padding-bottom: 4rem;    
    }
`;

const ProjectNotes = styled(Link)`
  ${Type.NOTES}
  color: ${Colors.PRIMARY};
`;

const ProjectTeaserImage = styled.div`
align-items: end;
  ${BreakPoints.SMALL} {
  width: 100px;
  }
  ${BreakPoints.MEDIUM} {
    width: 250px;
      }
  ${BreakPoints.LARGE} {
    width: 260px;
      }
    ${BreakPoints.XLARGE} {
      width: 400px;
          }
  ${BreakPoints.XXLARGE} {
    width: 500px;
      }
`;

const ImageContainer = styled.div`
  grid-column: 8 / span 4
`;

const DesignRoles = styled.text`
  z-index: 0;
  padding-top: ${Spacing.XSMALL};
  position: absolute;
  ${Type.NOTES}
  color: ${Colors.LIGHTEST_PRIMARY};
`;

const ThirdPerson = styled.text`
  z-index: 0;
  position: absolute;
  padding-left: 30px;
  left: 0;
  ${Type.NOTES}
  color: ${Colors.LIGHTEST_PRIMARY};
`;


const IndexPage = ({data}) => (
  <Page>
    <Navigation>
    </Navigation>
      <Header>
        <HeaderContents>
        <Fade duration={3000}>
          <DesignerRolesContainer>
          <ThirdPerson>*I don't usually talk about myself in third person.</ThirdPerson>
              <DesignRoles>Product designer,<br></br> Visual designer,<br></br> user exerperience designer <br></br>& Graphic Designer. </DesignRoles>
          </DesignerRolesContainer>
            <HeaderText><UnderLine>Philip*</UnderLine> is a<DrawnCircle>designer</DrawnCircle><br></br>Helping to build software for <UnderLine>brands.</UnderLine><br></br> Philip has lead design teams at Potato, ustwo & Method. <br></br> In London, Bristol & Sydney.  <br></br> Say hello. </HeaderText>
          </Fade>
        </HeaderContents>
      </Header> 
      <Fade cascade duration={2000}>
      <Container>
              {data.allMarkdownRemark.edges.filter(project => project.node.frontmatter.templateKey === 'project').map(project => (
                <ProjectCard to ={project.node.frontmatter.path}>
                <ProjectInfo>
                    <ProjectNotes>{project.node.frontmatter.note_title}</ProjectNotes>
                    <div></div>
                    <ProjectHeader>{project.node.frontmatter.title}</ProjectHeader>
                    <div></div>
                    <ProjectSubtitle>{project.node.frontmatter.subtitle}</ProjectSubtitle>
                    <div></div>
                   <ButtonSmall to ={project.node.frontmatter.path}>
                    </ButtonSmall>
                  </ProjectInfo>
                  <ImageContainer>
                  <ProjectTeaserImage>
                   <Img fluid={project.node.frontmatter.small_image.childImageSharp.fluid}/>
                </ProjectTeaserImage>
                  </ImageContainer>   
              </ProjectCard>   
            ))}
          </Container>
          </Fade>
    <FooterEverything></FooterEverything>
</Page>
)


export const pageQuery = graphql`
  query IndexQuery {
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
                  fluid(maxHeight: 1200 ) {
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

export default IndexPage

