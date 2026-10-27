# Lapak Nusantara - Katalog Produk UMKM

Website katalog produk UMKM dengan pencarian, filter kategori, urutan harga, galeri, dan tombol pesan lewat WhatsApp.

## Teknologi
HTML, Tailwind CSS 3, JavaScript (tanpa framework)

## Fitur
- 12 produk dalam 3 kategori
- Pencarian, filter kategori, dan urutan harga
- Tombol "Pesan via WhatsApp" dengan pesan otomatis
- Tema terang dan gelap
- Responsif di HP dan desktop

## Struktur folder
```
katalog-umkm/
├── index.html          kerangka halaman
├── css/
│   ├── input.css       sumber CSS (Tailwind + warna tema)
│   └── style.css       hasil build, dipakai oleh index.html
├── js/
│   ├── products.js     nomor WhatsApp dan daftar produk
│   └── app.js          logika halaman
├── img/                gambar produk
├── tailwind.config.js
└── package.json
```

## Cara menjalankan
Buka `index.html` di browser, atau pakai ekstensi Live Server.

## Mengubah data
- Nomor WhatsApp: `js/products.js`, variabel `WA` (tanpa + dan tanpa 0 di depan).
- Produk: array `P` di `js/products.js` (nama, gambar, kategori, harga, label, deskripsi).
- Foto produk: simpan di `img/`, lalu ubah properti `i` produk, contoh `i:"img/kopi.jpg"`.

## Mengubah tampilan (Tailwind)
`css/style.css` adalah hasil build. Kalau menambah class Tailwind baru, build ulang:
```
npm install
npm run build
```
Selama pengembangan, `npm run dev` membangun ulang otomatis.

## Deploy
Projek ini statis. Upload folder ke GitHub lalu hubungkan ke Vercel, atau jalankan `vercel --prod`.
