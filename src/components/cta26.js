import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span className="thq-heading-2">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text5">
                        <span>{/*locale-text_Yj5Ybn*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <p className="thq-body-large">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="cta26-text4">
                        <span>{/*locale-text_FOeizN*/}</span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="thq-button-filled cta26-button"
                >
                  <Link to="/contact" className="cta26-navlink">
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta26-text3">
                          <span>{/*locale-text_UUqErt*/}</span>
                        </span>
                      </Fragment>
                    )}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  action1: undefined,
  content1: undefined,
  heading1: undefined,
}

CTA26.propTypes = {
  action1: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default CTA26
