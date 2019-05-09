/* eslint-disable */
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

const Editor = dynamic({
  loader: () => import('./Editor'),
  loading: () => <GhostCard height={350} />,
  ssr: false
})

export default Editor
