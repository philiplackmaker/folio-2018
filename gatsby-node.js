const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions


  return graphql(`
    {
    allMarkdownRemark {
      edges {
        node {
          html
          id

          frontmatter {
            path
            templateKey 
          }
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.frontmatter.path,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })}