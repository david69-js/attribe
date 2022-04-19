import Layout from '../components/Layout'
import Head from 'next/head'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Wellspring - Attribution you can trust</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  ) 
}

export default MyApp
