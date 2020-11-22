import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import EventSection from "../components/EventSection"

const IndexPage = ({ data }) => {

  return (
    <Layout>

      <SiteMetadata title="Eventos" description="Grupo de estudantes do Instituto Superior Técnico." />
      
      {data.event.nodes.map((element, idx )=> (
        <EventSection title={element.title}
                   thumbnail={element.thumbnail}
                   type={element.type}
                   summary={element.summary}
                   slug={element.slug}
                   isBackgroundGray={(idx % 2 == 0)}/>
      ))}
    
    </Layout>
  )

}

export default IndexPage


export const query = graphql`

  query EventsPageQuery {

    event: allContentfulEvent(sort: {fields: date, order: DESC}) {
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