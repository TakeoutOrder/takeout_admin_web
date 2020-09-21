<template>
  <v-navigation-drawer v-model="isDrawerOpen" app temporary>
    <v-list>
      <v-list-item>
        <v-list-item-title class="title text-center">
          Takeout Service
        </v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider />

    <!--<v-list dense nav>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>店舗アカウント 一覧</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>-->
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideMenu',
  data () {
    return {
      isDrawerOpen: true
    }
  }
}
</script>

<style scoped>

</style>
