import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
  faGoogleScholar, 
  faLinkedin, 
  faGithub, 
  faBluesky,
  faOrcid 
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import Link from "../../link/link"
import Logo from "../../../images/logo.inline.svg"

const Links = ({ links }) => {
  const iconMap = {
    "Google Scholar": faGoogleScholar,
    "LinkedIn": faLinkedin,
    "GitHub": faGithub,
    "Bluesky": faBluesky,
    "ORCID": faOrcid,
    "Email": faEnvelope,
  }

  return (
    <div className="footer__links">
      <ul>
        {links.map(link => {
          const icon = iconMap[link.text]
          
          return (
            <li key={link.text}>
              <Link to={link.link} aria-label={link.text}>
                {icon ? (
                  <FontAwesomeIcon 
                    icon={icon} 
                    title={link.text}
                    size="xl" 
                  />
                ) : (
                  link.text
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Links.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
}

export default Links