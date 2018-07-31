const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const projectTemplate = path.resolve('src/templates/project.js');  

  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            subtitle
            description
            notetitle
            cover_image {
              childImageSharp {
                resolutions(width: 400) {
                  width
                  height
                  src
                  srcSet
                }
              }
            }
            
          }
        }
      }
    }
  }`)
  .then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: projectTemplate
      })
    })

  })
}