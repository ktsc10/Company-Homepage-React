import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer41.css'

const Footer41 = (props) => {
  return (
    <footer className="footer41-footer7 thq-section-padding">
      <div className="footer41-max-width thq-section-max-width">
        <div className="footer41-content">
          <div className="footer41-logo1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer41-logo2"
            />
          </div>
          <div className="footer41-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer41-text19">
                    <span>{/*locale-text_PLV1Tz*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer41-text17">
                    <span>{/*locale-text_BEGAqh*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer41-text16">
                    <span>{/*locale-text_qyKHyf*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer41-text20">
                    <span>{/*locale-text_vFjW7Z*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer41-text14">
                    <span>{/*locale-text_SOHiuD*/}</span>
                  </span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer41-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer41-row">
            <div className="footer41-container">
              <span className="thq-body-small">
                <span>{/*locale-text_Xldl-G*/}</span>
              </span>
            </div>
            <div className="footer41-footer-links">
              <span className="footer41-text11 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer41-text18">
                      <span>{/*locale-text_XBLtlT*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer41-text15">
                      <span>{/*locale-text_3X1vim*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer41-text21">
                      <span>{/*locale-text_NOjXno*/}</span>
                    </span>
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

Footer41.defaultProps = {
  logoAlt: 'Company Logo',
  link5: undefined,
  termsLink: undefined,
  link3: undefined,
  link2: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  privacyLink: undefined,
  link1: undefined,
  link4: undefined,
  cookiesLink: undefined,
}

Footer41.propTypes = {
  logoAlt: PropTypes.string,
  link5: PropTypes.element,
  termsLink: PropTypes.element,
  link3: PropTypes.element,
  link2: PropTypes.element,
  logoSrc: PropTypes.string,
  privacyLink: PropTypes.element,
  link1: PropTypes.element,
  link4: PropTypes.element,
  cookiesLink: PropTypes.element,
}

export default Footer41
