import React from 'react'

import './contents.css'

const Contents = () => (
  <div id="contents">
    <div>
      <h3>Recent Projects</h3>
      <ul>
        <li>
          <h4><a href="https://lesi.mx" target="_blank" rel="noopener noreferrer">Lesi</a></h4>
          <p className="description">Real Estate with small touches of AI.</p>
        </li>
        <li>
          <h4><a href="https://motionproject.org" target="_blank" rel="noopener noreferrer">Motion</a></h4>
          <p className="description">MasterNodes Cryptocurrency, the Kickstarter of Crypto.</p>
        </li>
      </ul>
    </div>
    <div>
      <h3>Talks</h3>
      <ul>
        <li>
          <h4><a href="https://www.youtube.com/watch?v=_doEcpTV-0o" target="_blank" rel="noopener noreferrer">Crompay - Campus Nights (Spanish)</a></h4>
          <p className="description">Teatro Diana, Guadalajara, Mexico.</p>
        </li>
        <li>
          <h4><a href="https://docs.google.com/presentation/d/18nxLk-LbpZe0kIiUEyjcSKtrDD-nw-ZwkKEaQH_csR0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Startupeando en México (Spanish)</a></h4>
          <p className="description">COPSIJAL, Guadalajara, Mexico.</p>
        </li>
      </ul>
    </div>
    <div>
      <h3>Publications</h3>
      <ul>
        <li>
          <h4><a href="https://www.penflip.com/ocruz/introduccion-a-mean" target="_blank" rel="noopener noreferrer">Introducción a MEAN(2014) (Spanish)</a></h4>
          <p className="description">Introduction to MongoDB, ExpressJS, AngularJS and NodeJS stack.</p>
        </li>
      </ul>
    </div>
  </div>
)

export default Contents