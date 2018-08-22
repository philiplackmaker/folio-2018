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

 
const Page = styled.div`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  ${Base.GRID}
`;

const Header = styled.div`
  height: 100vh;
  background-color: ${Colors.LIGHT_GREY};
  width: 100%;
  padding-left: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center; 
 `;

 const HeaderText = styled.text `
 ${Type.HEADER};
 text-align: center;
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
      height: 23rem;
      margin-top: 15rem;
      }
    ${BreakPoints.LARGE} {
      grid-column: 1 / span 12;
      height: 20rem;
      margin-top: 15rem;
      }
    ${BreakPoints.XLARGE} {
        grid-column: 1 / span 12;
        height: 20rem;
        margin-bottom: 10rem;
        }
    ${BreakPoints.XXLARGE} {
      grid-column: 1 / span 12;
      height: 20rem;
      margin-bottom: 25rem;

    }   
`;

const ProjectInfo = styled.div `
  display: flex;
  flex-direction: column;
`;

const ProjectHeader = styled(Link)`
  ${Type.SUBHEADER};
  color: ${Colors.BLACK};
    ${BreakPoints.SMALL} {
      padding-top: 1rem;                              
    }
    ${BreakPoints.MEDIUM} {  
      padding-top: 1rem;         
    }
    ${BreakPoints.LARGE}{ 
      padding-top: 1rem;       
    }
    ${BreakPoints.XLARGE} { 
      padding-top: 2rem;
    }
    ${BreakPoints.XXLARGE} { 
      padding-top: 2.5rem;
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

const IndexPage = ({data}) => (
  <Page>
    <Navigation>
    </Navigation>
      <Header>
        <HeaderContents>
          <DesignerRolesContainer>
              {/* <UnderlineText>*<br></br>Product designer,<br></br> Visual designer,<br></br> user exerperience designer <br></br>& Graphic Designer. </UnderlineText> */}
          </DesignerRolesContainer>
          <HeaderText><UnderLine>Philip*</UnderLine> is a<DrawnCircle>designer</DrawnCircle><br></br>Previously he lead design teams at Method, ustwo and Hellocar.</HeaderText>
        </HeaderContents>
      </Header>  
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

