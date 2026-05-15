import PropTypes from "prop-types"
import React from "react"

import Link from "../../link/link"

const routes = {
  publications: "/publications",
}

const Links = ({ links }) =>
  links.length > 0 && (
    <div className="about__landing-links">
      {links.map(
        link =>
          routes[link] && (
            <Link buttonStyle key={link} nav to={routes[link]}>
              {link}
            </Link>
          )
      )}
    </div>
  )

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Links
