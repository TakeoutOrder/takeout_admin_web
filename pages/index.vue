<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawerIsOpen = true" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawerIsOpen" temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Home
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawerIsOpen: false
    }
  }
}
</script>

<style scoped>

</style>
