import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MyGlobalContext } from '../context/GlobalContext'
import React from 'react'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  return (
    <MyGlobalContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Component {...pageProps} />
    </MyGlobalContext.Provider>
  )
}

export default MyApp
