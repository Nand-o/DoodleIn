// js/about-page.js

document.addEventListener('DOMContentLoaded', () => {
    // Pilih elemen div berdasarkan id yang sudah kita tambahkan
    const productsDiv = document.querySelector('#cta-products');
    const orderDiv = document.querySelector('#cta-order');

    // Pastikan elemennya ada sebelum menambahkan event listener
    if (productsDiv) {
        productsDiv.addEventListener('click', () => {
            // Arahkan ke halaman produk
            window.location.href = './product.html';
        });
    }

    if (orderDiv) {
        orderDiv.addEventListener('click', () => {
            // Arahkan ke halaman order (ganti '#' dengan link yang benar jika sudah ada)
            window.location.href = './order.html'; 
        });
    }
});
