<template>
  <v-text-field
    v-model="password"
    outlined
    :label="$t('form.password')"
    :rules="[validateRequired]"
    required
    autocomplete="on"
    :hide-details="showDetails"
    :append-icon="showDetails ? 'mdi-eye' : 'mdi-eye-off'"
    :type="showDetails ? 'text' : 'password'"
    @click:append="showDetails = !showDetails"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { LoginFormStore } from '~/store'

@Component
export default class PasswordTextInput extends Vue {
  password: string = ''
  showDetails: boolean = false

  validateRequired (v: string) {
    return !!v || ''
  }

  onSubmit () {
    if (this.validateRequired(this.password)) {
      LoginFormStore.SET_PASSWORD(this.password)
      return true
    } else {
      return false
    }
  }
}
</script>

<style scoped>

</style>
