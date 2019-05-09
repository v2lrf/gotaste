import React, { Fragment } from 'react'
import Link from 'next/link'
import moment from 'moment'

import Container from '../Container'

function Footer() {
  return (
    <Fragment>
      <div>
        <Container narrow>
          <div className="flex flex-col sm:flex-row border-t pt-8 pb-16">
            <div className="mb-2 sm:mb-0 sm:mr-16">
              <div className="mb-2 text-sm text-grey-dark">
                {`© ${moment().format('YYYY')} GoTaste`}
              </div>
            </div>

            <div className="mb-2 sm:mb-0 sm:mr-16">
              <div className="mb-2">
                <Link href="/businesses">
                  <a className="text-black no-underline">Forhandlere</a>
                </Link>
              </div>
              <div>
                <Link href="/events">
                  <a className="text-black no-underline">Begivenheder</a>
                </Link>
              </div>
            </div>

            <div className="mb-2 sm:mb-0 sm:mr-16">
              <div className="mb-2">
                <Link href="/about">
                  <a className="text-black no-underline">Om GoTaste</a>
                </Link>
              </div>
              <div>
                <a
                  href="mailto:info@gotaste.dk"
                  className="text-black no-underline"
                >
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
        </Container>
      </div>
    </Fragment>
  )
}

export default Footer
