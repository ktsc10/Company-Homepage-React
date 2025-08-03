import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer
      className={`footer4-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-container1">
          <div className="footer4-container2">
            <div className="footer4-container3">
              <div className="footer4-content">
                <div className="footer4-logo">
                  <img
                    alt={props.imageAlt}
                    src={props.imageSrc}
                    className="footer4-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <span className="footer4-text1">
            {props.text ?? (
              <Fragment>
                <span className="footer4-text9">
                  <span>{/*locale-text_NXvBHz*/}</span>
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container4">
              <span className="thq-body-small">
                <span>{/*locale-text_LP2FeD*/}</span>
              </span>
            </div>
            <div className="footer4-footer-links">
              <Link to="/solutions" className="footer4-text3 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text8">
                      <span>{/*locale-text_i5MBT9*/}</span>
                    </span>
                  </Fragment>
                )}
              </Link>
              <Link to="/solutions" className="footer4-text4 thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text7">
                      <span>{/*locale-text_VZ_31I*/}</span>
                    </span>
                  </Fragment>
                )}
              </Link>
              <Link to="/solutions" className="footer4-text5 thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text6">
                      <span>{/*locale-text_d5_K5V*/}</span>
                    </span>
                  </Fragment>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  cookiesLink: undefined,
  rootClassName: '',
  termsLink: undefined,
  privacyLink: undefined,
  imageAlt: 'image',
  text: undefined,
  imageSrc: '/logo-square-200h.jpg',
}

Footer4.propTypes = {
  cookiesLink: PropTypes.element,
  rootClassName: PropTypes.string,
  termsLink: PropTypes.element,
  privacyLink: PropTypes.element,
  imageAlt: PropTypes.string,
  text: PropTypes.element,
  imageSrc: PropTypes.string,
}

export default Footer4
