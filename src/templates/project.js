import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '../components/navigation';


export default function Template({data}) {
  debugger;
  const {markdownRemark: project} = data;
//   const project = data.markdownRemark;
  return (
 
    <div>
        <Navigation>
        </Navigation>
      <h1>{project.frontmatter.title}</h1>
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