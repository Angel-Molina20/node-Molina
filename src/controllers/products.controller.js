import Product from '../models/Product'

export const CrearProducto = async (req, res) =>{
    const {name, category, price, imgUrl} = req.body
    const nuevoProducto = new Product({name,category,price,imgUrl})
    const productoGuardado = await nuevoProducto.save()
    res.status(201).json(productoGuardado)
}

export const ObtenerProducto = async (req, res) =>{
    const productos = await Product.find()
    res.json(productos)
}

export const ObtenerProductoID = async (req, res) =>{
    const producto = await Product.findById(req.params.productID);
    res.status(200).json(producto)
}

export const ActualizarProductoID = async (req, res) =>{
    const ActualizarProducto = await Product.findByIdAndUpdate(req.params.productID, req.body,{
        new: true
    })
    res.status(200).json(ActualizarProducto) 
}

export const EliminarProductoID = async (req, res) =>{
    const {productID} = req.params;
    await Product.findByIdAndDelete(productID)
    res.status(204).json() 
}