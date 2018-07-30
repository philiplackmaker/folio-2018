import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '../components/navigation';
import styled from "styled-components";
import '../pages/fonts.css';
import * as Colors from '../style/colors';
import * as Base from '../style/base';
import '../style/globals';

const Container = styled.div`
${Base.GRID};
`;

const HeaderProeject = styled.div`
grid-column-start: 1;
grid-column-end: 11;
`;

export default function Template({data}) {
  debugger;
  const {markdownRemark: project} = data;
  return (
    <div>
        <Navigation>
        </Navigation>
        <Container>
          <HeaderProeject>
            <h2>{project.frontmatter.title}</h2>
            <p>{project.frontmatter.description}</p>
          </HeaderProeject>
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
        subtitle
        description
      }
    }
  }
`