<template>
  <v-container class="pa-4">
    <v-col cols="12">
      <v-card color="grey lighten-4" rounded>
        <v-card-title class="justify-center">
          {{ $t('appHeader.login') }}
        </v-card-title>
        <v-divider />
        <v-card-text>
          <v-form @submit.prevent="">
            <email-text-input ref="email"/>
            <password-text-input ref="password" class="mb-4"/>
            <v-btn color="success" block large rounded @click="onSubmit">
              {{ $t('appHeader.login') }}
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import EmailTextInput from '~/components/form/EmailTextInput.vue'
import { LoginFormStore } from '~/utils/store-accessor'
import PasswordTextInput from '~/components/form/PasswordTextInput.vue'

@Component({
  components: {
    PasswordTextInput,
    EmailTextInput
  }
})
export default class LoginForm extends Vue {
  async onSubmit () {
    const emailValidationResult =
      (this.$refs.email as InstanceType<typeof EmailTextInput>).onSubmit()
    const passwordValidationResult =
      (this.$refs.password as InstanceType<typeof PasswordTextInput>).onSubmit()

    if (!emailValidationResult || !passwordValidationResult) {
      await this.showErrorDialog()
    } else {
      const canLoggedIn = await LoginFormStore.onSubmit()
      if (!canLoggedIn) {
        await this.showErrorDialog()
      } else {
        this.$dialog.message.info(this.$t('form.success'), {
          position: 'top-right'
        })
        await this.$router.push('/')
      }
    }
  }

  private async showErrorDialog () {
    await this.$dialog.error({
      text: this.$t('form.error.confirm'),
      title: this.$t('form.error.error'),
      actions: {
        false: this.$t('form.error.ok')
      }
    })
  }
}
</script>

<style>
</style>
