import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Contact12 from '../components/contact12'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Company Homepage</title>
        <meta property="og:title" content="Company Homepage" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">
              <span>{/*locale-text_ZhW6gD*/}</span>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">
              <span>{/*locale-text_md8QjB*/}</span>
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">
              <span>{/*locale-text_zByxLY*/}</span>
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">
              <span>{/*locale-text_eL3T9x*/}</span>
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">
              <span>{/*locale-text_LMqCOA*/}</span>
            </span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">
              <span>{/*locale-text_nUKz3s*/}</span>
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">
              <span>{/*locale-text_Kn4TGi*/}</span>
            </span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">
              <span>{/*locale-text_yG-R9w*/}</span>
            </span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="home-text18">
              <span>{/*locale-text_8RcUCR*/}</span>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text19">
              <span>{/*locale-text_22nsmn*/}</span>
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text20">
              <span>{/*locale-text_5oSkd8*/}</span>
            </span>
          </Fragment>
        }
        link1Url="https://www.greatus.io"
        link2Url="/solutions"
        page1Description={
          <Fragment>
            <span className="home-text21">
              <span>{/*locale-text_aALKRG*/}</span>
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text22">
              <span>{/*locale-text_qdNQ1L*/}</span>
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text23">
              <span>{/*locale-text_hBXwA-*/}</span>
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text24">
              <span>{/*locale-text_gt0M0h*/}</span>
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text25">
              <span>{/*locale-text_Ux6pZ5*/}</span>
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text26">
              <span>{/*locale-text_K7Gs4V*/}</span>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text27">
              <span>{/*locale-text_JPviCb*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text28">
              <span>{/*locale-text_KPbfl9*/}</span>
            </span>
          </Fragment>
        }
      ></Hero17>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text29">
              <span>{/*locale-text_WwnSED*/}</span>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text30">
              <span>{/*locale-text_yKsikl*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text31">
              <span>{/*locale-text_X1TW5n*/}</span>
            </span>
          </Fragment>
        }
      ></CTA26>
      <Link to="/solutions" className="home-navlink">
        <Features25
          heading11={
            <Fragment>
              <span className="home-text32">
                <span>{/*locale-text_32JmE8*/}</span>
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="home-text33">
                <span>{/*locale-text_MIJmGa*/}</span>
              </span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text34">
                <span>{/*locale-text_qQqimL*/}</span>
              </span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text35">
                <span>{/*locale-text_sE5j9-*/}</span>
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="home-text36">
                <span>{/*locale-text_nlToFs*/}</span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="home-text37">
                <span>{/*locale-text_9Cui8w*/}</span>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="home-text38">
                <span>{/*locale-text_pf4USp*/}</span>
              </span>
            </Fragment>
          }
          className="home-component4"
        ></Features25>
      </Link>
      <Contact12
        email1={
          <Fragment>
            <span className="home-text39">
              <span>{/*locale-text_UP-LN_*/}</span>
            </span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="home-text40">
              <span>{/*locale-text_i-8fep*/}</span>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text41">
              <span>{/*locale-text_q_3Khi*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text42">
              <span>{/*locale-text_npFF2E*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="contact12root-class-name1"
      ></Contact12>
      <Footer4
        text={
          <Fragment>
            <span className="home-text43">
              <span>{/*locale-text_dM8kSg*/}</span>
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text44">
              <span>{/*locale-text_4m0Dcw*/}</span>
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text45">
              <span>{/*locale-text_wJ0edm*/}</span>
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text46">
              <span>{/*locale-text_8jsgPk*/}</span>
            </span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
