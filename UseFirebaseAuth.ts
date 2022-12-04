import { useEffect, useState } from 'react'
import { firebaseApp } from './firebase-config'
import { getAuth, User } from 'firebase/auth'
import FireBaseUserService from './services/firebase-user/FireBaseUserService'
import { axiosService } from './services/axios/AxiosService'

export default function useFirebaseAuth (): { authUser: User | null, loading: boolean, userId: number } {
  const [authUser, setAuthUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<number>(0)
  const fireBaseUserService = new FireBaseUserService(axiosService)

  const authStateChanged = async (authState: User | null): Promise<void> => {
    if (authState == null) {
      setAuthUser(null)
      setLoading(false)
      return
    }

    const user = await fireBaseUserService.getUserByFireBaseId(authState.uid)

    if (user.id <= 0) {
      setUserId(0)
      setLoading(true)
      return
    }

    setAuthUser(authState)
    setLoading(false)
    setUserId(user.id)
  }

  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = getAuth(firebaseApp).onAuthStateChanged((user) => { void authStateChanged(user) })
    return () => unsubscribe()
  }, [])

  return {
    authUser,
    loading,
    userId
  }
}
