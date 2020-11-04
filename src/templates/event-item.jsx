import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Button from "../components/Button"
import Cards from "../components/Cards"
import Carousel from "../components/Carousel"
import Newsletter from "../components/Newsletter"
import Layout from "../layouts/Layout"

export default props => {
  const {
    title,
    date,
    thumbnail,
    author,
    type,
    text
  } = props.data.item

  return (
    <Layout>
      <SiteMetadata
        title={title}
        image={thumbnail.localFile.publicURL}
      />
      <div className="bg-gray-100 py-12 lg:py-16">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3 pb-8">
                <Img
                    fluid={thumbnail.localFile.childImageSharp.fluid}
                    alt={title}
                />
            </div>
            <div className="w-full lg:w-1/3 lg:pl-8 xl:pl-12">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-1">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`

  fragment Event on ContentfulEvent {
    id
    slug
    title
    thumbnail {
      localFile {
        childImageSharp {
            fluid(maxWidth: 444, maxHeight: 342, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
        }
      }
    }
  }

  query EventItemQuery($slug: String!) {
    item: contentfulEvent(slug: { eq: $slug }) {
      id
      title
      date
      thumbnail {
        localFile {
            childImageSharp {
              fluid(maxWidth: 960, maxHeight: 600, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
      }
      author
      type
      text {
        text
        id
      }
    }
  }
`
