import React from 'react'
import { IconContext } from 'react-icons'
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa'

import './social-networks.css'

const SocialNetworks = () => (
  <div id="social">
    <IconContext.Provider value={{ size: "2em" }}>
      <ul>
        <li><a href="https://github.com/ocruzv" title="Github" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/ocruzv/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
        <li><a href="https://twitter.com/soyocruz/" title="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
        <li><a href="https://medium.com/@ocruzvar" title="Medium" target="_blank" rel="noopener noreferrer"><FaMedium /></a></li>
      </ul>
    </IconContext.Provider>
  </div>
)

export default SocialNetworks