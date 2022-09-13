import { Fragment } from 'react'
import Page from '../components/SEO/page'
import SEO from '../components/SEO/next-seo-config'
import {DefaultSeo} from 'next-seo'

export default function Home() {
  return (
    <Fragment>
      <DefaultSeo {...SEO} />
      <Page title="Ryan" description="Frontend developer" path="/">
        <h1>Ryanvs</h1>
      </Page>
    </Fragment>
  )
}
