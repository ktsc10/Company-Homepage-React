import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container1 thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container3 thq-flex-column">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text22">
                  <span>{/*locale-text_0tjAje*/}</span>
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats2-text27">
                  <span>{/*locale-text_ZGGB2n*/}</span>
                </span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="stats2-text28">
                  <span>{/*locale-text_yIzyHO*/}</span>
                </span>
              </Fragment>
            )}
          </p>
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats2-text21">
                      <span>{/*locale-text_iB_LNw*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text24">
                      <span>{/*locale-text_VyFZ3c*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container6">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats2-text23">
                      <span>{/*locale-text_1udcC_*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text26">
                      <span>{/*locale-text_E0MGDw*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats2-text31">
                      <span>{/*locale-text_ZFAOYc*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text30">
                      <span>{/*locale-text_oespeV*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container9">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats2-text29">
                      <span>{/*locale-text_FpA0x1*/}</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text25">
                      <span>{/*locale-text_dTgJh8*/}</span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  stat1: undefined,
  content1: undefined,
  stat2: undefined,
  stat1Description: undefined,
  stat4Description: undefined,
  image1Alt: 'Active Users Graph',
  stat2Description: undefined,
  heading1: undefined,
  content2: undefined,
  stat4: undefined,
  stat3Description: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxzdGF0aXN0aWNzfGVufDB8fHx8MTcxNjUzNjcxNXww&ixlib=rb-4.0.3&w=700',
  stat3: undefined,
}

Stats2.propTypes = {
  stat1: PropTypes.element,
  content1: PropTypes.element,
  stat2: PropTypes.element,
  stat1Description: PropTypes.element,
  stat4Description: PropTypes.element,
  image1Alt: PropTypes.string,
  stat2Description: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  stat4: PropTypes.element,
  stat3Description: PropTypes.element,
  image1Src: PropTypes.string,
  stat3: PropTypes.element,
}

export default Stats2
