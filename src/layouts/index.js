import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'

import 'bootstrap/dist/css/bootstrap.min.css'
import Particles from 'react-particles-js'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="Saath.ai"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      <Header />
    </div>
    <Particles
      params={{
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#000000',
          },
          shape: {
            type: ['circle', 'triangle'],
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
          },

          size: {
            value: 7,
            random: true,
            anim: {
              enable: false,
              speed: 80,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#000000',
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },

        retina_detect: true,
      }}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        filter: ' blur(1.5px)',
      }}
    />
    <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
