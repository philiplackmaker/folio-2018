import React from "react";
import Link from "gatsby-link";
import Helmet from 'react-helmet';
import styled from "styled-components";
import Navigation from '../components/navigation';
import Footer from '../components/footer';


import './fonts.css';
import * as Colors from '../style/colors';
import '../style/globals';
import * as Base from '../style/base';
import * as Type from '../style/typography';

 
const Page = styled.div`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
${Base.GRID}
`;

const Header = styled.div`
  grid-column-start: 1;
  grid-column-end: 11;
  margin: 0;
  height: 60vh;
`;

const ProjectBackground =styled.div`
width: 100%;
background-color: ${Colors.LIGHT_GREY};
padding: 0;
`

const ProjectContainer =styled.div`
grid-column-start: 4;
grid-column-end: 11;
display: flex;
flex-wrap: wrap;
padding-top: 80px;
`;

const ProjecctCard = styled(Link)`
width: 100%;
min-width: 10%;
height: 200px;
box-sizing: border-box;
margin: 10px;
justify-content: space-around;

`;

const ProjectHeader = styled(Link)`
  ${Type.SUBHEADER};
  color: ${Colors.BLACK};
  text-decoration-color: ${Colors.LIGHT_GREY}; //Hacked to turn it off maybe find a better solution
`;

const ProjectButton = styled.button`
width: 200px;
height: 70px;
border: none;
background-color: ${Colors.PRIMARY}
margin-top: 20px;
cursor: pointer;
transition: all 0.2s ease-in;
:visited, :active{
  border: none;

}
&:hover{
  background-color:${Colors.PRIMARY}
  border: none;
}
`;

const ProjectButtonText = styled.text`
${Type.BODY}
color:${Colors.WHITE}
`;

const ProjectSubtitle = styled(Link)`
${Type.LARGEBODY}
color: ${Colors.BLACK};
text-decoration-color: ${Colors.LIGHT_GREY}; //Hacked to turn it off maybe find a better solution
`;

const ProjectNotes = styled(Link)`
${Type.NOTES}
color: ${Colors.PRIMARY};
text-decoration-color: ${Colors.LIGHT_GREY}; //Hacked to turn it off maybe find a better solution
`;


const IndexPage = ({data}) => (
  <Page>
    <Navigation>
    </Navigation>
      <Header>
      <h1>
      Philip is an designer,<br></br> currently at Potato, method, ustwo and Hellocar.</h1>
      </Header>
    <ProjectBackground>
    <Container>

    <ProjectContainer>
      {data.allMarkdownRemark.edges.map(project => (
        <ProjecctCard to ={project.node.frontmatter.path}>
        <ProjectNotes>{project.node.frontmatter.notetitle}</ProjectNotes>
        <div></div>
        <ProjectHeader>{project.node.frontmatter.title}</ProjectHeader>
        <div></div>
        <ProjectSubtitle>{project.node.frontmatter.subtitle}</ProjectSubtitle>
        <div></div>
        <ProjectButton to ={project.node.frontmatter.path}>
        <div></div>
        <ProjectButtonText>Read More</ProjectButtonText>
        </ProjectButton>
        </ProjecctCard>   
    ))}
    </ProjectContainer>
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
            notetitle
          }
        }
      }
    }
  }
`

export default IndexPage

