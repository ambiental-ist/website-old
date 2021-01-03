import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import LinkButton from "../components/LinkButton"

const RowSection = ({ title, thumbnail, type, summary, slug, isBackgroundGray }) => {

  return (

    <div className={`${ isBackgroundGray ? "bg-gray-100" : "bg-gray-0" }`}>
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 pb-8">
            <Img fluid={thumbnail.localFile.childImageSharp.fluid} alt={title} />
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
            <div className="my-4 text-base text-gray-600 whitespace-pre-line">
              {summary}
            </div>
            <div className="mt-8">
              <LinkButton to={slug} text='Saber mais!'/>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

RowSection.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    localFile: PropTypes.object,
  }),
  type: PropTypes.string,
  summary: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  isBackgroundGray: PropTypes.bool.isRequired,
}

RowSection.defaultProps = {
  type: null,
}

export default RowSection
