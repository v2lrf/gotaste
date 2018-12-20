import mountPack from '../utils/mountPack'
import SearchPage from '../pages/SearchPage'

document.addEventListener('DOMContentLoaded', () => {
  mountPack(SearchPage, 'search-pack-root')
})
