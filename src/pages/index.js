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
 
const Page = styled.div`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
${Base.GRID}
`;

const Header = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center; /*centers items on the cross-axis (y by default)*/

 `;

 const HeaderContents = styled.div`
 padding: 0;
 maring: 0;
 `;

const ProjectBackground =styled.div`
  width: 100%;
  background-color: ${Colors.LIGHT_GREY};
  padding: 0;
  height: 2000px;
`;

const ProjectCard = styled(Link)`
  grid-column: 1 / span 5;
  height: 240px;
  margin: 16px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 200px 0 200px 0;
    // &:nth-child(2)
    // {
    //   background-color: red;
    // }

    // &:nth-child(1)
    // {
    //   background-color: red;
    // }
`;

const ProjectInfo = styled.div `
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content:space-between;
`;

const ProjectHeader = styled(Link)`
  ${Type.SUBHEADER};
  color: ${Colors.BLACK};
`;

const ProjectSubtitle = styled(Link)`
  ${Type.LARGEBODY}
  color: ${Colors.BLACK};
`;

const ProjectNotes = styled(Link)`
  ${Type.NOTES}
  color: ${Colors.PRIMARY};
`;

const ProjectTeaserImage = styled.div`
  width: 300px;
  height: 400px;
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
  padding: 20px;
  height: 200px;
  background-repeat: no-repeat, repeat;
  background-position: bottom;
`;



const UnderlineText = styled.text`
  ${Type.NOTES}
  color:${Colors.PRIMARY};
`;

const DesignerRolesContainer = styled.div`
Padding-left: 75%;
Padding-bottom: 20px;

`;

const BlogCardContainer = styled.div`
  grid-column: 1 / span 5;
  display: flex;
  justify-content: space-between;
`;

const BlogCard = styled.div`
  background-color: ${Colors.WHITE};
  height: 300px;
  width:190px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectContainer = styled.div`
  grid-column: 1 / span 5;
`;


const BlogLink = styled(Link)`
  ${Type.LARGEBODY};
  color: ${Colors.PRIMARY};
`;

// mixpanel.track("Video play");


const IndexPage = ({data}) => (
  <Page>
    <Navigation>
    </Navigation>
      <Header>
        <HeaderContents>
          <DesignerRolesContainer>
              <UnderlineText>Product designer,<br></br> Visual designer,<br></br> user exerperience designer <br></br>& Graphic Designer. </UnderlineText>

          </DesignerRolesContainer>
       
     
          <h1><UnderLine>Philip*</UnderLine> is a<DrawnCircle>designer</DrawnCircle><br></br>Previously he lead design teams at Method, ustwo and Hellocar.</h1>
        
        </HeaderContents>
  
      </Header>  
    <ProjectBackground>
      <Container>
        <ProjectContainer>
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
                  <ProjectTeaserImage>
                   <Img fluid={project.node.frontmatter.small_image.childImageSharp.fluid}/>
                </ProjectTeaserImage>
              </ProjectCard>   
            ))}
            <h3>Blog posts</h3>
            </ProjectContainer>
            <BlogCardContainer>
              <BlogCard>
                  <ProjectSubtitle>What not to say in facebook interview</ProjectSubtitle>
                  <BlogLink>Read More</BlogLink>
                </BlogCard>
                <BlogCard>
                  <ProjectSubtitle>What not to say in facebook interview</ProjectSubtitle>
                  <BlogLink>Read More</BlogLink>
                </BlogCard>
                <BlogCard>
                  <ProjectSubtitle>What not to say in facebook interview</ProjectSubtitle>
                  <BlogLink>Read More</BlogLink>
                </BlogCard>
                <BlogCard>
                  <ProjectSubtitle>What not to say in facebook interview</ProjectSubtitle>
                  <BlogLink>Read More</BlogLink>
                </BlogCard>
            </BlogCardContainer>
          </Container>

    </ProjectBackground>
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

export default IndexPage

