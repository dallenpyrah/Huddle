import { Auth, browserSessionPersistence, getAuth } from 'firebase/auth'
import * as firebase from 'firebase/app'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
let firebaseApp = {} as firebase.FirebaseApp
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
let auth = {} as Auth

if (process.env.NEXT_PUBLIC_ENV !== null && process.env.NEXT_PUBLIC_ENV !== 'CICD') {
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

  firebaseApp = firebase.initializeApp(firebaseConfig)
  auth = getAuth(firebaseApp)
  void auth.setPersistence(browserSessionPersistence)
}

export { firebaseApp, auth }
