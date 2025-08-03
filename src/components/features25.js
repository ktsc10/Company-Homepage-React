import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <h1 className="features25-text1 thq-heading-1">
        {props.heading1 ?? (
          <Fragment>
            <span className="features25-text6">Our Solutions</span>
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
                    <span className="features25-text5">
                      IT Infrastructure Implementation
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text8">
                      Expertise in designing and implementing robust IT
                      infrastructures tailored to meet specific business needs.
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
                    <span className="features25-text2">
                      Software Development
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text4">
                      Custom software development services to enhance
                      operational efficiency and drive business growth.
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
                    <span className="features25-text3">
                      Cybersecurity Solutions
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text7">
                      Comprehensive cybersecurity solutions to protect data,
                      systems, and networks from potential threats.
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
  feature2Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1614064548237-096f735f344f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc1NDIwODk3OHww&ixlib=rb-4.1.0&w=1400',
  feature3Title: undefined,
  feature2Description: undefined,
  rootClassName: '',
  feature1ImgAlt: 'IT Infrastructure Design and Implementation Image',
  feature1Title: undefined,
  heading1: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1557562645-4eee56b29bc1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY1fHxhcHBsaWNhdGlvbiUyMGNvZGluZ3xlbnwwfHx8fDE3NTQyMTg2MzV8MA&ixlib=rb-4.1.0&w=1400',
  feature2ImgAlt: 'Software Development Image',
  feature3Description: undefined,
  feature3ImgAlt: 'Cybersecurity Image',
  feature1Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1691435828932-911a7801adfb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fG5ldHdvcmslMjBzZXJ2ZXJ8ZW58MHx8fHwxNzU0MjE4NDIxfDA&ixlib=rb-4.1.0&w=1400',
}

Features25.propTypes = {
  feature2Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2Description: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  heading1: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
}

export default Features25
