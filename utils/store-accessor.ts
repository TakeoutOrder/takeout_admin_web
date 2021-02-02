/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AppHeader from '~/store/inner/app-header/app-header'
import UserModule from '~/store/user/user'
import LoginFormModule from '~/store/user/login-form'

let AppHeaderStore: AppHeader
let UserStore: UserModule
let LoginFormStore: LoginFormModule

function initialiseStores (store: Store<any>): void {
  AppHeaderStore = getModule(AppHeader, store)
  UserStore = getModule(UserModule, store)
  LoginFormStore = getModule(LoginFormModule, store)
}

export { initialiseStores, AppHeaderStore, UserStore, LoginFormStore }
