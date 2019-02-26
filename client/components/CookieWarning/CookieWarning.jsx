import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Cookies from 'js-cookie'

import Container from '../Container'
import Button from '../Button'

function CookieWarning() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (!show) {
      Cookies.set('cookies_accept', true)
    }
  })

  return Cookies.get('cookies_accept') || !show ? null : (
    <div className="fixed pin-b bg-white border-t border-red-lightest w-full py-4">
      <Container>
        <div className="flex justify-between items-center">
          <div className="text-sm mr-2 flex-shrink">
            For at give dig den bedste oplevelse hos Govinu bruger vi cookies.
            <Link href="/cookie-and-privacypolicy">
              <a className="ml-1 text-red-darker">Læs mere</a>
            </Link>
          </div>
          <div className="flex-none text-sm">
            <Button
              type="button"
              kind="secondary"
              onClick={() => setShow(false)}
            >
              Helt i orden!
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CookieWarning
