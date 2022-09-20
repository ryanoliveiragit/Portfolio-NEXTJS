/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { Fragment } from 'react'
import Page from '../components/SEO/page'
import Layout from '../components/layout'
import Header from '../components/header'
import { Title } from '../styles/pages'
import { Gap } from '../styles/pages'
import Cards from '../components/Cards'
import SectionName from '../components/Section-name'
import About from '../components/About'
import Experience from '../components/Experiences'
import TheServices from '../components/TheServices'
import Footer from '../components/footer'

export default function Home() {
  return (
    <Fragment>
      <Page title="Ryan Portfólio" description="Frontend developer" path="/">
        <Header />
        <Layout>
          <Title />
          <SectionName />
        </Layout>
        <Gap />
        <Layout>
          <About />
          <Experience />
          <Cards />
          <TheServices />
        </Layout>
        <Footer />
      </Page>
    </Fragment>
  )
}
