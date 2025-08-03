import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer
      className={`footer4-footer7 thq-section-padding ${props.rootClassName} `}
    >
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-container1">
          <div className="footer4-content">
            <div className="footer4-logo1">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="footer4-logo2"
              />
            </div>
          </div>
          <span>
            {props.text ?? (
              <Fragment>
                <span className="footer4-text8">GREATUS</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container2">
              <span className="thq-body-small">© 2024 Greatus Pty Ltd</span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text3 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text9">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text7">Terms of Service</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text6">Cookies Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  logoSrc: '/logo-square-200h.gif',
  cookiesLink: undefined,
  rootClassName: '',
  termsLink: undefined,
  text: undefined,
  logoAlt: 'Greatus Logo',
  privacyLink: undefined,
}

Footer4.propTypes = {
  logoSrc: PropTypes.string,
  cookiesLink: PropTypes.element,
  rootClassName: PropTypes.string,
  termsLink: PropTypes.element,
  text: PropTypes.element,
  logoAlt: PropTypes.string,
  privacyLink: PropTypes.element,
}

export default Footer4
