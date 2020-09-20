import Vuex from 'vuex'
import Vue from 'vue'
import { getUserFromIdToken } from '~/helper'
import { UserStore } from '~/store/user/user'

Vue.use(Vuex)
export const store = new Vuex.Store({})

export const actions = {
  nuxtServerInit: async (_: any, req: any) => {
    const userRecord = await getUserFromIdToken(req.$cookies.get('access_token'))
    if (userRecord) {
      UserStore.setUserInfo({
        uid: userRecord.uid,
        admin: userRecord.customClaims?.admin
      })
    }
  }
}
