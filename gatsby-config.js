module.exports = {
  siteMetadata: {
    title: `Thrivin Magazine`,
    name: `Thrivin`,
    siteUrl: `https://thrivin.in`,
    description: `Thrivin.in, a Publication by Kazi Ridwan.`,
    hero: {
      heading: `You. Keep Thrivin.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/kaziridwan`,
      },
      {
        name: `url`,
        url: `https://kaziridwan.com`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
