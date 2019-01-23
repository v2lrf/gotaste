import mountPack from '../utils/mountPack'
import EventPage from '../pages/EventPage'

document.addEventListener('DOMContentLoaded', () => {
  mountPack(EventPage, 'event-pack-root')
})
