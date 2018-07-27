import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import Navigation from '../components/navigation';
import './fonts.css';
import * as Colors from '../style/colors';
import '../style/globals';
 
const Page = styled.div`
  margin: 0 ;
  padding: 0;
  width: 100%;
  postion: fixed;
  background-color: ${Colors.BLACK};
`;


const Container = styled.div`
${Colors.GRID}
`;

const Header = styled.div`
  grid-column-start: 1;
  grid-column-end: 11;
  height90vh;
  margin: 0;
`;

const ProjectContainer =styled.div`
grid-column-start: 1;
grid-column-end: 11;
display: flex;
flex-wrap: wrap
`;

const ProjecctCard = styled(Link)`
flex-grow: 1;
min-width: 10%;
height: 200px;
box-sizing: border-box;
margin: 10px;
background-color:lightgrey;
transition: all 0.2s ease-in;
:visited, :active{
  color: #4644FD;
  text-underline: none;
}
&:hover{
  background-color: #4644FD;
  text-underline: none;
}
h2{
  color: white;
}
`;


const IndexPage = ({data}) => (
  <Page>
    <Navigation>
    </Navigation>
  <Container>
    <Header>
      <h1>
      YoYoYo.
      </h1>
    </Header>
    <ProjectContainer>
      {data.allMarkdownRemark.edges.map(project => (
      <ProjecctCard to ={project.node.frontmatter.path}>
      <h2>{project.node.frontmatter.title}</h2>
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
          }
        }
      }
    }
  }
`

export default IndexPage

