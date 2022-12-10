import useFirebaseAuth from '../utils/UseFirebaseAuth'
import { User } from 'firebase/auth'
import { createContext, useContext } from 'react'

const authUserContext = createContext({
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  authUser: {} as User | null,
  loading: true,
  userId: 0
})

export function AuthUserProvider ({ children }): JSX.Element {
  const auth = useFirebaseAuth()
  return (
        <authUserContext.Provider value={auth}>
            {children}
        </authUserContext.Provider>
  )
}

export const useAuth = (): { authUser: User | null, loading: boolean, userId: number } => useContext(authUserContext)
