import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"
import RichText from "../components/RichText"
import Cards from "../components/Cards"


export default props => {
  const {
    title,
    date,
    thumbnail,
    summary,
    author,
    type,
    text,
    related
  } = props.data.item

  return (

    <Layout>

      <SiteMetadata
        title={title}
        description={summary}
        image={thumbnail.localFile.publicURL}
      />

      {/* Top section. */}
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
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl mb-1">
                {title}
              </h1>
              { type &&
                <h2 className="text-xl leading-tight font-semibold tracking-tight text-gray-600 sm:text-2xl">
                  {type}
                </h2>
              }
              {author ? (
                <h5 className="mt-1 text-sm leading-tight tracking-tight text-gray-600">
                  {author} · {date}
                </h5>
              ) : (
                <h5 className="mt-1 text-sm leading-tight tracking-tight text-gray-600">
                  {date}
                </h5>
              )}
              <div className="my-4 text-base text-gray-600 whitespace-pre-line">
                {summary}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rich text section. */}
      <div className="bg-gray-0 py-12 lg:py-16">
        <div className="container">
          <div className="flex justify-center flex-wrap">
            <div className="max-w-2xl pb-8">

              <RichText text={text}/>

            </div>
          </div>
        </div>
      </div>

      {/* Related section. */}
      {related && (
        <div className="bg-gray-100 py-12 lg:py-16">
          <div className="container">
            <h2 className="text-3xl sm:text-4xl leading-tight font-extrabold tracking-tight text-gray-800 mb-8">
              Ver mais
            </h2>
            <Cards items={related} hideLastItemOnMobile={true} />
          </div>
        </div>
      )}


    </Layout>
  )

}

export const query = graphql`

  fragment InitiativeCard on ContentfulInitiative {
    id
    slug
    title
    type
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

  query InitiativeItemQuery($slug: String!) {
    item: contentfulInitiative(slug: { eq: $slug }) {
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
      summary
      type
      text {
        raw
      }
      related {
        ... on ContentfulArticle {
          ...ArticleCard
        }
        ... on ContentfulInitiative {
          ...InitiativeCard
        }
      }

    }
  }
`
