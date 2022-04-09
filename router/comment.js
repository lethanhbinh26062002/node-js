import { Router } from 'express';
import { userById } from '../controllers/auth';
import { comments } from '../controllers/comment';
import { checkAdmin, isAuth, requireSignin } from '../models/middlewares/checkAuth';
const router = Router();

router.post('/comment', comments);

router.param("userId", userById) // Lấy userId từ URL rồi check user có tồn tại  => next()

export default router;