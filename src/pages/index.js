import React from 'react'
import Link from 'gatsby-link'

import { relative } from 'path'

import Drop from 'react-icons/lib/md/expand-more'
import $ from 'jquery'
import Typed from 'react-typed'

class IndexPage extends React.Component {
  componentDidMount() {
    $('#view-work').on('click', function() {
      const block = $('#about').position().top

      $('html, body').animate(
        {
          scrollTop: block,
        },
        900
      )
    })
  }
  render() {
    return (
      <div>
        <div id="landing">
          <div id="landing-text" className="mx-auto">
            <div id="landing-text-inner" style={{ position: 'relative' }}>
              <h1>saath ai</h1>
              <hr />
              <h2>
                ~$ building <code>AI Solutions /></code>
              </h2>
              <hr />
              <h2>
                <Typed
                  strings={['to make blaa blaa blaa', 'and yes this is a test']}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </h2>
              <a href="#about" id="view-work">
                <Drop
                  size={65}
                  style={{ marginTop: '100px', marginBottom: '0px' }}
                />
              </a>
            </div>
          </div>

          {/* <div id="landing-image" /> */}
        </div>
        <div>
          <div id="about">
            <div id="header">
              <h2 className="display-4">
                we believe in advancing <code>together</code>
              </h2>
            </div>

            <div className="_blocks">
              <div className="about-block" />
            </div>
          </div>
          <div id="services">
            <div id="header">
              <h2 className="display-4">
                we believe in advancing <code>together</code>
              </h2>
            </div>

            <div className="_blocks">
              <div className="about-block" />
            </div>
          </div>
          <div id="work">
            <div id="header">
              <h2 className="display-4">
                we believe in advancing <code>together</code>
              </h2>
            </div>

            <div className="_blocks">
              <div className="about-block" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage
