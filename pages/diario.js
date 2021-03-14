import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from 'github-markdown-css'
import MarkdownIt from 'markdown-it'
import { obtenerDiarioUsuario } from '../modules/diarios'

export default function Diario() {
  const router = useRouter()
  const usuario = router.query.usuario
  const commit = 'main'

  const [diarioMD, setDiarioMD] = useState('')
  const [diarioHTML, setDiarioHTML] = useState('')

  useEffect(() => {
    if (usuario) {
      obtenerDiarioUsuario(usuario, commit)
        .then(diarioMD => {
          setDiarioMD(diarioMD)
        })
    }
  }, [usuario, commit])

  useEffect(() => {
    const md = new MarkdownIt({
      html: true
    })
    setDiarioHTML(md.render(diarioMD))
  }, [diarioMD])

  return (
    <div>
      <Head>
        <title>Diario - Reto en pantuflas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="markdown-body">
        <h1>Reto en pantuflas!</h1>
        <h2>Insignias obtenidas:</h2>
        {usuario &&
          <div id={"humor"}>
            <img id={'grinning'} src={`/api/insignias/${usuario}/humor/grinning`} />
            <img id={'grinning'} src={`/api/insignias/${usuario}/humor/neutral_face`} />
            <img id={'grinning'} src={`/api/insignias/${usuario}/humor/frowning_face`} />
          </div>
        }
        <div id="insignias"></div>
      </div>
      <br />
      <main id="diario" className="markdown-body" dangerouslySetInnerHTML={{ __html: diarioHTML }}></main>
    </div>
  )
}
