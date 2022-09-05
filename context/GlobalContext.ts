import { createContext, useContext } from "react"

export type GlobalContent = {
  isAuthenticated: boolean
  setIsAuthenticated:(authenticated: boolean) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
    isAuthenticated: false,
    setIsAuthenticated: (authenticated: boolean) => {}
})

export const useGlobalContext = () => useContext(MyGlobalContext)