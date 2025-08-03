import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Contact12 from '../components/contact12'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  const { t } = useTranslation()

  return (
    <div className="home-container">
      <Helmet>
        <title>{t('homepage.meta.title')}</title>
        <meta property="og:title" content={t('homepage.meta.title')} />
      </Helmet>
      <Navbar8
        link1={<span>{t('homepage.nav.home')}</span>}
        link2={<span>{t('homepage.nav.solutions')}</span>}
        link3={<span>{t('homepage.nav.contact')}</span>}
        link4={<span>{t('homepage.nav.blog')}</span>}
        page1={<span>{t('homepage.nav.services')}</span>}
        page2={<span>{t('homepage.nav.products')}</span>}
        page3={<span>{t('homepage.nav.careers')}</span>}
        page4={<span>{t('homepage.nav.about')}</span>}
        link21={<span>{t('homepage.nav.language')}</span>}
        action1={<span>{t('homepage.nav.learnMore')}</span>}
        action2={<span>{t('homepage.nav.contactUs')}</span>}
        link1Url="https://www.greatus.io"
        link2Url="/solutions"
        page1Description={<span>{t('homepage.navdesc.services')}</span>}
        page2Description={<span>{t('homepage.navdesc.products')}</span>}
        page3Description={<span>{t('homepage.navdesc.careers')}</span>}
        page4Description={<span>{t('homepage.navdesc.about')}</span>}
      />
      <Hero17
        action1={<span>{t('homepage.hero.learnMore')}</span>}
        action2={<span>{t('homepage.hero.contactUs')}</span>}
        content1={<span>{t('homepage.hero.description')}</span>}
        heading1={<span>{t('homepage.hero.heading')}</span>}
      />
      <CTA26
        action1={<span>{t('homepage.cta.contactNow')}</span>}
        content1={<span>{t('homepage.cta.text')}</span>}
        heading1={<span>{t('homepage.cta.heading')}</span>}
      />
      <Link to="/solutions" className="home-navlink">
        <Features25
          heading11={<span>{t('homepage.features.heading')}</span>}
          feature1Title={<span>{t('homepage.features.feature1.title')}</span>}
          feature2Title={<span>{t('homepage.features.feature2.title')}</span>}
          feature3Title={<span>{t('homepage.features.feature3.title')}</span>}
          feature1Description={<span>{t('homepage.features.feature1.desc')}</span>}
          feature2Description={<span>{t('homepage.features.feature2.desc')}</span>}
          feature3Description={<span>{t('homepage.features.feature3.desc')}</span>}
          className="home-component4"
        />
      </Link>
      <Contact12
        email1={<span>{t('homepage.contact.email')}</span>}
        address1={<span>{t('homepage.contact.address')}</span>}
        content1={<span>{t('homepage.contact.body')}</span>}
        heading1={<span>{t('homepage.contact.heading')}</span>}
        rootClassName="contact12root-class-name1"
      />
      <Footer4
        text={<span>{t('homepage.footer.copy')}</span>}
        termsLink={<span>{t('homepage.footer.terms')}</span>}
        cookiesLink={<span>{t('homepage.footer.cookies')}</span>}
        privacyLink={<span>{t('homepage.footer.privacy')}</span>}
      />
    </div>
  )
}

export default Home
