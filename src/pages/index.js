import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"
import Cards from "../components/Cards"

import BackgroundSection from "../components/BackgroundSection"
import LinkButton from "../components/LinkButton"


const IndexPage = ({ data }) => {

  return (
    <Layout>

      <SiteMetadata title="Início" description="Grupo de estudantes ambientalista do Instituto Superior Técnico." />

      {/* Home page banner. */}
      <div className="bg-gray-100">
        <div className="container py-12 lg:pb-16">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 xl:w-3/5 pb-8 lg:pb-0">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl">
              Grupo de estudantes ambientalista do Instituto Superior Técnico.
              </h1>
              <div className="mt-4 leading-loose text-gray-800">
              Durante anos, o planeta chamou por nós, receou por nós, pediu-nos para que o escutássemos e nos sincronizássemos com ele, com a Natureza. Hoje, já não é apenas um pedido, mas uma necessidade, uma missão. Começando pela nossa universidade, o Instituto Superior Técnico, procuramos promover a adoção de comportamentos responsáveis que protejam o planeta. Queremos unir os estudantes por uma luta comum, a proteção do nosso futuro e do nosso clima. Estás pronto para te juntares a nós?
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-2/5 lg:pl-12">
              <Img
                fluid={data.home_page_photo.childImageSharp.fluid}
                alt="HomePhoto"
                className="rounded-lg shadow-lg filter-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Carta aberta section. */}
      <BackgroundSection>
        <div className="container py-12 lg:py-16 text-center">
          <h1 className="pb-12 text-3xl text-center leading-tight font-extrabold tracking-tight text-white sm:text-4xl pb-2">
            Carta Aberta do Ensino Superior pelo Clima
          </h1>
          <LinkButton to='carta-aberta' text='Sabe mais e assina!'/>
        </div>
      </BackgroundSection>

      {/* Initiatives cards section. */}
      <div className="bg-gray-0 py-12 lg:py-16">
        <div className="container">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl pb-2">
            Iniciativas
          </h1>
          {data.initiative && data.initiative.nodes.length > 0 ? (
            <Cards items={data.initiative.nodes} />
          ) : (
            <div className="container">No Initiatives found.</div>
          )}
        </div>
      </div>

      {/* Articles cards section. */ }
      <div className="bg-gray-100 py-12 lg:py-16">
        <div className="container">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl pb-2">
            Artigos
          </h1>
          {data.article && data.article.nodes.length > 0 ? (
            <Cards items={data.article.nodes} />
          ) : (
            <div className="container">No articles found.</div>
          )}
        </div>
      </div>

      {/*<Newsletter />*/}

    </Layout>
  )

}

export default IndexPage

export const query = graphql`

  query HomeQuery {

    initiative: allContentfulInitiative(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        ...InitiativeCard
      }
    },

    article: allContentfulArticle(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        ...ArticleCard
      }
    },
    
    home_page_photo: file(relativePath: { eq: "trees.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

  }
`
