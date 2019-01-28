import React, { Fragment } from 'react'

import { Container } from '../Container'

export function Footer() {
  return (
    <Fragment>
      <Container>
        <div className="flex border-b py-10">
          <div className="pr-16">
            <div className="pb-2">
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

          <div className="pr-16">
            <div className="pb-2">
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
            <div className="pb-2">
              <a href="#betingelser" className="text-black no-underline">
                Betingelser
              </a>
            </div>
            <div className="pb-2">
              <a href="#vilkaer" className="text-black no-underline">
                Privatlivsvilkår
              </a>
            </div>
            <div>
              <a href="#cookie" className="text-black no-underline">
                Cookiepolitik
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between py-10">
          <div>© 2019 Copyright Govinu. All rights reserved.</div>
          <div>
            <span role="img" aria-label="Dansk">
              🇩🇰
            </span>
            Dansk
          </div>
        </div>
      </Container>
    </Fragment>
  )
}

export default Footer
