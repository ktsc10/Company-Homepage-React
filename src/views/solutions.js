import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import Navbar8 from '../components/navbar8'
import Features25 from '../components/features25'
import Footer4 from '../components/footer4'
import './solutions.css'

const Solutions = () => {
  const { t } = useTranslation()

  return (
    <div className="solutions-container">
      <Helmet>
        <title>{t('solutions.meta.title')}</title>
        <meta property="og:title" content={t('solutions.meta.title')} />
      </Helmet>

      <Navbar8
        link1={<span>{t('solutions.nav.home')}</span>}
        link2={<span>{t('solutions.nav.solutions')}</span>}
        link3={<span>{t('solutions.nav.contact')}</span>}
        link4={<span>{t('solutions.nav.blog')}</span>}
        page1={<span>{t('solutions.nav.services')}</span>}
        page2={<span>{t('solutions.nav.products')}</span>}
        page3={<span>{t('solutions.nav.careers')}</span>}
        page4={<span>{t('solutions.nav.about')}</span>}
        link21={<span>{t('solutions.nav.language')}</span>}
        action1={<span>{t('solutions.nav.learnMore')}</span>}
        action2={<span>{t('solutions.nav.contactUs')}</span>}
        page1Description={<span>{t('solutions.navdesc.services')}</span>}
        page2Description={<span>{t('solutions.navdesc.products')}</span>}
        page3Description={<span>{t('solutions.navdesc.careers')}</span>}
        page4Description={<span>{t('solutions.navdesc.about')}</span>}
        rootClassName="navbar8root-class-name"
      />

      <Features25
        heading11={<span>{t('solutions.features.heading')}</span>}
        feature1Title={<span>{t('solutions.features.feature1.title')}</span>}
        feature2Title={<span>{t('solutions.features.feature2.title')}</span>}
        feature3Title={<span>{t('solutions.features.feature3.title')}</span>}
        feature1Description={<span>{t('solutions.features.feature1.desc')}</span>}
        feature2Description={<span>{t('solutions.features.feature2.desc')}</span>}
        feature3Description={<span>{t('solutions.features.feature3.desc')}</span>}
        rootClassName="features25root-class-name"
      />

      <Footer4
        text={<span>{t('solutions.footer.copy')}</span>}
        termsLink={<span>{t('solutions.footer.terms')}</span>}
        cookiesLink={<span>{t('solutions.footer.cookies')}</span>}
        privacyLink={<span>{t('solutions.footer.privacy')}</span>}
        rootClassName="footer4root-class-name"
      />
    </div>
  )
}

export default Solutions
