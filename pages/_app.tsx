import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import * as dotenv from 'dotenv'
import { AuthUserProvider } from '../src/auth/contexts/AuthUserContext'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  dotenv.config()

  return (
        <AuthUserProvider>
            <Component {...pageProps} />
        </AuthUserProvider>
  )
}

export default MyApp
