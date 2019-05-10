import { checkOwnerLogin, getOwnerSlug } from './checkLoggedIn'

const userMock = {
  shortName: 'Jane D.',
  role: 'USER',
  businesses: {
    nodes: []
  }
}

const ownerUserMock = {
  shortName: 'John D.',
  role: 'OWNER',
  businesses: {
    nodes: [
      {
        slug: 'johns-wine-shop'
      },
      {
        slug: 'johns-other-wine-shop'
      }
    ]
  }
}

const adminUserMock = {
  shortName: 'Luke S.',
  role: 'ADMIN',
  businesses: {
    nodes: []
  }
}

describe('checkOwnerLogin', () => {
  describe('when the user is a regular user', () => {
    it('returns false', () => {
      expect(checkOwnerLogin(userMock)).toEqual(false)
    })
  })

  describe('when the user is a business owner', () => {
    it('returns true ', () => {
      expect(checkOwnerLogin(ownerUserMock)).toEqual(true)
    })
  })

  describe('when the user is an admin', () => {
    it('returns true', () => {
      expect(checkOwnerLogin(adminUserMock)).toEqual(true)
    })
  })
})

describe('getOwnerSlug', () => {
  describe('when the user is a regular user', () => {
    it('returns null', () => {
      expect(getOwnerSlug(userMock)).toEqual(null)
    })
  })

  describe('when the user is a business owner', () => {
    it('returns his first business', () => {
      expect(getOwnerSlug(ownerUserMock)).toEqual('johns-wine-shop')
    })
  })
})
