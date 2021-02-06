import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import RowSection from "../components/RowSection"

const IndexPage = ({ data }) => {

  return (
    <Layout>

      <SiteMetadata title="Iniciativas" description="Grupo de estudantes ambientalista do Instituto Superior Técnico." />

      <div className="bg-gray-100">
        <div className="container py-12 lg:pb-16">
          <div className="flex flex-wrap">

            <div className="w-full pb-12">
              <h1 className="text-3xl leading-tight text-center font-extrabold tracking-tight text-gray-800 sm:text-4xl">
                Iniciativas
              </h1>
            </div>

            <div className="w-full md:w-1/3 pb-8 pt-2 md:pb-0 md:px-5">
              <h2 className="text-xl text-center leading-tight font-semibold tracking-tight text-gray-800 sm:text-2xl">
                Webinars
              </h2>
              <div className="mt-4 text-gray-800 text-center leading-loose">
                Realização de palestras online relacionadas com a temática ambientalista.
              </div>
            </div>
            
            <div className="w-full md:w-1/3 pb-8 md:pb-0 md:px-5">
              <h2 className="text-xl text-center leading-tight font-semibold tracking-tight text-gray-800 sm:text-2xl">
                Glossário climático
              </h2>
              <div className="mt-4 text-gray-800 text-center leading-loose">
                Especialistas explicam diversos conceitos de ciência climática.
              </div>
            </div>

            <div className="w-full md:w-1/3 pb-8 md:pb-0 md:px-5">
              <h2 className="text-xl text-center leading-tight font-semibold tracking-tight text-gray-800 sm:text-2xl">
                Eventos
              </h2>
              <div className="mt-4 text-gray-800 text-center leading-loose">
                Organização e participação em variados eventos, como greves climáticas.
              </div>
            </div>

            <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            </div>
          </div>
        </div>
      </div>
      
      {data.initiative.nodes.map((element, idx )=> (
        <RowSection title={element.title}
                   thumbnail={element.thumbnail}
                   type={element.type}
                   summary={element.summary}
                   slug={element.slug}
                   isBackgroundGray={(idx % 2 === 1)}/>
      ))}
    
    </Layout>
  )

}

export default IndexPage


export const query = graphql`

  query InitiativesPageQuery {

    initiative: allContentfulInitiative(sort: {fields: date, order: DESC}) {
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