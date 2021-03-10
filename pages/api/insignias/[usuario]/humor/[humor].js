import { checkUsuario } from '../../../../../modules/usuarios'
import { obtenerInsigniasUsuarios } from '../../../../../modules/insignias'
import { createProxyMiddleware } from 'http-proxy-middleware'

// API: insignias con shields.io
export default async (req, res) => {
    try {
        const { usuario, humor } = req.query
        const check = checkUsuario(usuario)
        if (check.error) {
            res.status(400).json({ status: 400, message: check.text })
        } else {
            const insignias = await obtenerInsigniasUsuarios([usuario])
            const insigniasUsuario = insignias[0]
            const proxy = await createProxyMiddleware({
                target: 'https://img.shields.io/',
                changeOrigin: true,
                pathRewrite: (path, reqProxy) => {
                    const emojiHumor = obtenerEmojiDeHumor(humor)
                    const colorHumor = obtenerColorDeHumor(humor)
                    const humorUsuario = insigniasUsuario && insigniasUsuario.humor[humor] || 0
                    return `/badge/${emojiHumor}-${humorUsuario}-${colorHumor}`
                }
            })
            return proxy(req, res)
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: `No se ha podido obtener el diario del usuario ${usuario}` })
    }
}

const obtenerEmojiDeHumor = (humor) => {
    const emojisHumor = {
        grinning: '%F0%9F%98%80',
        neutral_face: '%F0%9F%98%90',
        frowning_face: '%F0%9F%98%95'
    }
    return emojisHumor[humor] || 'humor'
}

const obtenerColorDeHumor = (humor) => {
    const colorHumor = {
        grinning: 'green',
        neutral_face: 'blue',
        frowning_face: 'red'
    }
    return colorHumor[humor] || 'inactive'
}