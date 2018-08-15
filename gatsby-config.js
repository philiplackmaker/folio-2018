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
      `gatsby-plugin-sharp`,
    
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages`,
          name: 'pages',
        },
      },
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
            {
              resolve: 'gatsby-remark-emojis',
              options: {
                // Deactivate the plugin globally (default: true)
                active: true,
                // Add a custom css class
                class: 'emoji-icon',
                // Select the size (available size: 16, 24, 32, 64)
                size: 64,
                // Add custom styles
                styles: {
                  display: 'inline',
                  margin: '0',
                  'margin-top': '1px',
                  position: 'relative',
                  top: '5px',
                  width: '25px',
                },
              },
            },
            'gatsby-remark-static-images',
            'gatsby-remark-copy-linked-files',

          ],
        },
      },
      
    ],
  }