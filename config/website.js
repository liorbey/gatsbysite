const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'BeyTech - NYC tutoring', // Navigation and Site Title
  siteTitleAlt: 'BeyTech', // Alternative Site title for SEO
  siteTitleShort: 'BeyTech', // short_name for manifest
  siteHeadline: 'Innovative tutoring for all ages in NYC', // Headline for schema.org JSONLD
  siteUrl: 'https://beytech.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Learning at the edge of Tech. Innovative tutoring for all ages in NYC',
  author: 'LiorBey', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '', // Twitter Username
  ogSiteName: '', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-85449233-2',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
