import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
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
        link1={
          <Fragment>
            <span className="home-text100">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Contact Us</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Contact Us</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              With over 25 years of experience, Greatus is your trusted partner
              for IT infrastructure design, software development, and
              cybersecurity solutions.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Empower Your Business with Greatus IT Consultancy
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">
              IT Infrastructure Design and Implementation
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Software Development</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Cybersecurity</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Expertise in designing and implementing robust IT infrastructures
              tailored to meet specific business needs.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Custom software development services to create efficient and
              scalable solutions for various business requirements.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Comprehensive cybersecurity solutions to protect data, systems,
              and networks from potential threats and breaches.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get in touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Contact us today to schedule a consultation and see how Greatus
              can help your business thrive.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Ready to elevate your IT infrastructure?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">
              IT Infrastructure Design and Implementation
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Software Development</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Cybersecurity</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Expertise in designing and implementing robust IT infrastructures
              tailored to meet specific business needs.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Custom software development services to enhance operational
              efficiency and drive business growth.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Comprehensive cybersecurity solutions to protect data, systems,
              and networks from potential threats.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic Plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Standard Plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Premium Plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">$500/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">$1000/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">$2000/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Get Started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">$5000/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Get Started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">$10000/year</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Get Started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">$20000/year</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">IT Infrastructure Design</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">
              Software Development Consultancy
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">Basic Cybersecurity Assessment</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">
              IT Infrastructure Design and Implementation
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">Custom Software Development</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">
              Advanced Cybersecurity Solutions
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">
              Comprehensive IT Infrastructure Design and Implementation
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">
              Bespoke Software Development Services
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">
              Advanced Cybersecurity Solutions with Monitoring and Incident
              Response
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">Initial Consultation</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">Solution Design</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">Implementation</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">Cybersecurity Integration</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              We start by understanding your business needs and IT requirements.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Our experts create a customized IT infrastructure and software
              solution tailored to your specific needs.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              We execute the planned design and ensure a seamless integration of
              the IT solutions.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              We prioritize cybersecurity measures to protect your systems and
              data from potential threats.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              Working with Greatus was a game-changer for our company. Their IT
              infrastructure design was top-notch and tailored to our specific
              needs.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              Greatus&apos;s cybersecurity solutions were instrumental in
              enhancing our data protection measures. I highly recommend their
              services.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              The software development expertise of Greatus helped us create
              innovative solutions for our clients. They are truly a reliable
              partner.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              Greatus provided exceptional IT consultancy services that helped
              us streamline our operations and improve efficiency. Their
              expertise is unmatched.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">John Smith</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Emily Johnson</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">Michael Lee</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Sarah Adams</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">CEO, Tech Solutions Inc.</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">CTO, Data Innovations Co.</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">CISO, SecureNet Corp.</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">
              Head of Development, Softcode Solutions
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Locations</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">New York Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Los Angeles Office</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              123 Main Street, New York, NY 10001
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              456 Palm Avenue, Los Angeles, CA 90001
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">Services</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">Contact Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">Privacy Policy</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">Terms of Service</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
