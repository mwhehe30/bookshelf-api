```md
# 📚 Bookshelf API Backend (Express.js)

Bookshelf API Backend adalah proyek **RESTful API** sederhana untuk mengelola koleksi buku.  
API ini dibangun menggunakan **Node.js** dan **Express.js**, dengan struktur modular agar mudah dikembangkan dan dirawat.

---

## 🚀 Fitur Utama
- Menambahkan buku
- Menampilkan semua buku
- Menampilkan detail buku berdasarkan ID
- Mengubah data buku
- Menghapus buku
- Validasi input request

---

## 📂 Struktur Proyek
```

.
├── src
│   ├── books.js        # Data buku (in-memory)
│   ├── controller.js   # Logic handler request
│   ├── routes.js       # Definisi endpoint Express
│   └── server.js       # Entry point Express server
├── .env
├── .gitignore
├── eslint.config.js
├── package.json
└── package-lock.json

````

---

## ⚡ Instalasi & Menjalankan

1. Clone repository:
```bash
git clone https://github.com/mwhehe30/bookshelf-api.git
cd bookshelf-api
````

2. Install dependencies:

```bash
npm install
```

3. Jalankan server:

```bash
npm run start
```

Mode development (jika tersedia):

```bash
npm run dev
```

Server berjalan di:

```
http://localhost:9000
```

---

## 🔗 Endpoint API

### Tambah Buku

**POST** `/books`

```json
{
  "name": "Clean Code",
  "year": 2008,
  "author": "Robert C. Martin",
  "summary": "Panduan menulis kode yang bersih.",
  "publisher": "Prentice Hall",
  "pageCount": 464,
  "readPage": 30,
  "reading": true
}
```

---

### Lihat Semua Buku

**GET** `/books`

---

### Lihat Buku by ID

**GET** `/books/:bookId`

---

### Update Buku by ID

**PUT** `/books/:bookId`

---

### Hapus Buku by ID

**DELETE** `/books/:bookId`

---

## 🛠 Teknologi

* Node.js
* Express.js
* ESLint

---

## 📌 Catatan

* Data disimpan secara **in-memory** (array JavaScript)
* Data akan ter-reset ketika server dimatikan
* Cocok untuk pembelajaran REST API dan submission Dicoding

```
```
