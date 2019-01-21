import mountPack from '../utils/mountPack'
import BusinessesPage from '../pages/BusinessesPage'

document.addEventListener('DOMContentLoaded', () => {
  mountPack(BusinessesPage, 'businesses-pack-root')
})
