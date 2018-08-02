import React from "react";
import Link from "gatsby-link";
import Helmet from 'react-helmet';
import styled from "styled-components";
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import ButtonSmall from '../components/buttonsmall';
import './fonts.css';
import * as Colors from '../style/colors';
import '../style/globals';
import * as Base from '../style/base';
import * as Type from '../style/typography';
import Line from '../images/small_underline.svg';
import Img from "gatsby-image";


console.log(Line);
 
const Page = styled.div`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
${Base.GRID}
`;

const Header = styled.div`
  height: 60vh;
`;

const ProjectBackground =styled.div`
  width: 100%;
  background-color: ${Colors.LIGHT_GREY};
  padding: 0;
  height: 900px;
`;



const ProjectCard = styled(Link)`
  grid-column: 1 / span 5;
  height: 240px;
  margin: 16px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 100px 0 100px 0;
`;

const ProjectInfo = styled.div `
display: flex;
flex-direction: column;
width: 70%;
justify-content:space-between;
`
const ProjectHeader = styled(Link)`
  ${Type.SUBHEADER};
  color: ${Colors.BLACK};
  text-decoration-color: ${Colors.LIGHT_GREY}; //Hacked to turn it off maybe find a better solution
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
  width: 260px;
`;

const UnderLine = styled.span`
z-index: -1;
background-image: url(${Line});
background-repeat: no-repeat, repeat;
background-position: bottom;
`;

const UnderlineText = styled.div`
${Type.NOTES}
color:${Colors.PRIMARY};
margin-left: 10%;
`;

const IndexPage = ({data}) => (
  <Page>
    <Navigation>
    </Navigation>
      <Header>
          <UnderlineText>*That is me....</UnderlineText>
          <h1><UnderLine>Philip</UnderLine> is an designer,<br></br> currently at Potato , method, ustwo and Hellocar.</h1>
      </Header>  
    <ProjectBackground>
      <Container>
              {data.allMarkdownRemark.edges.map(project => (
                <ProjectCard to ={project.node.frontmatter.path}>
                <ProjectInfo>
                    <ProjectNotes>{project.node.frontmatter.note_title}</ProjectNotes>
                    <div></div>
                    <ProjectHeader>{project.node.frontmatter.title}</ProjectHeader>
                    <div></div>
                    <ProjectSubtitle>{project.node.frontmatter.subtitle}</ProjectSubtitle>
                    <div></div>
                   <ButtonSmall  to ={project.node.frontmatter.path}>
                    </ButtonSmall>
                  </ProjectInfo>
                  <ProjectTeaserImage>
                   <Img sizes={project.node.frontmatter.small_image.childImageSharp.sizes}/>
                </ProjectTeaserImage>
              </ProjectCard>   
            ))}
      </Container>
    </ProjectBackground>
    <Footer>
    </Footer>
</Page>
)


export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node{
          frontmatter {
            title
            path
            subtitle
            note_title
            small_image{
              childImageSharp{
                sizes(maxHeight: 700){
              ...GatsbyImageSharpSizes
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

