import Head from 'next/head'
import {
  Banner,
  Experience,
  Footer,
  Header,
  Projects
} from '@/components'
import { data } from '@/utils/constants'

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.tabTitle}</title>
        <meta name="description" content="Tamara | Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="mx-10 lg:mx-32 mt-10">
          <Banner />
          <Experience />
          <Projects />
          <Footer />
        </div>
      </main>
    </>
  )
}
