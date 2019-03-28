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

const SearchBar = dynamic({
  loader: () => import('./SearchBar'),
  loading: () => <GhostCard height={50} />,
  ssr: false
})

export default SearchBar
