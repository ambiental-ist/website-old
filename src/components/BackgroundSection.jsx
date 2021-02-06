import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ children, className}) => (
    <StaticQuery query={graphql`
      query {
        backgroundImg: file(relativePath: { eq: "carta_aberta_background.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {

       const imageData = data.backgroundImg.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
          >
            {children}
          </BackgroundImage>
       )
     }
     }
    />
)

export default BackgroundSection 