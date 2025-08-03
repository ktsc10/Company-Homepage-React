import React, { Fragment } from 'react'

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
        <title>Company-Homepage</title>
        <meta property="og:title" content="Company-Homepage" />
      </Helmet>
      <Navbar8
        home={
          <Fragment>
            <span className="home-text10">Home</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text11">Contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text12">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text13">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text14">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text15">Page Four</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="home-text16">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text17">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text18">Contact Us</span>
          </Fragment>
        }
        solution={
          <Fragment>
            <span className="home-text19">Solutions</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text24">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text25">Contact Us</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text26">
              With over 25 years of experience, Greatus is your trusted partner
              for IT infrastructure design, software development, and
              cybersecurity solutions.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text27">
              Empower Your Business with Greatus IT Consultancy
            </span>
          </Fragment>
        }
      ></Hero17>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text28">Get in touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text29">
              Contact us today to schedule a consultation and see how Greatus
              can help your business thrive.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text30">
              Ready to elevate your IT infrastructure?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        heading1={
          <Fragment>
            <span className="home-text31">Our Solutions</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text32">
              IT Infrastructure Implementation
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text33">Software Development</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text34">Cybersecurity Solutions</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text35">
              Expertise in designing and implementing robust IT infrastructures
              tailored to meet specific business needs.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text36">
              Custom software development services to enhance operational
              efficiency and drive business growth.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text37">
              Comprehensive cybersecurity solutions to protect data, systems,
              and networks from potential threats.
            </span>
          </Fragment>
        }
      ></Features25>
      <Contact12
        email1={
          <Fragment>
            <span className="home-text38">cs@greatus.io</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="home-text39">
              141 Walker Street, North Sydney, NSW 2060
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text40">
              <span>Your Partner in IT Excellence</span>
              <br></br>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text44">
              <span>Connect with Us</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Contact12>
      <Footer4
        text={
          <Fragment>
            <span className="home-text47">GREATUS</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text48">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text49">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text50">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
