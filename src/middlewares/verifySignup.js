import { noCache } from "helmet"
import { ROLES } from "../models/Role"

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
