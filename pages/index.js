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
            <div className="home-max-width max-content-container">
              <div className="home-image-container">
                <img
                  alt="image"
                  src="/logo_ai.svg"
                  loading="eager"
                  className="home-image"
                />
              </div>
              <div className="home-content-container">
                <div className="home-features-container">
                  <div className="home-feature">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text">
                      Dépannage, Installation, Configuration, Vente en
                      Informatique et Réseaux
                    </span>
                  </div>
                  <div className="home-feature1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon02"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text1">Tous travaux media</span>
                  </div>
                  <div className="home-feature2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon04"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="home-text2">
                      Sites web, boutiques en ligne
                    </span>
                  </div>
                </div>
                <span className="home-text3"></span>
                <span className="home-text4">Accueil sur rendez-vous :</span>
                <div className="home-input-container">
                  <div className="home-container1 input">
                    <a href="tel:+33614828570" className="home-link">
                      <svg
                        viewBox="0 0 804.5714285714286 1024"
                        className="home-icon06"
                      >
                        <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                      </svg>
                    </a>
                    <a href="tel:+33614828570" className="home-link1">
                      06 14 82 85 70
                    </a>
                  </div>
                  <div className="home-container2 input">
                    <a
                      href="mailto:admin@atelier-im.com?subject=Demande d'informations"
                      className="home-link2"
                    >
                      <svg viewBox="0 0 1024 1024" className="home-icon08">
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
        <Footer></Footer>
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
            display: flex;
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
          .home-icon {
            fill: #62bf77;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text {
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
          .home-icon02 {
            fill: #62bf77;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text1 {
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
          .home-icon04 {
            fill: #62bf77;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .home-text2 {
            color: var(--dl-color-grays-gray60);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .home-text3 {
            align-self: center;
          }
          .home-text4 {
            color: var(--dl-color-grays-gray60);
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
          .home-container1 {
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
          .home-icon06 {
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
          .home-container2 {
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
          .home-icon08 {
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
          @media (max-width: 991px) {
            .home-max-width {
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-content-container {
              margin-bottom: 42px;
              padding-right: 0px;
            }
            .home-input-container {
              margin-bottom: 0px;
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
            .home-input-container {
              flex-direction: column;
            }
            .home-container1 {
              max-width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-container2 {
              max-width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
