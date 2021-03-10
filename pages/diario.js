import Head from 'next/head'
import styles from 'github-markdown-css'

export default function Diario() {
  return (
    <div>
      <Head>
        <title>Diario - Reto en pantuflas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="markdown-body">
        <h1>Reto en pantuflas!</h1>
        <h2>Insignias obtenidas:</h2>
        <div id={"humor"}>
          <img id={'grinning'} src='https://img.shields.io/badge/%F0%9F%98%80-0-green.svg' />
          <img id={'neutral_face'} src='https://img.shields.io/badge/%F0%9F%98%90-0-blue.svg' />
          <img id={'frowning_face'} src='https://img.shields.io/badge/%F0%9F%98%95-0-red.svg' />
        </div>
        <div id="insignias"></div>
      </div>
      <main id="diario" className="markdown-body"></main>
    </div>
  )
}
