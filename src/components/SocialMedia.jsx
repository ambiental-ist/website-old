import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const SocialMedia = () => {
  const {
    site: {
      meta: { links },
    },
  } = useStaticQuery(graphql`
    query SocialMediaQuery {
      site {
        meta: siteMetadata {
          links {
            facebook
            instagram
            mail
          }
        }
      }
    }
  `)

  return (
    <div className="flex flex-wrap">

      {/* Header. */}
      <div className="w-full pb-12">
        <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-800 sm:text-4xl">
          Redes sociais
        </h1>
      </div>

      {/* Instagram icon. */}
      <div className="w-full md:w-1/3 pb-8 pt-2 md:pb-0 md:px-5">
        <div className="flex justify-center pb-5">
          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-500 text-green-color-hover transition duration-150 ease-in-out"
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram className=" w-10 h-10 fill-current" />
          </a>
        </div>

        <h2 className="text-xl text-center leading-tight font-semibold tracking-tight text-gray-800 sm:text-2xl">
          Instagram
        </h2>
        <div className=" text-gray-800 text-center leading-loose">
          @ambiental.ist
        </div>
      </div>

      {/* Facebook icon. */}
      <div className="w-full md:w-1/3 pb-8 md:pb-0 md:px-5">
        <div className="flex justify-center pb-5">
          <a
            href={links.facebook}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-500 text-green-color-hover transition duration-150 ease-in-out"
          >
            <span className="sr-only">Facebook</span>
            <FaFacebook className=" w-10 h-10 fill-current" />
          </a>
        </div>
        <h2 className="text-xl text-center leading-tight font-semibold tracking-tight text-gray-800 sm:text-2xl">
          Facebook
        </h2>
        <div className="text-gray-800 text-center leading-loose">
          @ambientalist.tecnico 
        </div>
      </div>

      {/* LinkedIn icon. */}
      <div className="w-full md:w-1/3 pb-8 md:pb-0 md:px-5">
        <div className="flex justify-center pb-5">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-500 text-green-color-hover transition duration-150 ease-in-out"
          >
            <span className="sr-only">Linkedin</span>
            <FaLinkedin className=" w-10 h-10 fill-current" />
          </a>
        </div>
        <h2 className="text-xl text-center leading-tight font-semibold tracking-tight text-gray-800 sm:text-2xl">
          LinkedIn
        </h2>
        <div className="text-gray-800 text-center leading-loose">
          ambientalist
        </div>
      </div>

    </div>
  )
}

export default SocialMedia
