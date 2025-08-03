import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Features25 from '../components/features25'
import Footer4 from '../components/footer4'
import './solution.css'

const Solution = (props) => {
  return (
    <div className="solution-container">
      <Helmet>
        <title>Solution - Company-Homepage</title>
        <meta property="og:title" content="Solution - Company-Homepage" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="solution-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="solution-text11">Solutions</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="solution-text12">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="solution-text13">Contact Us</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="solution-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="solution-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="solution-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="solution-text17">Page Four</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="solution-text18">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="solution-text19">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="solution-text20">Contact Us</span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name1"
        page1Description={
          <Fragment>
            <span className="solution-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="solution-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="solution-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="solution-text24">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Features25
        feature1Title={
          <Fragment>
            <span className="solution-text25">
              IT Infrastructure Implementation
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="solution-text26">Software Development</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="solution-text27">Cybersecurity Solutions</span>
          </Fragment>
        }
        rootClassName="features25root-class-name"
        feature1Description={
          <Fragment>
            <span className="solution-text28">
              Expertise in designing and implementing robust IT infrastructures
              tailored to meet specific business needs.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="solution-text29">
              Custom software development services to enhance operational
              efficiency and drive business growth.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="solution-text30">
              Comprehensive cybersecurity solutions to protect data, systems,
              and networks from potential threats.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="solution-text31">Our Solutions</span>
          </Fragment>
        }
      ></Features25>
      <Footer4
        text={
          <Fragment>
            <span className="solution-text32">GREATUS</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="solution-text33">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="solution-text34">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="solution-text35">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer4root-class-name1"
      ></Footer4>
    </div>
  )
}

export default Solution
