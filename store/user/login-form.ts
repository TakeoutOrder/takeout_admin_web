import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import firebase from 'firebase'
import { Auth } from '~/plugins/firebase'
import { UserStore } from '~/utils/store-accessor'

interface LoginFormState {
  email: string
  password: string
}

@Module({
  name: 'user/login-form',
  namespaced: true,
  stateFactory: true
})
export default class LoginFormModule extends VuexModule implements LoginFormState {
  email = ''
  password = ''

  get getEmail () {
    return this.email
  }

  @Mutation
  SET_EMAIL (email: string) {
    this.email = email
  }

  @Mutation
  SET_PASSWORD (password: string) {
    this.password = password
  }

  /**
   * フォームの入力からログインを試みます.
   * @return true: 成功 / false: 失敗
   */
  @Action({ rawError: true })
  async onSubmit () {
    return Auth.signInWithEmailAndPassword(
      this.email, this.password
    ).then(async (userCredential) => {
      const user = userCredential.user
      if (!user) {
        return false
      }
      // @ts-ignore
      this.$cookies.set('access_token', await user.getIdToken())
      const userIdTokenResult = await user.getIdTokenResult()
      UserStore.setUserInfo({
        uid: user.uid,
        admin: userIdTokenResult.claims.admin
      })
      return true
    }).catch(() => {
      return false
    })
  }
}
