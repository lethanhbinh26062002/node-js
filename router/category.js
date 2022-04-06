import { Router } from 'express';
import { create, list, real, remove, update } from '../controllers/category';

const router = Router();

router.post("/category", create);
router.get("/category/:id", real);
router.get("/category", list);
router.delete("/category/:id", remove);
router.put("/category/:id", update)
export default router;