import { createStore } from '~/.nuxt/store'
import { initialiseStores, AppHeaderStore } from '~/utils/store-accessor'

describe('AppHeaderStore', () => {
  beforeEach(() => {
    initialiseStores(createStore())
  })

  it('should return appropriate data when initialized', () => {
    expect(AppHeaderStore.isDrawerOpen).toEqual(false)
  })

  it('can set a drawerOpen state', () => {
    AppHeaderStore.SET_DRAWER_OPEN(true)
    expect(AppHeaderStore.isDrawerOpen).toEqual(true)

    AppHeaderStore.SET_DRAWER_OPEN(false)
    expect(AppHeaderStore.isDrawerOpen).toEqual(false)
  })

  it('can toggle a drawerOpen state', () => {
    AppHeaderStore.TOGGLE_DRAWER_OPEN()
    expect(AppHeaderStore.isDrawerOpen).toEqual(true)

    AppHeaderStore.TOGGLE_DRAWER_OPEN()
    expect(AppHeaderStore.isDrawerOpen).toEqual(false)
  })
})
