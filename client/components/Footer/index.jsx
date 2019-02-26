import React, { Fragment } from 'react'
import Link from 'next/link'
import moment from 'moment'

import Container from '../Container'
/* eslint-disable-next-line */
import CookieWarning from '../CookieWarning'

function Footer() {
  return (
    <Fragment>
      <div className="border-t border-red-lighter">
        <Container>
          <div className="flex flex-col sm:flex-row border-b py-10">
            <div className="mb-2 sm:mb-0 sm:mr-16">
              <div className="mb-2">
                <a href="#forhandlere" className="text-black no-underline">
                  Forhandlere
                </a>
              </div>
              <div>
                <a href="#arrangementer" className="text-black no-underline">
                  Arrangementer
                </a>
              </div>
            </div>

            <div className="mb-2 sm:mb-0 sm:mr-16">
              <div className="mb-2">
                <a href="#om-os" className="text-black no-underline">
                  Om Govinu
                </a>
              </div>
              <div>
                <a href="#kontakt" className="text-black no-underline">
                  Kontakt
                </a>
              </div>
            </div>

            <div>
              <div className="mb-2">
                <a href="#betingelser" className="text-black no-underline">
                  Betingelser
                </a>
              </div>
              <div className="mb-2">
                <Link href="/cookie-and-privacypolicy">
                  <a className="text-black no-underline">
                    Cookie og Privatlivspolitik
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between my-10">
            <div className="mb-2 sm:mb-0">
              {`© ${moment().format(
                'YYYY'
              )} Copyright Govinu. All rights reserved`}
            </div>
            <div>
              Lavet i
              <span className="ml-1" role="img" aria-label="Danmark">
                🇩🇰
              </span>
            </div>
          </div>
        </Container>
      </div>
      <CookieWarning />
    </Fragment>
  )
}

export default Footer
