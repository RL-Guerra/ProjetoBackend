import { Request, Response } from 'express';
import { BookRepository } from '../repositories/bookRepository';
import { isValidTitle } from '../helpers/validationHelper';

const bookRepository = new BookRepository();

export const addBook = async (req: Request, res: Response) => {
  const { title, author, price } = req.body;

  if (!isValidTitle(title)) {
    return res.status(400).json({ error: 'O título deve ter pelo menos 3 caracteres.' });
  }

  const book = await bookRepository.addBook(title, author, price);
  res.status(201).json(book);
};
