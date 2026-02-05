# 📚 Bookshelf API Backend — Express.js

RESTful API sederhana untuk mengelola koleksi buku.  
Project ini dibuat menggunakan **Node.js** dan **Express.js** dengan struktur modular.

---

## 🚀 Fitur
- Tambah buku
- Ambil semua buku
- Ambil buku berdasarkan ID
- Update buku
- Hapus buku
- Validasi input

---

## 📂 Struktur Folder
```
.
├── src
│   ├── books.js          # In-memory data buku
│   ├── controller.js     # Logic handler
│   ├── routes.js         # Routing Express
│   └── server.js         # Entry point server
├── .env
├── .gitignore
├── eslint.config.js
├── package.json
└── package-lock.json
```

---

## ⚙️ Instalasi
```bash
git clone https://github.com/mwhehe30/bookshelf-api.git
cd bookshelf-api
npm install
```

---

## ▶️ Menjalankan Server
```bash
npm run start
```

Atau mode development:
```bash
npm run dev
```

Server berjalan di:
```
http://localhost:9000
```

---

## 🔗 Endpoint API

### ➕ Tambah Buku
**POST** `/books`

```json
{
  "name": "Clean Code",
  "year": 2008,
  "author": "Robert C. Martin",
  "summary": "Panduan menulis kode yang bersih",
  "publisher": "Prentice Hall",
  "pageCount": 464,
  "readPage": 100,
  "reading": true
}
```

---

### 📖 Ambil Semua Buku
**GET** `/books`

---

### 🔍 Ambil Buku by ID
**GET** `/books/:bookId`

---

### ✏️ Update Buku
**PUT** `/books/:bookId`

---

### 🗑 Hapus Buku
**DELETE** `/books/:bookId`

---

## 🛠 Tech Stack
- Node.js
- Express.js
- ESLint

---

## 📌 Catatan
- Data disimpan **in-memory**
- Data akan hilang saat server restart
- Cocok untuk latihan REST API / submission Dicoding
