<template>
  <v-app>
    <v-container>
      <v-main class="pa-4">
        <v-alert v-if="error_message !== ''" type="error">
          {{ error_message }}
        </v-alert>
        <h1 class="text-center">
          Takeout Service
        </h1>
        <h2 class="text-center">
          管理者ログイン
        </h2>
        <v-form>
          <v-text-field
            v-model="email"
            label="メールアドレス"
            type="text"
          />
          <v-text-field
            v-model="password"
            label="パスワード"
            type="password"
          />
          <v-btn outlined @click="signIn">
            ログイン
          </v-btn>
        </v-form>
      </v-main>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { UserStore } from '~/store/user/user'
import { Auth } from '~/plugins/firebase'

export default Vue.extend({
  data () {
    return {
      email: '',
      password: '',
      error_message: ''
    }
  },
  methods: {
    signIn () {
      Auth.signInWithEmailAndPassword(
        this.email, this.password
      ).then(async (userCredential) => {
        const user = userCredential.user
        if (!user) {
          this.error_message = 'エラー. 管理者に報告してください. (user = null)'
          return
        }
        // @ts-ignore
        this.$cookies.set('access_token', await user.getIdToken())
        const userIdTokenResult = await user.getIdTokenResult()
        UserStore.setUserInfo({
          uid: user.uid,
          admin: userIdTokenResult.claims.admin
        })
        if (!UserStore.isAdmin) {
          this.error_message = 'ログインする権限がありません.'
        } else {
          await this.$router.push('/')
        }
      }).catch(() => {
        this.error_message = 'メールアドレスとパスワードを再度確認してください.'
      })
    }
  }
})
</script>

<style>
</style>
