import { Router} from 'express';
import { createProduct, deleteProduct, getOne, showProduct, updateProduct } from '../controllers/products.controllers';
//import productController from '../controllers/products.controllers';

//crear la instancia del router
const router = Router();

//crear mis rutas

router
.route('/products')
//.get(productController.showProduct)
.get(showProduct)
.post(createProduct)


router.route('/products/:id')
.get(getOne)
.put(updateProduct)
.delete(deleteProduct)


export default router;

