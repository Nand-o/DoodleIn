# DoodleIn
# 🎨 DoodleIn - Website Komersial Fiktif

![Logo DoodleIn](./assets/Logo-readme.svg)

**Slogan:** _Fuse your imagination with DoodleIn’s doodle art to craft truly unique items._

Ini adalah proyek pengembangan web front-end untuk mata kuliah Perancangan dan Pemrograman WEB (PPW). Tujuannya adalah untuk membangun website multi-halaman yang fungsional dan responsif untuk brand fiktif bernama **DoodleIn**, yang berfokus pada produk dan jasa seni doodle.

---
## Halaman Website

Website ini terdiri dari beberapa halaman utama, masing-masing dengan fitur dan tujuannya sendiri.

### ### 1. Landing Page (`index.html`)
Halaman utama yang berfungsi sebagai gerbang utama untuk memperkenalkan pengunjung pada dunia DoodleIn.
* **Hero Section**: Tampilan pembuka dengan headline yang kuat dan deskripsi singkat tentang seni doodle.
* **About Section**: Pengenalan singkat tentang brand dengan pola latar belakang melengkung yang dibuat menggunakan CSS Pseudo-elements.
* **Infinite Scrolling Gallery**: Galeri produk unggulan yang bergerak secara otomatis dan tanpa henti (efek *marquee*) menggunakan CSS Animations. Kartu produk memiliki efek *hover* interaktif.
* **Motto/CTA Section**: Bagian penutup yang berisi slogan utama brand dan ajakan untuk berkreasi.

### ### 2. Products & Services Page (`product.html`)
Halaman yang didedikasikan untuk menampilkan semua penawaran dari DoodleIn secara lebih rinci.
* **Dua Slider Utama**: Terdapat dua slider terpisah, satu untuk "Products" dan satu lagi untuk "Services".
* **Navigasi Interaktif**: Setiap slider dilengkapi dengan tombol navigasi (sebelumnya/berikutnya) yang fungsional, dikendalikan oleh JavaScript.
* **Layout Asimetris**: Slider "Services" memiliki layout yang dibalik (`row-reverse`) untuk menciptakan tata letak yang dinamis dan menarik secara visual.

### ### 3. About Page (`about.html`)
Halaman yang menceritakan misi dan visi dari brand DoodleIn.
* **Branding Utama**: Menampilkan logo dan slogan "Our Goal Is Put Smile In Your Face" secara menonjol.
* **CTA Ganda**: Di bagian bawah, terdapat dua kolom *call-to-action* yang bisa di-klik untuk mengarahkan pengguna ke halaman Produk atau halaman Order. Fungsionalitas klik ini diatur oleh JavaScript.

### ### 4. Order Page (`order.html`)
Halaman *checkout* sederhana di mana pengguna dapat menyelesaikan pesanan mereka.
* **Layout Dua Kolom**: Sisi kiri berisi judul "ORDER NOW!", sementara sisi kanan menampilkan ringkasan pesanan.
* **Modal Interaktif**: Fitur utamanya adalah modal "Terima Kasih" yang akan muncul secara otomatis setelah tombol "Place Order" di-klik, dan akan hilang setelah 3 detik. Ini dibuat menggunakan JavaScript `setTimeout`.

---
## Teknologi yang Digunakan

Proyek ini dibangun dari awal menggunakan teknologi web dasar tanpa *framework* eksternal.

* **HTML5 (Semantik)**: Penggunaan tag semantik modern seperti `<main>`, `<section>`, `<header>`, dan `<nav>` untuk struktur yang bersih dan ramah SEO.
* **CSS3 (Modern & Responsif)**:
    * **Flexbox & Grid**: Untuk membangun layout yang kompleks dan responsif.
    * **CSS Variables**: Untuk manajemen tema dan warna yang efisien.
    * **CSS Animations (`@keyframes`)**: Digunakan untuk membuat efek *infinite scrolling gallery*.
    * **Fluid Typography (`clamp()`)**: Untuk ukuran font yang beradaptasi secara mulus di berbagai ukuran layar.
* **JavaScript (ES6)**:
    * **DOM Manipulation**: Untuk mengontrol slider dan interaksi lainnya.
    * **Intersection Observer API**: Untuk mengubah warna header secara dinamis saat scroll.
    * **Event Listeners**: Untuk menangani semua interaksi pengguna seperti klik tombol.

---
## Setup & Instalasi

Untuk menjalankan proyek ini secara lokal:
1.  Clone repository ini.
2.  Buka file `.html` menggunakan ekstensi **Live Server** di Visual Studio Code.

Dibuat oleh **Ernando Febrian - 1313624021 - Ilmu Komputer - Universitas Jakarta**
