<template>
  <v-app class="app">
    <side-menu />
  </v-app>
</template>

<script>
import SideMenu from '@/components/side-menu'
import authenticated from '@/middleware/authenticated'

export default {
  components: { SideMenu },
  middleware: authenticated
}
</script>

<style scoped>

</style>
