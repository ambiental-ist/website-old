import { graphql, Link } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Button from "../components/Button"
import LinkButton from "../components/LinkButton"
import Layout from "../layouts/Layout"
import Img from "gatsby-image"
// import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Eventos" description="Grupo de estudantes do Instituto Superior Técnico." />
      
      <div className="bg-gray-100">
        <div className="container py-12 lg:pb-16">

          <div className="flex flex-wrap">


            <div className="w-full lg:w-2/3 pb-8">
              <Img fluid={data.event.nodes[1].thumbnail.localFile.childImageSharp.fluid} alt={data.event.nodes[1].title} />
            </div>
            <div className="w-full lg:w-1/3 lg:pl-8 xl:pl-12">

              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-1">
                {data.event.nodes[1].title}
              </h1>
              { data.event.nodes[1].type &&
                <h2 className="text-xl leading-tight font-semibold tracking-tight text-gray-600 sm:text-2xl">
                  {data.event.nodes[1].type}
                </h2>
              }
              <div className="my-4 text-base text-gray-600 whitespace-pre-line">
                {data.event.nodes[1].summary}
              </div>
              
              <div className="mt-8">
                <LinkButton to={data.event.nodes[1].slug} text='Saber mais!'/>
              </div>

            </div>



          </div>
        </div>
      </div>
    
    </Layout>
  )
}

export default IndexPage


export const query = graphql`

  query EventsPageQuery {

    event: allContentfulEvent(sort: {fields: date, order: DESC}, limit: 3) {
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