import { getUsuarios } from '../../../modules/usuarios'
import { obtenerInsigniasUsuarios } from '../../../modules/insignias'

// API: Insignias de todos los usuarios
export default async (req, res) => {
    try {
        const usuarios = getUsuarios()
        const insignias = await obtenerInsigniasUsuarios(usuarios)
        res.status(200).json(insignias)
    } catch (error) {
        res.status(500).json({ status: 500, message: `No se han podido obtener los diario de los usuarios` })
    }
}