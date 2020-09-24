import express from 'express'
import bodyParser from 'body-parser'
import * as admin from 'firebase-admin'
import * as serviceAccountKey from '../serviceAccountKey.json'
import DecodedIdToken = admin.auth.DecodedIdToken;

require('dotenv').config({ path: './.env' })

// initialize firebase-admin when it hasn't been initialized yet.
if (!admin.apps.length) {
  admin.initializeApp({
    // @ts-ignore
    credential: admin.credential.cert(serviceAccountKey)
  })
}

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/**
 * /server/user : get `UserRecord` from user`s `idToken`
 *
 * User's `idToken` has to be give by `Request.body.token'
 * When `Request.body.token` is empty, `null`, `undefined`,
 * or expired, send `null`
 * Otherwise, send user's `UserRecord`
 *
 * /server/user : User の `idToken` から `UserRecord` を取得します.
 *
 * `Request.body.token` に User の `idToken` を与えてください.
 * `Request.body.token` が 空文字列, `null`, `undefined`
 * または `idToken` の有効期限が切れている場合, `null` を送信します.
 * それ以外の場合, User の `UserRecord` を送信します.
 */
app.post('/user', (req, res) => {
  const token = req.body.token
  if (token) {
    admin.auth().verifyIdToken(req.body.token).then(async (decodedIdToken: DecodedIdToken) => {
      const uid = decodedIdToken.uid
      if (uid) {
        const user = await admin.auth().getUser(uid)
        res.send(user)
      }
    }).catch(() => res.send(null))
  } else {
    res.send(null)
  }
})

module.exports = app
