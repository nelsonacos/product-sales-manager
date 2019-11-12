import { Router } from 'express';
import { helloWorld } from '../controllers/product.controllers';

const router = Router();

router.route('/')
    .get(helloWorld)

export default router;