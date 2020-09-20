import { auth } from 'firebase-admin'
import { $axios } from '~/utils/api'

/**
 * Get `UserRecord` from user's `idToken` <br>
 *
 * UserRecord` を User の `idToken` から取得します.
 *
 * @param idToken: User's `idToken` / User の `idToken`
 */
export async function getUserFromIdToken (idToken: string) {
  return await $axios.$post('/server/user', { token: idToken }) as auth.UserRecord
}
