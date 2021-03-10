import { getUsuarios } from '../../modules/usuarios'
import { obtenerDiarioUsuario } from '../../modules/diarios'
import { obtenerHumorDiario, calcularInsigniasDiario } from '../../modules/insignias'

const obtenerInsigniasUsuarios = (usuarios) => {
    const commit = 'main'
    const asyncInsignias = usuarios.map(usuario => {
        return obtenerDiarioUsuario(usuario, commit)
            .then(diarioMD => {
                const humor = obtenerHumorDiario(diarioMD)
                const insignias = calcularInsigniasDiario(diarioMD)
                return { usuario, humor, insignias }
            })
    })
    return Promise.all(asyncInsignias)
        .then(insignias => {
            const insigniasOrdenadas = insignias.sort((a, b) => (a.usuario.toLowerCase() > b.usuario.toLocaleLowerCase()) ? 1 : -1)
            return insigniasOrdenadas
        })
}

// API: Insignias de todos los usuarios
export default (req, res, next) => {
    const usuarios = getUsuarios()
    obtenerInsigniasUsuarios(usuarios)
        .then(insignias => {
            res.status(200).json(insignias)
        })
        .catch(error => {
            res.status(500).json({ status: 500, message: `No se han podido obtener los diario de los usuarios` })
        })
}