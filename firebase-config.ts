import { browserSessionPersistence, getAuth } from 'firebase/auth'
import * as firebase from 'firebase/app'
import pino from 'pino'

const logger = pino()

const firebaseConfig = {
  apiKey: 'AIzaSyDo9w_q2OjAF5k2BUv1V_0HNw8wjbLmZYQ',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

const app = firebase.initializeApp(firebaseConfig)

const auth = getAuth(app)

auth.onAuthStateChanged((user) => {
  if (user !== null) {
    logger.info(user)
  } else {
    logger.info('No user is signed in.')
  }
})
void auth.setPersistence(browserSessionPersistence)

export { auth }
