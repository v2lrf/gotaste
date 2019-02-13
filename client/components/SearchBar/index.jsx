/**
 * Please note that eslint is currently disabled for this file,
 * because dynamic imports is still officially an experimental
 * feature.
 * ESlint are not implementing rules for features until they
 * are officially implemented.
 * See: https://github.com/eslint/eslint#what-about-experimental-features
 */
import dynamic from 'next/dynamic'
import ContentLoader from 'react-content-loader'

const SearchBar = dynamic({
  loader: () => import('./SearchBar'),
  loading: () => (
    <ContentLoader
      height={50}
      width={464}
      speed={1}
      primaryColor="#FFFFFF"
      secondaryColor="#DAE1E7"
    >
      <rect rx="4" ry="4" width="464" height="50" />
    </ContentLoader>
  ),
  ssr: false
})

export default SearchBar
