module.exports = {
plugins: [
  `gatsby-plugin-netlify-cms`, 
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-sass`,
  {
    resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
  }
},
`gatsby-transformer-remark`,
],
};