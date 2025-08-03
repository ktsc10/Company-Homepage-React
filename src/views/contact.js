import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import Navbar8 from '../components/navbar8'
import Contact12 from '../components/contact12'
import Footer4 from '../components/footer4'
import './contact.css'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <div className="contact-container">
      <Helmet>
        <title>{t('contact.meta.title')}</title>
        <meta property="og:title" content={t('contact.meta.title')} />
      </Helmet>

      <Navbar8
        link1={<span>{t('nav.home')}</span>}
        link2={<span>{t('nav.solutions')}</span>}
        link3={<span>{t('nav.contact')}</span>}
        link4={<span>{t('nav.blog')}</span>}
        page1={<span>{t('nav.services')}</span>}
        page2={<span>{t('nav.products')}</span>}
        page3={<span>{t('nav.careers')}</span>}
        page4={<span>{t('nav.about')}</span>}
        link21={<span>{t('nav.language')}</span>}
        action1={<span>{t('nav.learnMore')}</span>}
        action2={<span>{t('nav.contactUs')}</span>}
        link1Url="https://www.greatus.io"
        link2Url="/solutions"
        page1Description={<span>{t('navdesc.services')}</span>}
        page2Description={<span>{t('navdesc.products')}</span>}
        page3Description={<span>{t('navdesc.careers')}</span>}
        page4Description={<span>{t('navdesc.about')}</span>}
      />

      <Contact12
        email1={<span>{t('contact.email')}</span>}
        address1={<span>{t('contact.address')}</span>}
        content1={<span>{t('contact.content')}</span>}
        heading1={<span>{t('contact.heading')}</span>}
        rootClassName="contact12root-class-name"
      />

      <Footer4
        text={<span>{t('footer.copy')}</span>}
        termsLink={<span>{t('footer.terms')}</span>}
        cookiesLink={<span>{t('footer.cookies')}</span>}
        privacyLink={<span>{t('footer.privacy')}</span>}
      />
    </div>
  )
}

export default Contact
