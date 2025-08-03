import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Contact12 from '../components/contact12'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Company Homepage</title>
        <meta property="og:title" content="Contact - Company Homepage" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="contact-text10">
              <span>{/*locale-text_AjCc7T*/}</span>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">
              <span>{/*locale-text_H0Fsw_*/}</span>
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12">
              <span>{/*locale-text_grfjvM*/}</span>
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13">
              <span>{/*locale-text_t3c6EW*/}</span>
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text14">
              <span>{/*locale-text_TPHSLW*/}</span>
            </span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text15">
              <span>{/*locale-text_lM3Iq3*/}</span>
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text16">
              <span>{/*locale-text_HlDMED*/}</span>
            </span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text17">
              <span>{/*locale-text_m94TqO*/}</span>
            </span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="contact-text18">
              <span>{/*locale-text_lIG7lu*/}</span>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text19">
              <span>{/*locale-text_OD7kp3*/}</span>
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text20">
              <span>{/*locale-text_yi0b25*/}</span>
            </span>
          </Fragment>
        }
        link1Url="https://www.greatus.io"
        link2Url="/solutions"
        page1Description={
          <Fragment>
            <span className="contact-text21">
              <span>{/*locale-text_-xof9T*/}</span>
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="contact-text22">
              <span>{/*locale-text_tb4yx6*/}</span>
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="contact-text23">
              <span>{/*locale-text_1RLdQ3*/}</span>
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="contact-text24">
              <span>{/*locale-text_L3T6qA*/}</span>
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Contact12
        email1={
          <Fragment>
            <span className="contact-text25">
              <span>{/*locale-text_Ih8QaL*/}</span>
            </span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-text26">
              <span>{/*locale-text_g80woQ*/}</span>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text27">
              <span>{/*locale-text_7gxnRn*/}</span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text28">
              <span>{/*locale-text_dWSSPq*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="contact12root-class-name"
      ></Contact12>
      <Footer4
        text={
          <Fragment>
            <span className="contact-text29">
              <span>{/*locale-text_udq7wM*/}</span>
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="contact-text30">
              <span>{/*locale-text_JCUO8F*/}</span>
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact-text31">
              <span>{/*locale-text_a0IMDb*/}</span>
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact-text32">
              <span>{/*locale-text_jWhgD4*/}</span>
            </span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Contact
