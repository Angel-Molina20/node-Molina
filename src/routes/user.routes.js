import {Router} from 'express'
const router = Router()

import * as userController from '../controllers/user.controller'
import {authJwt} from '../middlewares'


router.post('/', [
    authJwt.verifyToken,
    authJwt.isModerator,
    authJwt.isAdmin
], userController.createUser)

export default router;