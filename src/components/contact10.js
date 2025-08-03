import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text8">
                    <span>{/*locale-text_-a-VJ_*/}</span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text7">
                    <span>{/*locale-text_22chjj*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3 className="contact10-text3 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text5">
                    <span>{/*locale-text_nB-JtV*/}</span>
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text6">
                    <span>{/*locale-text_-5oOSy*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                <span>{/*locale-text_8p1_EN*/}</span>
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                <span>{/*locale-text_MhPvV0*/}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1ImageSrc:
    'https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDIwMTE0NXw&ixlib=rb-4.1.0&q=80&w=1080',
  location1: undefined,
  location1Description: undefined,
  location1ImageAlt: 'Greatus Headquarters Image',
  content1: undefined,
  heading1: undefined,
}

Contact10.propTypes = {
  location1ImageSrc: PropTypes.string,
  location1: PropTypes.element,
  location1Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Contact10
