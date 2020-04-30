module.exports = {
  siteMetadata: {
    title: `RW`,
    author: {
      name: `Renan Wink`,
      summary: `um aprendiz da vida`,
    },
    description: `Descobrindo o universo dentro de mim.`,
    siteUrl: `https://github.com/samuelleonhardt`,
    social: {
      twitter: `Winkrenan`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-8TKTMS4RNG`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Renan Wink`,
        short_name: `RW`,
        start_url: `/`,
        background_color: `#606060`,
        theme_color: `#909090`,
        display: `minimal-ui`,
          icon: `./src/image/RW.png`,
      },
    },
    //-------------------- Title, description e keywords ---------------------
    `gatsby-plugin-react-helmet`,
    //----------------------------------------------------------------------------
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    //---------------------- FONTE DO SITE ---------------------------------------
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `600`, `700`, `900`]
          },
        ],
      },
    },
    //-----------------------IMPEDE A GERAÇÃO DE PÁGINAS-------------------------------

    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`], 
      },
    },
    //----------------------------------------------------------------------------
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    //----------------------------------------------------------------------------
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,

    //-------------------- SALVA O SITE COMO APLICATIVO --------------------------  
    `gatsby-plugin-offline`,
    //----------------------------------------------------------------------------
  ],
}
