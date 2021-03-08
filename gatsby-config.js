require("dotenv").config()

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    menu: [
      { name: "Início", to: "/" },
      { name: "Sobre nós", to: "/sobre" },
      { name: "Iniciativas", to: "/iniciativas" },
      { name: "Artigos", to: "/artigos" },
      { name: "Carta Aberta", to: "/carta-aberta" },
    ],
    links: {
      facebook: "https://www.facebook.com/ambientalist.tecnico",
      instagram: "https://www.instagram.com/ambiental.ist/",
      linkedin: "https://www.linkedin.com/company/ambientalist",
      mail: "mailto:ambientalist.sa@aeist.pt",
    },
    locale: "pt",
    title: `Ambientalist`,
    description: `Durante anos, o planeta chamou por nós, receou por nós, pediu-nos para que o escutássemos e nos sincronizássemos com ele, com a Natureza. Hoje, já não é apenas um pedido, mas uma necessidade, uma missão. Começando pela nossa universidade, o Instituto Superior Técnico, procuramos promover a adoção de comportamentos responsáveis e hábitos sustentáveis, que protejam o futuro da humanidade e do nosso planeta. Estás pronto para te juntares a nós?`,
    author: `@ambientalist`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    //{
    //  resolve: "gatsby-plugin-mailchimp",
    //  options: {
    //    endpoint: process.env.MAILCHIMP_ENDPOINT,
    //  },
    //},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AmbientalIST`,
        short_name: `ambientalist`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
