import User from '../models/User'
import jwt from 'jsonwebtoken'
import moduleName from '../config'
import Role from '../models/Role';


export const signup = async (req, res) => {
    const {username, email, password, roles} = req.body;

    const nuevoUsuario = new User({
        username,
        email,
        password: await User.encryptPassword(password)
    })

    if(roles){
       const EncontrarRoles = await Role.find({name: {$in:roles}})
       nuevoUsuario.roles = EncontrarRoles.map(role => role._id)
    }else{
        const role = await Role.findOne({name: "user"})
        nuevoUsuario.roles = [role._id]
    }

    const usuarioGuardado = await nuevoUsuario.save()
    console.log(usuarioGuardado)

    const token = jwt.sign({id: usuarioGuardado._id}, moduleName.SECRET,{
        expiresIn: 86400
    })
    res.status(200).json({token})

}

export const signin = async (req, res) => {

    const UsuarioEncontrado = await User.findOne({email: req.body.email}).populate("roles")
    if(!UsuarioEncontrado) return res.status(400).json({message:"User not found"})

    const matchPassword = await User.comparePassword(req.body.password, UsuarioEncontrado.password)
    if(!matchPassword) return res.status(401).json({token: null, message:"Contraseña invalida"})

    console.log(UsuarioEncontrado)
    const token = jwt.sign({id: UsuarioEncontrado._id}, moduleName.SECRET,{
        expiresIn: 86400
    })
    res.json({token})
}