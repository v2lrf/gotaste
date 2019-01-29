import React from 'react'

import { Container } from '../Container'

export function Footer() {
  return (
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

        <div className="flex flex-col sm:flex-row justify-between my-10">
          <div className="mb-2 sm:mb-0">
            © 2019 Copyright Govinu. All rights reserved.
          </div>
          <div>
            <span role="img" aria-label="Dansk" aria-hidden>
              🇩🇰
            </span>
            Dansk
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
