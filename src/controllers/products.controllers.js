/* const productController = {}

productController.showProduct = (req, res) => {
    res.send('Listar producto')
}

export default productController; */

const showProduct = (req, res) => {
    res.send('Lista de productos')
}

const getOne = (req, res) => {
    res.send('el producto encontrado')
}

const createProduct = (req, res) => {
    res.send('se creó el producto')
}

const updateProduct = (req, res) => {
    res.send('se actualizó el producto')
}

const deleteProduct = (req, res) => {
    res.send('se borró el producto')
}



export { showProduct, createProduct, getOne, updateProduct, deleteProduct }
