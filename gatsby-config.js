module.exports = {
plugins: [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-sass`,
  `gatsby-transformer-remark`,

  {
    resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
  },
},
 {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        // modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}