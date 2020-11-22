import { graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"

import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"
import Cards from "../components/Cards"

const IndexPage = ({ data }) => {
  return (
    <Layout>

      <SiteMetadata title="Início" description="Grupo de estudantes do Instituto Superior Técnico." />

      {/* Home page banner. */}
      <div className="bg-gray-100">
        <div className="container py-12 lg:pb-16">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Grupo de estudantes <span className="text-green-color">ambientalista</span> do Instituto Superior Técnico.
              </h1>
              <div className="mt-4 leading-loose">
              Durante anos, o planeta chamou por nós, receou por nós, pediu-nos para que o escutássemos e nos sincronizássemos com ele, com a Natureza. Hoje, já não é apenas um pedido, mas uma necessidade, uma missão. Começando pela nossa universidade, o Instituto Superior Técnico, procuramos promover a adoção de comportamentos responsáveis e hábitos sustentáveis, que protejam o futuro da humanidade e do nosso planeta. Estás pronto para te juntares a nós?
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
              <Img
                fluid={data.home_page_photo.childImageSharp.fluid}
                alt="HomePhoto"
                className="rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Events cards section. */}
      <div className="bg-gray-0 py-12 lg:py-16">
        <div className="container">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl pb-2">
            Eventos
          </h1>
          {data.event && data.event.nodes.length > 0 ? (
            <Cards items={data.event.nodes} />
          ) : (
            <div className="container">No events found.</div>
          )}
        </div>
      </div>

      {/* Interviews cards section. 
      <div className="bg-gray-100 py-12 lg:py-16">
        <div className="container">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl pb-2">
            Entrevistas
          </h1>
          {data.event && data.event.nodes.length > 0 ? (
            <Cards items={data.event.nodes} />
          ) : (
            <div className="container">No projects found.</div>
          )}
        </div>
      </div> */}

      {/*<Newsletter />*/}

    </Layout>
  )
}

export default IndexPage

export const query = graphql`

  query HomeQuery {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    },

    event: allContentfulEvent(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        ...EventCard
      }
    },
    
    home_page_photo: file(relativePath: { eq: "trees.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 480, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
