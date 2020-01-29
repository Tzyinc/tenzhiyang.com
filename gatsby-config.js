require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: 'Ten\'s Thoughts',
    author: 'Ten Zhi Yang',
    description: 'Just another Dev blog',
    siteUrl: 'https://blog.tenzhiyang.com',
    social: {
      twitter: 'tzyinc',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-anywhere`,
            options: {
              staticDir: 'static',
              sharpMethod: 'fluid',
              quality: 50,
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING,
      },
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ten\'s Thoughts',
        short_name: 'Ten\'s Thoughts',
        start_url: '/',
        background_color: '#F1FAEE',
        theme_color: '#1D3557',
        display: 'minimal-ui',
        icon: 'content/assets/profile-pic.jpg',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: process.env.TWITTER_API,
          consumer_secret: process.env.TWITTER_SECRET,
          bearer_token: process.env.TWITTER_BEARER_TOKEN,
        },
        queries: {
          tzyincquery: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "tzyinc",
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
          gatsbyHashtag: {
            endpoint: "search/tweets",
            params: {
              q: "#gatsbyjs",
              tweet_mode: "extended",
            },
          },
        },
      },
    },
  ],
};
