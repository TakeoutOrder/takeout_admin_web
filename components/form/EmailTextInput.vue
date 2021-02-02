<template>
  <v-text-field
    v-model="email"
    outlined
    :label="$t('form.email')"
    type="text"
    placeholder="example@takeout-order.com"
    :rules="[validateRequired, validateEmail]"
    required
  />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { LoginFormStore } from '~/store'

@Component
export default class EmailTextInput extends Vue {
  email: string = ''

  validateRequired (v: string) {
    return !!v || ''
  }

  validateEmail (v: string) {
    return /.+@.+\..+/.test(v) || ''
  }

  onSubmit () {
    if (this.validateRequired(this.email) && this.validateEmail(this.email)) {
      LoginFormStore.SET_EMAIL(this.email)
      return true
    } else {
      return false
    }
  }
}
</script>

<style scoped>

</style>
