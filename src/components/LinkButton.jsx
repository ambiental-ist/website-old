import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const LinkButton = ({ to, text }) => {
  const className =
    "inline-block px-5 py-3 font-medium leading-snug border border-transparent text-base rounded-md text-white background-green-color focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"

  return (
    <Link to={`/${to}`} className={className}>{text}</Link>
  )

}

LinkButton.propTypes = {
  to: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
}

export default LinkButton
