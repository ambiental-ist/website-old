import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import RowSection from "../components/RowSection"

const ArtigosPage = ({ data }) => {

  return (
    <Layout>

      <SiteMetadata title="Artigos" description="Grupo de estudantes ambientalista do Instituto Superior Técnico." />
      
      {data.article.nodes.map((element, idx )=> (
        <RowSection title={element.title}
                   thumbnail={element.thumbnail}
                   type={element.type}
                   summary={element.summary}
                   slug={element.slug}
                   isBackgroundGray={(idx % 2 === 0)}/>
      ))}
    
    </Layout>
  )

}

export default ArtigosPage


export const query = graphql`

  query ArticlesPageQuery {

    article: allContentfulArticle(sort: {fields: date, order: DESC}) {
      nodes {
        id
        slug
        title
        type
        summary
        thumbnail {
          localFile {
              childImageSharp {
                fluid(maxWidth: 960, maxHeight: 600, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
        }
      }
    },

  }
`