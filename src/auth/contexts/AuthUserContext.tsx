import useFirebaseAuth from '../utils/UseFirebaseAuth'
import { User } from 'firebase/auth'
import React, { createContext, useContext } from 'react'

const authUserContext = createContext({
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  authUser: {} as User | null,
  loading: true,
  userId: 0
})

interface IAuthUserProverProps {
  children: React.ReactNode
}

export function AuthUserProvider (props: IAuthUserProverProps): JSX.Element {
  const auth = useFirebaseAuth()
  return (
        <authUserContext.Provider value={auth}>
            {props.children}
        </authUserContext.Provider>
  )
}

export const useAuth = (): { authUser: User | null, loading: boolean, userId: number } => useContext(authUserContext)
