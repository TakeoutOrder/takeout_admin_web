import { Middleware } from '@nuxt/types'
import { UserStore } from '~/store'

/**
 * 非ログインの場合, `/login`にリダイレクトさせる middleware.
 *
 * @param route
 * @param redirect
 */
const middleware: Middleware = ({ redirect }) => {
  if (!UserStore.isAuthenticated) {
    redirect('/auth/login')
  }
}

export default middleware
