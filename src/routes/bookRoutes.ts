import { Router } from 'express';
import { addBook, getBook } from '../controllers/bookController';

const router = Router();

router.post("/api", addBook);
router.get("/api", getBook);

export default router;
