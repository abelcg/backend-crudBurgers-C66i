/* const productController = {}

productController.showProduct = (req, res) => {
    res.send('Listar producto')
}

export default productController; */

import { validationResult } from 'express-validator';
import Product from '../models/product';

const showProduct = async (req, res) => {
  //res.send('Lista de productos');
  try {
    //obtener un arraeglo con los productos de la BD
    const productList = await Product.find();
    res.status(200).json(productList);
  } catch {
    res.status(404).json({ message: 'Error searching for requested products' });
  }
};

const getOne = async (req, res) => {
  //res.send('el producto encontrado');
  try {
    //buscar el producto en mi BD por su id
    const productFound = await Product.findById(req.params.id);
    res.status(200).json(productFound);
  } catch {
    res.status(404).json({ message: 'Error searching for requested product' });
  }
};

const createProduct = async (req, res) => {
  //res.send('se creó el producto')
  const { productName, price, urlImg, category } = req.body;

  try {
    console.log(req.body);
    //validar
   /*  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.send({ errors: errors.array() });
    } */

    //crear el objeto para guardarlo en la BD
    const newProduct = new Product({
      /* productName: req.body.productName,
      price: req.body.price,
      urlImg: req.body.urlImg,
      category: req.body.category, */

      productName,
      price,
      urlImg,
      category,
    });

    //guardar en BD
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error creating product' + error });
  }
};

const updateProduct = async (req, res) => {
  //res.send('se actualizó el producto');
  try {
    //buscar el producto en la BD ppr su id y actualizarlo
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: 'Product updated successfully' });
  } catch {
    res.status(404).json({ message: 'Error searching for requested product' });
  }
};

const deleteProduct = async (req, res) => {
  //res.send('se borró el producto');
  const { id } = req.params;
  try {
    //buscar el producto por su id en la BD y borrarlo
    //console.log(req.params.id);
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch {
    res.status(404).json({ message: 'Error searching for requested product' });
  }
};

export { showProduct, createProduct, getOne, updateProduct, deleteProduct };
