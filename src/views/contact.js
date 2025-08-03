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
        <title>Contact - Company-Homepage</title>
        <meta property="og:title" content="Contact - Company-Homepage" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="contact-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">Solutions</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13">Contact Us</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="contact-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="contact-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="contact-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="contact-text17">Page Four</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="contact-text18">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text19">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text20">Contact Us</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name"
        page1Description={
          <Fragment>
            <span className="contact-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="contact-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="contact-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="contact-text24">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Contact12
        email1={
          <Fragment>
            <span className="contact-text25">cs@greatus.io</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="contact-text26">
              141 Walker Street, North Sydney, NSW 2060
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text27">
              <span>Your Partner in IT Excellence</span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text31">
              <span>Connect with Us</span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="contact12root-class-name"
      ></Contact12>
      <Footer4
        text={
          <Fragment>
            <span className="contact-text34">GREATUS</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="contact-text35">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="contact-text36">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="contact-text37">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name"
      ></Footer4>
    </div>
  )
}

export default Contact
