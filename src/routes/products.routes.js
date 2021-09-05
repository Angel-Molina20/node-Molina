import {Router} from 'express'
const router = Router()

import * as ProductController from '../controllers/products.controller'
import {verifyToken} from '../middlewares'

router.get('/', ProductController.ObtenerProducto)
router.post('/',verifyToken, ProductController.CrearProducto)
router.get('/:productID', ProductController.ObtenerProductoID)
router.put('/:productID', ProductController.ActualizarProductoID)
router.delete('/:productID', ProductController.EliminarProductoID)

export default router;