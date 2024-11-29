// controllers/bookController.ts

import { Request, Response } from 'express';
import { BookRepository } from '../repositories/bookRepository';
import { isValidTitle, isValidAuthor, isValidPrice } from '../helpers/validationHelper';

const bookRepository = new BookRepository();

export const addBook = async (req: Request, res: Response) => {
  const { title, author, price } = req.body;

  // Validação do título
  if (!isValidTitle(title)) {
    return res.status(400).json({ error: 'O título deve ter pelo menos 3 caracteres.' });
  }

  // Validação do autor
  if (!isValidAuthor(author)) {
    return res.status(400).json({ error: 'O autor deve ter pelo menos 3 caracteres e não pode conter números ou caracteres especiais.' });
  }

  // Validação do preço
  if (!isValidPrice(price)) {
    return res.status(400).json({ error: 'O preço deve ser maior que zero.' });
  }

  // Se passar nas validações, cria o livro
  try {
    const book = await bookRepository.addBook(title, author, price);
    res.status(201).json(book);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getBook = async (req: Request, res: Response) => {
  const books = await bookRepository.getAllBooks();
  res.status(200).json(books);
};