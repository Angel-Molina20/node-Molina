import {Router} from 'express'
const router = Router()

import * as ProductController from '../controllers/products.controller'
import {authJwt} from '../middlewares'

router.get('/', ProductController.ObtenerProducto)
router.post('/', [authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin], ProductController.CrearProducto)
router.get('/:productID', ProductController.ObtenerProductoID)
router.put('/:productID',[authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin], ProductController.ActualizarProductoID)
router.delete('/:productID', [authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin], ProductController.EliminarProductoID)

export default router;