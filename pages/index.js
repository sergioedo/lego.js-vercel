import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido al <a href="/api/insignias">API de Insignias</a>
        </h1>

        <div className={styles.grid}>
          <a href="/diario?usuario=sergioedo" className={styles.card}>
            <h3>Diario del reto &rarr;</h3>
            <p>Consulta el detalle de un diario del reto en Pantuflas.</p>
          </a>

          <a href="/comunidad" className={styles.card}>
            <h3>Insignias de Comunidad &rarr;</h3>
            <p>Mira como ganan insignias los Malandriners</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Malandriners{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
