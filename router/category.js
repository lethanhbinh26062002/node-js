import { Router } from 'express';
import { create, real } from '../controllers/category';

const router = Router();

router.post("/category", create);
router.get("/category/:id", real);

export default router;