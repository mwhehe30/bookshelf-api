import { Router } from 'express';
import {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} from './controller.js';

const router = Router();

router.get('/books', getBooks);
router.post('/books', createBook);
router.get('/books/:id', getBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;
