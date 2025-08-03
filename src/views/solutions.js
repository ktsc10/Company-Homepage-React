import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Features25 from '../components/features25'
import Footer4 from '../components/footer4'
import './solutions.css'

const Solutions = (props) => {
  return (
    <div className="solutions-container">
      <Helmet>
        <title>Solutions - Company Homepage</title>
        <meta property="og:title" content="Solutions - Company Homepage" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="solutions-text10">
              <span>{/*locale-text_tiF6tN*/}</span>
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="solutions-text11">
              <span>{/*locale-text_4YXUu9*/}</span>
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="solutions-text12">
              <span>{/*locale-text_IGpPvP*/}</span>
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="solutions-text13">
              <span>{/*locale-text_66cQyZ*/}</span>
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="solutions-text14">
              <span>{/*locale-text_iwS1Om*/}</span>
            </span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="solutions-text15">
              <span>{/*locale-text_sEJBaK*/}</span>
            </span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="solutions-text16">
              <span>{/*locale-text_kpYdfk*/}</span>
            </span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="solutions-text17">
              <span>{/*locale-text_0PC_yU*/}</span>
            </span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="solutions-text18">
              <span>{/*locale-text_hBGdl9*/}</span>
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="solutions-text19">
              <span>{/*locale-text_VfmboB*/}</span>
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="solutions-text20">
              <span>{/*locale-text_n-5zB8*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="navbar8root-class-name"
        page1Description={
          <Fragment>
            <span className="solutions-text21">
              <span>{/*locale-text_EAgPuy*/}</span>
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="solutions-text22">
              <span>{/*locale-text_9LpEzV*/}</span>
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="solutions-text23">
              <span>{/*locale-text_8a4AXV*/}</span>
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="solutions-text24">
              <span>{/*locale-text_3aaMms*/}</span>
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Features25
        heading11={
          <Fragment>
            <span className="solutions-text25">
              <span>{/*locale-text_ToPR-V*/}</span>
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="solutions-text26">
              <span>{/*locale-text_xHlNTh*/}</span>
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="solutions-text27">
              <span>{/*locale-text_TUewRN*/}</span>
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="solutions-text28">
              <span>{/*locale-text_DXoeiM*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="features25root-class-name"
        feature1Description={
          <Fragment>
            <span className="solutions-text29">
              <span>{/*locale-text_FGnkAr*/}</span>
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="solutions-text30">
              <span>{/*locale-text_6R2CH5*/}</span>
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="solutions-text31">
              <span>{/*locale-text_nqG-8t*/}</span>
            </span>
          </Fragment>
        }
      ></Features25>
      <Footer4
        text={
          <Fragment>
            <span className="solutions-text32">
              <span>{/*locale-text_shdqfg*/}</span>
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="solutions-text33">
              <span>{/*locale-text_4RIQJz*/}</span>
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="solutions-text34">
              <span>{/*locale-text_xIzOAU*/}</span>
            </span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="solutions-text35">
              <span>{/*locale-text_A9HI2E*/}</span>
            </span>
          </Fragment>
        }
        rootClassName="footer4root-class-name"
      ></Footer4>
    </div>
  )
}

export default Solutions
