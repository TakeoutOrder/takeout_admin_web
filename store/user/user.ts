import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

interface UserState {
  uid: string
  admin: boolean
  authenticated: boolean
}

interface UserParam {
  uid: string
  admin: boolean
}

@Module({ name: 'user/user', namespaced: true, stateFactory: true })
export default class UserModule extends VuexModule implements UserState {
  uid = ''
  admin = false
  authenticated = false

  get isAdmin () {
    return this.admin
  }

  get isAuthenticated () {
    return this.authenticated
  }

  @Mutation
  private SET_UID (uid: string) {
    this.uid = uid
  }

  @Mutation
  private SET_ADMIN (admin: boolean) {
    this.admin = admin
  }

  @Mutation
  private SET_AUTHENTICATED (authenticated: boolean) {
    this.authenticated = authenticated
  }

  @Mutation
  setUserInfo (userParam: UserParam) {
    this.uid = userParam.uid
    this.authenticated = true
    this.admin = userParam.admin
  }

  @Mutation
  deleteUserInfo () {
    this.uid = ''
    this.authenticated = false
    this.admin = false
  }
}
