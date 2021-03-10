
export const getUsuarios = () => {

    // A falta de base de datos...
    const usuarios = [
        'twochemist',
        'terepebernal',
        'skcode7',
        'javideveloper',
        'ejdiezfraile',
        'dapaspei',
        'Cainuriel',
        'adriacobo',
        'alexhermida',
        'prinhelmet',
        'ajmasia',
        'ThePinkDeveloper',
        'xurxof',
        'sergioedo',
        'Santi1965',
        'migbara',
        'Esemega',
        'delineas'
    ]

    // A morir de exito!
    usuarios.push(...usuarios)
    usuarios.push(...usuarios)
    usuarios.push(...usuarios)
    usuarios.push(...usuarios)

    return usuarios
}

export const checkUsuario = (usuario) => {
    if (!usuario) {
        return { error: true, text: 'Debe indicar un usuario' }
    } else {
        const usuarioEncontrado = getUsuarios().find(u => u === usuario)
        if (usuarioEncontrado !== undefined) {
            return { error: false }
        } else {
            return { error: true, text: 'El usuario no és valido' }
        }
    }
}