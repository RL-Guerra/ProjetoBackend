import { Router } from 'express';
import { addBook } from '../controllers/bookController';

const router = Router();

router.post("/api", addBook);

export default router;
