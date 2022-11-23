import { browserSessionPersistence, getAuth } from 'firebase/auth'
import * as firebase from 'firebase/app'
import pino from 'pino'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

const logger = pino()
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
