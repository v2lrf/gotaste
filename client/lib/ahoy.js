const isServerSide = typeof window === 'undefined'
// eslint-disable-next-line global-require
export default (isServerSide ? null : require('ahoy.js').default)
