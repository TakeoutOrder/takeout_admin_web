import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

interface AppHeaderState {
  isDrawerOpen: boolean
}

@Module({
  name: 'inner/app-header/app-header',
  namespaced: true,
  stateFactory: true
})
export default class AppHeaderModule extends VuexModule implements AppHeaderState {
  drawerOpen = false

  get isDrawerOpen () {
    return this.drawerOpen
  }

  @Mutation
  SET_DRAWER_OPEN (state: boolean) {
    this.drawerOpen = state
  }

  @Mutation
  TOGGLE_DRAWER_OPEN () {
    this.drawerOpen = !this.drawerOpen
  }
}
