import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              <span>{/*locale-text_3QOFVm*/}</span>
            </h2>
            <p className="thq-body-large">
              <span>{/*locale-text_trjGoS*/}</span>
            </p>
            <div className="steps2-actions">
              <button className="thq-button-filled thq-button-animated steps2-button">
                <span className="thq-body-small">
                  <span>{/*locale-text_RQXjK_*/}</span>
                </span>
              </button>
            </div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text28">
                      <span>{/*locale-text_Nx37ek*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text14 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text27">
                      <span>{/*locale-text_4-efqb*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text15 thq-heading-3">
                <span>{/*locale-text_FpSUvJ*/}</span>
              </label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text31">
                      <span>{/*locale-text_F_U0My*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text17 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text30">
                      <span>{/*locale-text_2u8CEi*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text18 thq-heading-3">
                <span>{/*locale-text_U14q7w*/}</span>
              </label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text26">
                      <span>{/*locale-text_BINQr3*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text20 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text29">
                      <span>{/*locale-text_VEISrv*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text21 thq-heading-3">
                <span>{/*locale-text_M1cXqw*/}</span>
              </label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text32">
                      <span>{/*locale-text_lSy60p*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text23 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text25">
                      <span>{/*locale-text_vBLres*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text24 thq-heading-3">
                <span>{/*locale-text_Bw5pqK*/}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step4Description: undefined,
  step3Title: undefined,
  step1Description: undefined,
  step1Title: undefined,
  step3Description: undefined,
  step2Description: undefined,
  step2Title: undefined,
  step4Title: undefined,
}

Steps2.propTypes = {
  step4Description: PropTypes.element,
  step3Title: PropTypes.element,
  step1Description: PropTypes.element,
  step1Title: PropTypes.element,
  step3Description: PropTypes.element,
  step2Description: PropTypes.element,
  step2Title: PropTypes.element,
  step4Title: PropTypes.element,
}

export default Steps2
