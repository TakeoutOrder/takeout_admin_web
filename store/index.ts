import { Store } from 'vuex'
import { getUserFromIdToken } from '~/helper'
import { initialiseStores, UserStore } from '~/utils/store-accessor'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'

export const actions = {
  nuxtServerInit: async (_: any, context: any) => {
    const userRecord = await getUserFromIdToken(context.$cookies.get('access_token'))
    if (userRecord) {
      UserStore.setUserInfo({
        uid: userRecord.uid,
        admin: userRecord.customClaims?.admin
      })
    }
  }
}
