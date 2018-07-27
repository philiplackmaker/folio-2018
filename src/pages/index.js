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
`;

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
transition: all 0.2s ease-in;
:visited, :active{
  color:${Colors.PRIMARY}
  text-underline: none;
}
&:hover{
  background-color:${Colors.PRIMARY}
  text-underline: none;
}
`;



const IndexPage = ({data}) => (
  <Page>
    <Navigation>
    </Navigation>
  <Container>
    <Header>
      <h1>
      Philip is an designer, 
previously lead teams at Potato, 
method, ustwo and Hellocar.      </h1>
    </Header>
    <ProjectContainer>
      {data.allMarkdownRemark.edges.map(project => (
      <ProjecctCard to ={project.node.frontmatter.path}>
      <h2>{project.node.frontmatter.title}</h2>
      <h3>{project.node.frontmatter.subtitle}</h3>
      </ProjecctCard>   
    ))}
    </ProjectContainer>
  </Container>
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

