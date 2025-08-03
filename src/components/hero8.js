import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div
      className={`hero8-header26 thq-section-padding ${props.rootClassName} `}
    >
      <div className="hero8-max-width thq-flex-column thq-section-max-width">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1 className="hero8-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero8-text2">
                    <span>{/*locale-text_fBBroy*/}</span>
                  </span>
                </Fragment>
              )}
            </h1>
            <div className="hero8-actions"></div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  rootClassName: '',
  heading1: undefined,
  image1Alt: 'Image of a happy family enjoying a picnic',
  image1Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
}

Hero8.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero8
