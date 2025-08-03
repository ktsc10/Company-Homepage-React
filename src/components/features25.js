import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <h1 className="features25-text1 thq-heading-1">
        {props.heading11 ?? (
          <Fragment>
            <span className="features25-text7">
              <span>{/*locale-text_K0pPxa*/}</span>
            </span>
          </Fragment>
        )}
      </h1>
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features25-text2">
                      <span>{/*locale-text_wV3-6-*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text8">
                      <span>{/*locale-text_Poi7U2*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features25-text3">
                      <span>{/*locale-text_r1kF2d*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text5">
                      <span>{/*locale-text_xc1C4P*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features25-text6">
                      <span>{/*locale-text_82wqmv*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text4">
                      <span>{/*locale-text_lxScXo*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1607706189992-eae578626c86?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHxkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwwfHx8fDE3NTQyMDg0ODl8MA&ixlib=rb-4.1.0&w=1400',
  feature1Title: undefined,
  feature2Title: undefined,
  feature3Description: undefined,
  feature1ImgAlt: 'IT Infrastructure Design and Implementation Image',
  feature2Description: undefined,
  feature3ImgAlt: 'Cybersecurity Image',
  rootClassName: '',
  feature2ImgAlt: 'Software Development Image',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1551703599-2a53f65da7e7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY4fHxuZXR3b3JrfGVufDB8fHx8MTc1NDIwODM3Mnww&ixlib=rb-4.1.0&w=1400',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1719253479576-46c24a216c54?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGhhY2tpbmd8ZW58MHx8fHwxNzU0MjA4OTg4fDA&ixlib=rb-4.1.0&w=1400',
  feature3Title: undefined,
  heading11: undefined,
  feature1Description: undefined,
}

Features25.propTypes = {
  feature2ImgSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  heading11: PropTypes.element,
  feature1Description: PropTypes.element,
}

export default Features25
