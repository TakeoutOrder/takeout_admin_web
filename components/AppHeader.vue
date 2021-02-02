<template>
  <header>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="toggleDrawerOpen" />
      <v-toolbar-title>{{ $t('appHeader.serviceName') }}</v-toolbar-title>

      <v-spacer />
      <!--<v-text-field
        solo
        dense
        hide-details
        :label="$t('appHeader.search')"
        prepend-inner-icon="mdi-magnify"
      />-->
      <v-btn color="primary" dark class="mr-3">
        {{ $t('appHeader.register') }}
      </v-btn>
      <v-btn to="/auth/login" color="error" dark>
        {{ $t('appHeader.login') }}
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="isDrawerOpen"
      app
      color="grey lighten-3"
      clipped
    >
      <v-list nav dense rounded>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-help-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ $t('appHeader.help') }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { AppHeaderStore } from '~/utils/store-accessor'

@Component
export default class AppHeader extends Vue {
  get isDrawerOpen () {
    return AppHeaderStore.isDrawerOpen
  }

  set isDrawerOpen (afterState: boolean) {
    AppHeaderStore.SET_DRAWER_OPEN(afterState)
  }

  toggleDrawerOpen () {
    AppHeaderStore.TOGGLE_DRAWER_OPEN()
  }
}
</script>

<style scoped>

</style>
