import Head from 'next/head'
import 'twin.macro'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main tw="min-h-screen flex items-center justify-center">
        <h1>Hello world!</h1>
      </main>
    </>
  )
}
