import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text8">
                  <span>{/*locale-text_DvN7dj*/}</span>
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text7">
                  <span>{/*locale-text_VShwiR*/}</span>
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <Link to="/solutions" className="hero17-text3 thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text5">
                    <span>{/*locale-text_I1R4MV*/}</span>
                  </span>
                </Fragment>
              )}
            </Link>
          </button>
          <Link to="/contact" className="hero17-button2 thq-button-outline">
            <span className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text6">
                    <span>{/*locale-text_q14r_J*/}</span>
                  </span>
                </Fragment>
              )}
            </span>
          </Link>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero17-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  action1: undefined,
  image12Src:
    'https://images.unsplash.com/photo-1631624226983-655dea38053d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDIwMTE0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  image7Alt: 'Hero Image',
  image9Src:
    'https://images.unsplash.com/photo-1643877323795-f2edf55cd33c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDIwMTE0N3w&ixlib=rb-4.1.0&q=80&w=1080',
  image2Alt: 'Hero Image',
  image5Src:
    'https://images.unsplash.com/photo-1709572375995-62a53cb88110?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDIwMTE0OHw&ixlib=rb-4.1.0&q=80&w=1080',
  image11Alt: 'Hero Image',
  action2: undefined,
  image8Src:
    'https://images.unsplash.com/photo-1646216119381-63c4ed3bf60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDIwMTE0OHw&ixlib=rb-4.1.0&q=80&w=1080',
  image12Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  image10Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1563457754158-43a343df68fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDIwMTE0OXw&ixlib=rb-4.1.0&q=80&w=1080',
  image1Alt: 'Hero Image',
  image3Alt: 'Hero Image',
  image6Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1623479322729-28b25c16b011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDIwMTE0NXw&ixlib=rb-4.1.0&q=80&w=1080',
  image11Src:
    'https://images.unsplash.com/photo-1657727534676-cac1bb160d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDIwMTE0NXw&ixlib=rb-4.1.0&q=80&w=1080',
  content1: undefined,
  heading1: undefined,
  image7Src:
    'https://images.unsplash.com/photo-1684346605835-69888f742522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDIwMTE0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1748256467077-c75ef01579aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDIwMTE0OHw&ixlib=rb-4.1.0&q=80&w=1080',
  image8Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image10Src:
    'https://images.unsplash.com/photo-1573496782646-e8d943a4bdd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDIwMTE0OHw&ixlib=rb-4.1.0&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1643877325038-f9a19083f6eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDIwMTE0NHw&ixlib=rb-4.1.0&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NDIwMTE0Nnw&ixlib=rb-4.1.0&q=80&w=1080',
}

Hero17.propTypes = {
  action1: PropTypes.element,
  image12Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.element,
  image8Src: PropTypes.string,
  image12Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image11Src: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  image7Src: PropTypes.string,
  image4Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image3Src: PropTypes.string,
  image6Src: PropTypes.string,
}

export default Hero17
