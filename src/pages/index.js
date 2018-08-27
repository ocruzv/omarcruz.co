import React from 'react'

import Layout from '../components/layout'
import SocialNetworks from '../components/social-networks'
import Contents from '../components/contents'

const IndexPage = () => (
  <Layout>
    <div style={{
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div>
        <h1 style={{
          margin: '0'
        }}>Hello! I'm <span style={{
            fontWeight: 'bolder'
          }}>Omar Cruz</span></h1>
        <p>Full stack developer | Guadalajara, Mexico</p>
        <p>I really love to write code, specially JavaScript.</p>
        <SocialNetworks />
      </div>
    </div>
    <Contents />
  </Layout>
)

export default IndexPage
