import { checkUsuario } from '../../../../modules/usuarios'
import { obtenerInsigniasUsuarios } from '../../../../modules/insignias'

// API: Insignias de todos los usuarios
export default async (req, res) => {
    try {
        const { usuario } = req.query
        console.log(usuario)
        const check = checkUsuario(usuario)
        if (check.error) {
            res.status(400).json({ status: 400, message: check.text })
        } else {
            const insignias = await obtenerInsigniasUsuarios([usuario])
            res.status(200).json(insignias[0])
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: `No se ha podido obtener el diario del usuario ${usuario}` })
    }
}