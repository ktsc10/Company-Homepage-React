import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div className="contact7-container1 thq-section-padding">
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content1 thq-flex-row">
          <div className="contact7-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact7-text18">
                    <span>{/*locale-text_O7saKw*/}</span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact7-text16">
                    <span>{/*locale-text_fM5vAT*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact7-content3 thq-flex-row">
          <div className="contact7-container2">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact7-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact7-text20">
                    <span>{/*locale-text_86BBMo*/}</span>
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact7-text21">
                    <span>{/*locale-text_2uNw5U*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact7-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                <span>{/*locale-text_M34Re-*/}</span>
              </a>
            </div>
          </div>
          <div className="contact7-container4">
            <img
              alt={props.location2ImgAlt}
              src={props.location2ImgSrc}
              className="contact7-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact7-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact7-text17">
                    <span>{/*locale-text_z1x8OY*/}</span>
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact7-text19">
                    <span>{/*locale-text_dDjnZu*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact7-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                <span>{/*locale-text_S5K-9p*/}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact7.defaultProps = {
  content1: undefined,
  location1ImgSrc:
    'https://images.unsplash.com/photo-1574616979112-f9f52d3747f8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGJ1Y2hhcmVzdHxlbnwwfHx8fDE3MjExNDQ1MTR8MA&ixlib=rb-4.0.3&w=1400',
  location1ImgAlt: 'Main Office Image',
  location2: undefined,
  heading1: undefined,
  location2Description: undefined,
  location1: undefined,
  location2ImgSrc:
    'https://images.unsplash.com/photo-1618826524225-439b385bb1c3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNsdWp8ZW58MHx8fHwxNzIxMTQ0NTI0fDA&ixlib=rb-4.0.3&w=1400',
  location1Description: undefined,
  location2ImgAlt: 'Customer Support Image',
}

Contact7.propTypes = {
  content1: PropTypes.element,
  location1ImgSrc: PropTypes.string,
  location1ImgAlt: PropTypes.string,
  location2: PropTypes.element,
  heading1: PropTypes.element,
  location2Description: PropTypes.element,
  location1: PropTypes.element,
  location2ImgSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location2ImgAlt: PropTypes.string,
}

export default Contact7
