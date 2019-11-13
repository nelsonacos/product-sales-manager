import { Router } from 'express';
import { addProduct, getProducts } from '../controllers/product.controllers';

const router = Router();

router.route('/')
    .get(getProducts)

router.route('/add')
    .post(addProduct)

export default router;