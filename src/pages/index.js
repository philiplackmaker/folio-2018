import React from "react";
import Link from "gatsby-link";
import Helmet from 'react-helmet';
import styled from "styled-components";
import Navigation from '../components/navigation';
import './fonts.css';
import * as Colors from '../style/colors';
import '../style/globals';
 
const Page = styled.div`
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
${Colors.GRID}
`;

const Header = styled.div`
  grid-column-start: 1;
  grid-column-end: 11;
  margin: 0;
  height: 200px;
`;

const ProjectBackground =styled.div`
width: 100%;
background-color: ${Colors.LIGHT_GREY};
`

const ProjectContainer =styled.div`
grid-column-start: 1;
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

`;

const ProjectHeader = styled.h2`
bckground-color: red:
`;

const ProjectButton = styled.button`
width: 200px;
height: 100px;
transition: all 0.2s ease-in;
:visited, :active{
  color:rgba();
  text-decoration: none;
}
&:hover{
  background-color:${Colors.PRIMARY}
  text-decoration: none;
}

`;

const IndexPage = ({data}) => (
  <Page>
    <Navigation>
    </Navigation>
      <Header>
      <h1>
      Philip is an designer.</h1>
      </Header>
    <ProjectBackground>
    <Container>

    <ProjectContainer>
      {data.allMarkdownRemark.edges.map(project => (
      <ProjecctCard to ={project.node.frontmatter.path}>
      <ProjectHeader>{project.node.frontmatter.title}</ProjectHeader>
      <h3>{project.node.frontmatter.subtitle}</h3>
      <ProjectButton to ={project.node.frontmatter.path}>
      <h3>Read More</h3>
        </ProjectButton>
      
      </ProjecctCard>   
    ))}
    </ProjectContainer>
    </Container>
    </ProjectBackground>
 
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
          }
        }
      }
    }
  }
`

export default IndexPage

