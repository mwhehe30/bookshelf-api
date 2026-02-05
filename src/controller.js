import books from './books.js';
import { nanoid } from 'nanoid';

export const getBooks = (req, res) => {
  const { name, reading, finished } = req.query;

  let resultBooks = books;

  if (name) {
    const keyword = name.toLowerCase();
    resultBooks = resultBooks.filter((book) =>
      book.name.toLowerCase().includes(keyword),
    );
  }

  if (reading === '0' || reading === '1') {
    const isReading = reading === '1';
    resultBooks = resultBooks.filter((book) => book.reading === isReading);
  }

  if (finished === '0' || finished === '1') {
    const isFinished = finished === '1';
    resultBooks = resultBooks.filter((book) => book.finished === isFinished);
  }

  return res.status(200).json({
    status: 'success',
    data: {
      books: resultBooks.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
};

export const createBook = (req, res) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = req.body;

  if (name === undefined) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: 'fail',
      message:
        'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });
  }

  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = readPage === pageCount;
  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };
  books.push(newBook);

  return res.status(201).json({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: newBook.id,
    },
  });
};

export const getBook = (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === id);
  if (book === undefined) {
    return res.status(404).json({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    });
  }

  return res.status(200).json({
    status: 'success',
    data: {
      book: book,
    },
  });
};

export const updateBook = (req, res) => {
  const { id } = req.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = req.body;
  const updatedAt = new Date().toISOString();
  const index = books.findIndex((book) => book.id === id);

  if (name === undefined) {
    return res.status(400).json({
      status: 'fail',
      message: 'Gagal memperbarui buku. Mohon isi nama buku',
    });
  }

  if (readPage > pageCount) {
    return res.status(400).json({
      status: 'fail',
      message:
        'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
    });
  }

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };
    return res.status(200).json({
      status: 'success',
      message: 'Buku berhasil diperbarui',
    });
  }

  return res.status(404).json({
    status: 'fail',
    message: 'Gagal memperbarui buku. Id tidak ditemukan',
  });
};

export const deleteBook = (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books.splice(index, 1);
    return res.status(200).json({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
  }

  return res.status(404).json({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
};
