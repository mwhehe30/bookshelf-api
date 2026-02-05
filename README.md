# 📚 Bookshelf API Backend (Hapi.js)

Bookshelf API Backend adalah proyek **RESTful API** sederhana untuk mengelola koleksi buku.  
API ini dibangun menggunakan **Node.js** dan framework **Hapi.js**, dengan arsitektur modular agar mudah dikembangkan.

---

## 🚀 Fitur Utama
- Menambahkan buku baru
- Menampilkan semua buku
- Mencari buku berdasarkan **ID**
- Mengupdate detail buku
- Menghapus buku
- Validasi input agar data lebih konsisten

---

## 📂 Struktur Proyek
```
.
├── src
│   ├── handler.js       # Handler fungsi untuk setiap endpoint
│   ├── routes.js        # Definisi route API
│   ├── books.js         # Data buku (in-memory storage)
│   └── server.js        # Entry point server Hapi
├── package.json
└── README.md
```

---

## ⚡ Instalasi & Menjalankan
1. Clone repository:
   ```bash
   git clone https://github.com/mwhehe30/bookshelf-api.git
   cd bookshelf-api
   git checkout hapi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan server:
   ```bash
   npm run start
   ```

4. Server akan berjalan di:
   ```
   http://localhost:9000
   ```

---

## 🔗 Endpoint API

### 1. Tambah Buku
**POST** `/books`

Request Body:
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

### 2. Lihat Semua Buku
**GET** `/books`

### 3. Lihat Buku by ID
**GET** `/books/{bookId}`

### 4. Update Buku by ID
**PUT** `/books/{bookId}`

### 5. Hapus Buku by ID
**DELETE** `/books/{bookId}`

---

## 🛠 Tools yang Digunakan
- [Node.js](https://nodejs.org/)
- [Hapi.js](https://hapi.dev/)
- [Nodemon](https://nodemon.io/)

---

## 📌 Catatan
- Data disimpan secara **in-memory**, sehingga akan hilang saat server dimatikan.
- Proyek ini dibuat sebagai latihan backend dan submission API.
