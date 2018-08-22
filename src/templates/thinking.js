import React from 'react';
import Navigation from '../components/navigation';
import styled from "styled-components";
import '../pages/fonts.css';
import * as Base from '../style/base';
import '../style/globals';
import { graphql } from 'gatsby';
import FooterEverything from '../components/footereverything';


const Container = styled.div`
${Base.GRID};
`;

const Heaader = styled.div`
grid-column: 2 / span 6;
`;

export default function Template({data}) {
  const {markdownRemark: thinking, } = data;
  return (
    <div>
        <Navigation class ="test">
        </Navigation>
          <Container>
            <Heaader>
            <h1>{thinking.frontmatter.title_thinking}</h1>

            </Heaader>
          </Container>

       <FooterEverything></FooterEverything>
    </div>
  )
}


export const thinkingQuery = graphql`
  query thinkingByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html 
      frontmatter {
        path
        title_thinking
        templateKey
      }
    }
  }
`

