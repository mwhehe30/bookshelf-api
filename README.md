# 📚 Bookshelf API Backend (Express.js)

Bookshelf API Backend adalah proyek **RESTful API** sederhana untuk mengelola koleksi buku.  
API ini dibangun menggunakan **Node.js** dan framework **Express.js**, dengan struktur modular agar mudah dikembangkan dan dipelihara.

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
│   ├── books.js         # Data dummy (in-memory storage)
│   ├── controller.js    # Logic handler untuk setiap endpoint
│   ├── routes.js        # Definisi route API
│   └── server.js        # Entry point server Express
├── .env
├── eslint.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚡ Instalasi & Menjalankan
1. Clone repository:
   ```bash
   git clone https://github.com/mwhehe30/bookshelf-api.git
   cd bookshelf-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan server:
   ```bash
   npm run start
   ```
   atau mode development:
   ```bash
   npm run dev
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
**GET** `/books/:bookId`

### 4. Update Buku by ID
**PUT** `/books/:bookId`

### 5. Hapus Buku by ID
**DELETE** `/books/:bookId`

---

## 🛠 Tools yang Digunakan
- Node.js
- Express.js
- Nodemon
- ESLint

---

## 📌 Catatan
- Data masih disimpan secara **in-memory** (array JavaScript), sehingga akan hilang setelah server dimatikan.  
- Branch lain pada repository ini menggunakan framework **Hapi.js**.
