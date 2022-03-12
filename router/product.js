import { Router } from 'express';
import { create, list, real, remove, update } from '../controllers/product';
import { checkAuth } from '../middlewares/checkAuth';
const router = Router();

router.get('/products',checkAuth ,list);
router.get('/product/:id',checkAuth ,real);
router.post('/products',checkAuth ,create);
router.delete('/product/:id',checkAuth ,remove);
router.put('/product/:id',checkAuth ,update);

export default router;