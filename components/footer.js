import React from 'react'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer section-container">
        <div className="footer-max-width max-content-container">
          <div className="footer-container">
            <span className="footer-text">
              <span>Du lundi au vendredi :</span>
              <br></br>
              <span> 9h30 – 12h30</span>
              <br></br>
              <span> 14h00 – 17h30</span>
            </span>
            <div className="footer-social-media">
              <span className="footer-text6">Suivez nous :</span>
              <a
                href="https://www.facebook.com/AtelierInformatiqueMedia/"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link"
              >
                <div className="footer-container1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="footer-icon"
                  >
                    <path d="M829.143 73.143c26.857 0 48.571 21.714 48.571 48.571v780.571c0 26.857-21.714 48.571-48.571 48.571h-223.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-420c-26.857 0-48.571-21.714-48.571-48.571v-780.571c0-26.857 21.714-48.571 48.571-48.571h780.571z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer {
            border-color: rgba(33, 33, 33, 0.1);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .footer-max-width {
            align-self: center;
            justify-content: center;
          }
          .footer-container {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer-text {
            color: var(--dl-color-grays-gray100);
            max-width: 350px;
            text-align: center;
            margin-bottom: 60px;
          }
          .footer-social-media {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text6 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link {
            display: contents;
          }
          .footer-container1 {
            flex: 0 0 auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
            text-decoration: none;
          }
          .footer-icon {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .footer-max-width {
              flex-direction: column-reverse;
            }
            .footer-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
