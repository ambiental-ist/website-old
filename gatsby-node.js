const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        initiative: allContentfulInitiative {
          nodes {
            slug
          }
        },
        article: allContentfulArticle {
          nodes {
            slug
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        reject(errors)
      }

      // Initiative page.
      if (data && data.initiative) {
        const component = path.resolve("./src/templates/initiative-item.jsx")
        data.initiative.nodes.map(({ slug }) => {
          createPage({
            path: `/${slug}`,
            component,
            context: { slug },
          })
        })
      }

      // Article page.
      if (data && data.article) {
        const component = path.resolve("./src/templates/article-item.jsx")
        data.article.nodes.map(({ slug }) => {
          createPage({
            path: `/${slug}`,
            component,
            context: { slug },
          })
        })
      }

      resolve()
    })
  })
}
