import { Router } from 'express';
import { userList, signUp, signIn } from '../controllers/user';
const router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/users', userList);

export default router;