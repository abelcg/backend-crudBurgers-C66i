import { check } from 'express-validator';
import validationsResults from '../helpers/validationsResults';

/* const productValidate = [
  check('productName', 'El nombre del producto es obligatorio').notEmpty(),
  check(
    'productName',
    'El nombre del producto debe tener entre 2 a 100 caracteres'
  ).isLength({ min: 2, max: 100 }),
  check('price', 'el precio es obligatorio').notEmpty(),
  check('price').custom((value) => {
    if (value >= 0 && value <= 10000) {
      return true;
    } else {
      throw new Error('El precio debe de estar entre 0 y 10000');
    }
  }),

  (req, res, next) => {
    validationsResults(req, res, next);
  },
];
 */


const productValidate = [
  check('productName')
  .notEmpty()
  .withMessage('El nombre del producto es obligatorio')
  .isLength({ min: 2, max: 100 })
  .withMessage('El nombre del producto debe tener entre 2 a 100 caracteres'),
  check('price')
  .notEmpty()
  .withMessage('el precio es obligatorio')
  .custom((value) => {
    if (value >= 0 && value <= 10000) {
      return true;
    } else {
      throw new Error('El precio debe de estar entre 0 y 10000');
    }
  }),

  (req, res, next) => {
    validationsResults(req, res, next);
  },
];

export default productValidate;
