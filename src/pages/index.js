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
              <h1 style={{ textShadow: '2px 2px rgb(208, 199, 207) ' }}>
                saath <code>AI</code>
              </h1>
              <hr className="type_2" />
              <h2>
                Providing <code>AI as a Service</code>
              </h2>
              <hr className="styled" />

              <h3 className="_typed">
                <Typed
                  strings={['AI is for everyone ', 'And we make it available']}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                  smartBackSpace
                />
              </h3>
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
                the <code>Team</code>
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
