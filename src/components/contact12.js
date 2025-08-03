import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact12.css'

const Contact12 = (props) => {
  return (
    <div
      className={`contact12-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="contact12-max-width thq-section-max-width">
        <div className="contact12-content1 thq-flex-row">
          <div className="contact12-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact12-text7">
                    <span>{/*locale-text_pGOVxf*/}</span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact12-text8">
                    <span>{/*locale-text_q2AvF5*/}</span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="contact12-content3">
            <div className="contact12-content4">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="contact12-contact-info1">
                <h3 className="contact12-text3 thq-heading-3">
                  <span>{/*locale-text_OxsflX*/}</span>
                </h3>
                <span className="thq-body-small">
                  {props.email1 ?? (
                    <Fragment>
                      <span className="contact12-text5">
                        <span>{/*locale-text_qGVH7F*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="contact12-content5">
              <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
              <div className="contact12-contact-info2">
                <h3 className="contact12-text4 thq-heading-3">
                  <span>{/*locale-text_5SPz2L*/}</span>
                </h3>
                <span className="thq-body-small">
                  {props.address1 ?? (
                    <Fragment>
                      <span className="contact12-text6">
                        <span>{/*locale-text_5KjOem*/}</span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13242.381949639272!2d151.2067077!3d-33.8382862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aef2a692abb9%3A0x7944438a81178a21!2s141%20Walker%20St%2C%20North%20Sydney%20NSW%202060%2C%20Australia!5e0!3m2!1sen!2ssg!4v1694603658137!5m2!1sen!2ssg"
          width="100%"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
          className="contact12-iframe"
        ></iframe>
      </div>
    </div>
  )
}

Contact12.defaultProps = {
  email1: undefined,
  address1: undefined,
  heading1: undefined,
  content1: undefined,
  rootClassName: '',
}

Contact12.propTypes = {
  email1: PropTypes.element,
  address1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Contact12
