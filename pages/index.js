import React from 'react'
import Head from 'next/head'

import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Atelier Informatique et Media</title>
          <meta
            name="description"
            content="Dépannage ordinateur\nDépannage informatique\nRéparation ordinateur\nRéparation informatique\nVente ordinateurs et accessoires\nImprimantes \nRéseaux"
          />
          <meta property="og:title" content="Atelier Informatique et Media" />
          <meta
            property="og:description"
            content="Dépannage ordinateur\nDépannage informatique\nRéparation ordinateur\nRéparation informatique\nVente ordinateurs et accessoires\nImprimantes \nRéseaux"
          />
        </Head>
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-container1">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M152 792l76-78 60 60-76 78zM470 958v-126h84v126h-84zM512 234q106 0 181 75t75 181-75 181-181 75-181-75-75-181 75-181 181-75zM854 448h128v86h-128v-86zM736 774l60-58 76 76-60 60zM872 190l-76 76-60-60 76-76zM554 24v126h-84v-126h84zM170 448v86h-128v-86h128zM288 206l-60 60-76-76 60-60z"></path>
              </svg>
              <span className="home-text">
                <span>En congés, de r</span>
                <span>etour le 24 Août</span>
                <br></br>
              </span>
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M152 792l76-78 60 60-76 78zM470 958v-126h84v126h-84zM512 234q106 0 181 75t75 181-75 181-181 75-181-75-75-181 75-181 181-75zM854 448h128v86h-128v-86zM736 774l60-58 76 76-60 60zM872 190l-76 76-60-60 76-76zM554 24v126h-84v-126h84zM170 448v86h-128v-86h128zM288 206l-60 60-76-76 60-60z"></path>
              </svg>
            </div>
            <div className="home-max-width max-content-container">
              <div className="home-image-container">
                <img
                  alt="image"
                  src="/logo_ai_2.svg"
                  loading="eager"
                  className="home-image"
                />
              </div>
              <div className="home-content-container">
                <div className="home-features-container">
                  <div className="home-feature">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon04"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text4">
                      Dépannage, Installation, Configuration, Vente en
                      Informatique et Réseaux
                    </span>
                  </div>
                  <div className="home-feature1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon06"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text5">Tous travaux media</span>
                  </div>
                  <div className="home-feature2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon08"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text6">
                      Sites web, boutiques en ligne
                    </span>
                  </div>
                </div>
                <span className="home-text7">Accueil sur rendez-vous :</span>
                <div className="home-input-container">
                  <div className="home-container2 input">
                    <a href="tel:+33614828570" className="home-link">
                      <svg
                        viewBox="0 0 804.5714285714286 1024"
                        className="home-icon10"
                      >
                        <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                      </svg>
                    </a>
                    <a href="tel:+33614828570" className="home-link1">
                      06 14 82 85 70
                    </a>
                  </div>
                  <div className="home-container3 input">
                    <a
                      href="mailto:admin@atelier-im.com?subject=Demande d'informations"
                      className="home-link2"
                    >
                      <svg viewBox="0 0 1024 1024" className="home-icon12">
                        <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                      </svg>
                    </a>
                    <a
                      href="mailto:admin@atelier-im.com?subject="
                      className="home-link3"
                    >
                      admin@atelier-im.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-backgrounds-gray);
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            padding-top: 38px;
            padding-bottom: 0px;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 39px;
            display: none;
            align-items: flex-start;
            justify-content: center;
          }
          .home-icon {
            fill: #f9ce08;
            width: 24px;
            height: 24px;
            align-self: center;
          }
          .home-text {
            align-self: center;
          }
          .home-icon02 {
            fill: #f9ce08;
            width: 24px;
            height: 24px;
            align-self: center;
          }
          .home-max-width {
            align-items: stretch;
          }
          .home-image-container {
            flex: 1;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-backgrounds-gray);
          }
          .home-image {
            flex: 1;
            width: 468px;
            height: 476px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
          }
          .home-content-container {
            flex: 1;
            display: flex;
            min-width: 50%;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-features-container {
            flex: 0 0 auto;
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-feature {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .home-icon04 {
            fill: #62bf77;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text4 {
            color: var(--dl-color-grays-gray60);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .home-feature1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .home-icon06 {
            fill: #62bf77;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text5 {
            color: var(--dl-color-grays-gray60);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .home-feature2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .home-icon08 {
            fill: #62bf77;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text6 {
            color: var(--dl-color-grays-gray60);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text7 {
            color: var(--dl-color-grays-gray60);
            display: none;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .home-input-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
          }
          .home-container2 {
            width: 100%;
            height: 56px;
            display: flex;
            max-width: 376px;
            align-items: center;
            line-height: 1.5;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 32px;
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-backgrounds-gray);
          }
          .home-link {
            display: contents;
          }
          .home-icon10 {
            fill: var(--dl-color-grays-gray40);
            width: 20px;
            height: 20px;
            text-decoration: none;
          }
          .home-link1 {
            color: var(--dl-color-grays-gray60);
            text-decoration: underline;
            background-color: var(--dl-color-backgrounds-gray);
          }
          .home-container3 {
            width: 100%;
            height: 56px;
            display: flex;
            max-width: 376px;
            align-items: center;
            line-height: 1.5;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            margin-right: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-backgrounds-gray);
          }
          .home-link2 {
            display: contents;
          }
          .home-icon12 {
            fill: var(--dl-color-grays-gray60);
            width: 24px;
            height: 24px;
            text-decoration: none;
          }
          .home-link3 {
            color: var(--dl-color-grays-gray60);
            text-decoration: underline;
            background-color: var(--dl-color-backgrounds-gray);
          }
          @media (max-width: 1600px) {
            .home-features-container {
              display: none;
            }
            .home-text7 {
              display: none;
            }
          }
          @media (max-width: 1200px) {
            .home-hero {
              width: 1146px;
            }
            .home-max-width {
              padding-left: var(--dl-space-space-unit);
            }
            .home-features-container {
              display: none;
            }
            .home-text7 {
              display: none;
            }
          }
          @media (max-width: 991px) {
            .home-max-width {
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-content-container {
              margin-bottom: 42px;
              padding-right: 0px;
            }
            .home-features-container {
              display: none;
            }
            .home-text7 {
              display: none;
            }
            .home-input-container {
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-container1 {
              display: none;
              background-color: #ffffff;
            }
            .home-image {
              margin-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-content-container {
              margin-bottom: 0px;
            }
            .home-features-container {
              display: none;
            }
            .home-text7 {
              display: none;
            }
            .home-input-container {
              width: 499px;
            }
          }
          @media (max-width: 479px) {
            .home-max-width {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-image {
              width: 408px;
              height: 394px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-content-container {
              align-items: center;
            }
            .home-features-container {
              display: none;
            }
            .home-text7 {
              display: none;
            }
            .home-input-container {
              width: 440px;
              height: 144px;
              align-self: center;
              align-items: center;
              margin-right: 0px;
              flex-direction: column;
            }
            .home-container2 {
              height: 24px;
              max-width: 100%;
              align-self: center;
              padding-left: 0px;
              margin-bottom: var(--dl-space-space-unit);
              justify-content: center;
            }
            .home-link1 {
              text-align: center;
            }
            .home-container3 {
              height: 37px;
              max-width: 100%;
              align-self: center;
              margin-right: 0px;
              margin-bottom: 0px;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
