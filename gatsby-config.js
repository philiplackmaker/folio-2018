module.exports = {
  plugins: [
    
    {
      resolve: 'gatsby-plugin-intercom-spa',
      options: {
        app_id: "d7vu7om5"
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // In your gatsby-transformer-remark plugin array
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
            },
          },
          `gatsby-remark-emoji`,
          'gatsby-remark-static-images',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    
  ],
}