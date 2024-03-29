import { useEffect, useState } from 'react'
import { firebaseApp } from '../../../firebase-config'
import { getAuth, User } from 'firebase/auth'
import { appContainer } from '../../../inversify/container'
import { IFireBaseUserService } from '../interfaces/service/IFireBaseService'
import { TYPES } from '../../../inversify/types'

const fireBaseUserService = appContainer.get<IFireBaseUserService>(TYPES.FireBaseUserService)

export default function useFirebaseAuth (): { authUser: User | null, loading: boolean, userId: number } {
  const [authUser, setAuthUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<number>(0)

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
    const unsubscribe = getAuth(firebaseApp).onAuthStateChanged((user) => {
      void authStateChanged(user)
    })
    return () => unsubscribe()
  }, [])

  return {
    authUser,
    loading,
    userId
  }
}
