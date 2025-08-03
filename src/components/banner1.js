import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div className="banner1-container1 thq-section-padding">
      <h2 className="banner1-title thq-heading-2">
        {props.heading1 ?? (
          <Fragment>
            <span className="banner1-text">
              <span>{/*locale-text_t2s4Wa*/}</span>
            </span>
          </Fragment>
        )}
      </h2>
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container2"></div>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  heading1: undefined,
}

Banner1.propTypes = {
  heading1: PropTypes.element,
}

export default Banner1
