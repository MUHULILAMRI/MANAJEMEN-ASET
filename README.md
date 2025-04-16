# MANAJEMEN-ASET

SIMBAH-SDA adalah aplikasi berbasis web untuk mengelola aset dan barang pakai habis di Sub Bagian Umum (Aset) Dinas SDA CK-TR Sulawesi Selatan. Aplikasi ini menggunakan algoritma **Support Vector Machine (SVM)** untuk melakukan prediksi kebutuhan barang berdasarkan pola penggunaan historis, meningkatkan efisiensi dalam perencanaan pengadaan dan pengelolaan stok barang.

---

## 💻 Fungsi Umum Aplikasi

SIMBAH-SDA bertujuan untuk:

- Mengelola data barang habis pakai dan aset.
- Menyediakan prediksi kebutuhan barang untuk membantu pengadaan yang lebih efisien.
- Mengotomatisasi pelaporan pengelolaan barang.
- Memudahkan pelacakan penggunaan barang dan manajemen stok secara real-time.

---

## ⚙️ Spesifikasi Fitur Aplikasi

### 1. Manajemen Data Barang
- **CRUD Barang**: Menambahkan, memperbarui, dan menghapus data barang.
- **Pengelolaan Stok**: Input barang masuk dan keluar, serta pemberitahuan stok rendah.
- **API**:
  - `POST /api/items` → Tambah barang baru
  - `GET /api/items` → Ambil data barang
  - `PUT /api/items/:id` → Edit data barang
  - `DELETE /api/items/:id` → Hapus barang
  - `POST /api/stock-in` → Stok masuk
  - `POST /api/stock-out` → Stok keluar

### 2. Riwayat Penggunaan
- **Log Penggunaan Barang**: Menyimpan log penggunaan barang.
- **Filter & Ekspor**: Menampilkan histori berdasarkan tanggal, kategori, dan pengguna. Menyediakan opsi untuk mengunduh laporan dalam format PDF atau Excel.
- **API**:
  - `GET /api/usage/history` → Riwayat penggunaan
  - `GET /api/usage/export?type=pdf|excel` → Ekspor riwayat

### 3. Prediksi Pengadaan (SVM)
- **Prediksi Kebutuhan Barang**: Menggunakan algoritma **SVM** untuk memprediksi kebutuhan barang di masa mendatang.
- **API**:
  - `POST /api/predict/items` → Prediksi kebutuhan barang berdasarkan data historis

### 4. Manajemen Pengguna
- **Autentikasi dan Otorisasi**: Sistem login berbasis JWT dengan role Admin, Staff, dan Auditor.
- **API**:
  - `POST /api/auth/login` → Login pengguna
  - `POST /api/auth/register` → Registrasi pengguna baru
  - `GET /api/users` → Daftar pengguna (Admin saja)

### 5. Pelaporan Otomatis
- **Laporan Bulanan**: Otomatis membuat laporan bulanan berdasarkan penggunaan dan prediksi kebutuhan.
- **Ekspor Laporan**: Mengunduh laporan dalam format PDF.
- **API**:
  - `POST /api/reports/monthly` → Membuat laporan bulanan
  - `GET /api/reports/download?month=xx` → Mengunduh laporan

---

