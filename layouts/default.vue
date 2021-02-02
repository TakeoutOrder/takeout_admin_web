<template>
  <v-app>
    <app-header />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="css" scoped>
  .app {
    font-family: 'Meiryo', 'sans-serif';
  }
</style>
