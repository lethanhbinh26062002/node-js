import { Router } from 'express';
import { userById } from '../controllers/auth';
import { create, list, real, remove, search, update } from '../controllers/product';
import { checkAdmin, isAuth, requireSignin } from '../models/middlewares/checkAuth';
const router = Router();

router.get('/products', list);
router.get('/products/:id', real);
router.post('/product/:userId', requireSignin, isAuth, checkAdmin, create);
router.delete('/products/:userId/:id', requireSignin, isAuth, checkAdmin, remove);
router.put('/products/:userId/:id/edit', requireSignin, isAuth, checkAdmin, update);
router.post('/search',search);
router.param("userId", userById) // Lấy userId từ URL rồi check user có tồn tại  => next()

export default router;