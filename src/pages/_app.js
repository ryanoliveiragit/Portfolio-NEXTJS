import React, { Fragment } from "react"
import { GlobalStyle } from "../styles/GlobalStyle"
import SEO from '../components/SEO/next-seo-config'
import {DefaultSeo} from 'next-seo'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
