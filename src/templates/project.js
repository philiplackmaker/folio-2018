import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '../components/navigation';
import styled from "styled-components";

import '../pages/fonts.css';
import * as Colors from '../style/colors';
import '../style/globals';

const Container = styled.div`
${Colors.GRID}
`;


export default function Template({data}) {
  debugger;
  const {markdownRemark: project} = data;
  return (
 
    <div>
        <Navigation>
        </Navigation>
        <Container>
        <h1>
        {project.frontmatter.title}</h1>
        </Container>
    </div>
 
  )
}

export const postQuery = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`