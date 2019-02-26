import dynamic from 'next/dynamic'

const CookieWarning = dynamic(() => import('./CookieWarning'), {
  ssr: false
})

export default CookieWarning
