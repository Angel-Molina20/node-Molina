import { ROLES } from "../models/Role"
import User from "../models/User"


export const CheckDuplicatedUsernameOrEmail = async (req, res, next)=>{
    const user = await User.findOne({username: req.body.username})
    if(user) return res.status(400).json({message: "the user already exist"})
    const email = await User.findOne({email: req.body.username})
    if(email) return res.status(400).json({message: "the email already exist"})

    next()
}

export const CheckRolesExisted = (req, res, next) =>{
    if(req.body.roles){
        for(let i = 0; i<req.body.roles.lenght; i++){
            if(!ROLES.includes(re.body.roles[i])){
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} doesn not exist`
                })
            }
            
        }
    }
    next();
}
