import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Patate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my demo app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p className="description">
          Get started by editing clicking contact page:
          <Link href="/contacts">
            <a>Click here ;-)</a>
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}
