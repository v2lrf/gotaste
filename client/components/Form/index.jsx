/**
 * Please note that eslint is currently disabled for this file,
 * because dynamic imports is still officially an experimental
 * feature.
 * ESlint are not implementing rules for features until they
 * are officially implemented.
 * See: https://github.com/eslint/eslint#what-about-experimental-features
 */
import dynamic from 'next/dynamic'
import { GhostCard } from '../Ghost'

export const DateTimeInput = dynamic({
  loader: () => import('./DateTimeInput'),
  loading: () => <GhostCard height={50} />,
  ssr: false
})

export { default as Input } from './Input'
export { default as Checkbox } from './Checkbox'

export default this
