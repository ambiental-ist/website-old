import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"

import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, INLINES} from '@contentful/rich-text-types';


const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <h2 className='text-xl leading-tight font-semibold tracking-tight sm:text-2xl pt-5'>{children}</h2>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className='text-xl leading-tight font-semibold tracking-tight sm:text-2xl pt-5'>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h2 className='text-xl leading-tight font-semibold tracking-tight sm:text-2xl pt-5'>{children}</h2>,
    [BLOCKS.HEADING_4]: (node, children) => <h2 className='text-xl leading-tight font-semibold tracking-tight sm:text-2xl pt-5'>{children}</h2>,
    [BLOCKS.HEADING_5]: (node, children) => <h2 className='text-xl leading-tight font-semibold tracking-tight sm:text-2xl pt-5'>{children}</h2>,
    [BLOCKS.HEADING_6]: (node, children) => <h2 className='text-xl leading-tight font-semibold tracking-tight sm:text-2xl pt-5'>{children}</h2>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className='list-disc pl-8'>{children}</ul>,
    [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} className='font-bold'>{children}</a>,
  }
};


export default props => {
  const {
    title,
    date,
    thumbnail,
    summary,
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

      <div className="bg-gray-0 py-12 lg:py-16">
        <div className="container">
          <div className="flex justify-center flex-wrap">
            <div className="max-w-2xl pb-8">
              <div className="mt-4 leading-loose">
                {renderRichText(text, options)}
              </div>
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
      summary
      author
      type
      text {
        raw
      }
    }
  }
`
