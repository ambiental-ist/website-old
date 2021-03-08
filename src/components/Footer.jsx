import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaFacebook, FaInstagram, FaRegEnvelope, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  const {
    site: {
      meta: { links },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          links {
            facebook
            instagram
            linkedin
            mail
          }
        }
      }
    }
  `)

  return (
    <div className="container py-12 md:flex md:items-center md:justify-between">
      <ul className="flex justify-center md:order-2">
        <FooterLink href={links.instagram} icon={FaInstagram} label="Instagram" isFirst={true}/>
        <FooterLink href={links.facebook} icon={FaFacebook} label="Facebook" isFirst={false}/>
        <FooterLink href={links.linkedin} icon={FaLinkedin} label="LinkedIn" isFirst={false}/>
        <FooterLink href={links.mail} icon={FaRegEnvelope} label="Mail" isFirst={false}/>
      </ul>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-sm md:text-base text-gray-500">
          &copy; 2021 AmbientalIST. Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}

const FooterLink = ({ href, label, icon: Icon , isFirst}) => {
  return (
    <li className={`inline-block ${isFirst ? "" : "pl-6"}`}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-500 text-green-color-hover transition duration-150 ease-in-out"
      >
        <span className="sr-only">{label}</span>
        <Icon className="w-5 h-5 fill-current" />
      </a>
    </li>
  )
}

export default Footer
