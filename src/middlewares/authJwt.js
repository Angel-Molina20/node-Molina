import config from '../config'
import  jwt  from "jsonwebtoken"
import User from '../models/User'


export const verifyToken = async(req, res, next) =>{
    try {
        const token = req.headers["x-access-token"]
    console.log(token)

    if(!token) return res.status(403).json({message: "no token provider"})

    const decoded = jwt.verify(token, config.SECRET)
    req.userId = decoded.id

    const user = await User.findById(req.userId, {password:0})
    if(!user) return res.status(404).json({message:"Usuario no encontrado"})
    next()
    } catch (error) {
        return res.status(401).json({message:'token no valido'})
    }
}

export const isModerator = async(req, res, next) =>{

}

export const isAdmin = async(req, res, next) =>{
    
}