import { createStore } from '~/.nuxt/store'
import { initialiseStores, UserStore } from '~/utils/store-accessor'

describe('UserStore', () => {
  beforeEach(() => {
    initialiseStores(createStore())
  })

  it('should return appropriate data when initialized', () => {
    expect(UserStore.isAdmin).toEqual(false)
    expect(UserStore.isAuthenticated).toEqual(false)
    expect(UserStore.uid).toEqual('')
  })

  it('can set a user info', () => {
    UserStore.setUserInfo({
      uid: 'test_not_admin',
      admin: false
    })
    expect(UserStore.uid).toEqual('test_not_admin')
    expect(UserStore.isAdmin).toEqual(false)

    UserStore.setUserInfo({
      uid: 'test_admin',
      admin: true
    })
    expect(UserStore.uid).toEqual('test_admin')
    expect(UserStore.isAdmin).toEqual(true)
  })

  it('can delete a user info', () => {
    UserStore.setUserInfo({
      uid: 'test',
      admin: false
    })
    UserStore.deleteUserInfo()
    expect(UserStore.isAdmin).toEqual(false)
    expect(UserStore.isAuthenticated).toEqual(false)
    expect(UserStore.uid).toEqual('')
  })
})
