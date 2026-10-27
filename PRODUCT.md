# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Pria Muslim dewasa** di Indonesia yang mencari pakaian harian/occasion yang nyaman dan rapi (koko, kurta, jubah)
- **Orang tua** (ayah/ibu) yang membeli pakaian Muslim untuk anak laki-laki mereka, seringkali setelan ayah-anak

Kedua audiens ini sama-sama utama.

## Product Purpose

Azmee Store adalah landing page e-commerce fashion Muslim Indonesia yang menampilkan dan menjual pakaian Muslim pria dan anak laki-laki. Tujuannya adalah membantu keluarga Muslim menemukan pakaian yang nyaman, rapi, untuk kehidupan sehari-hari dan acara spesial, mendorong pembelian melalui marketplace eksternal (TikTok Shop, Shopee) dan WhatsApp.

Keberhasilan berarti pengunjung menemukan produk yang sesuai kebutuhan, percaya kualitasnya, dan menyelesaikan pembelian di marketplace yang ditautkan.

## Positioning

**Kombinasi Nyaman + Rapi.** Pakaian Azmee Store nyaman (adem/nyaman) DAN terlihat rapi/formal — kombinasi yang tidak dimiliki banyak produk fashion Muslim kompetitor di TikTok Shop dan Shopee. Ini adalah pembeda utama.

## Operating Context

- Pengunjung datang dari media sosial (TikTok, Instagram) atau pencarian, biasanya dari perangkat mobile
- Perjalanan pembelian: browse landing page → buka halaman detail produk → diarahkan ke TikTok Shop atau Shopee untuk checkout
- WhatsApp digunakan untuk layanan pelanggan, pertanyaan ukuran, dan pemesanan langsung
- Bahasa Indonesia sepenuhnya (Bahasa Indonesia)
- Tidak ada keranjang, checkout, atau pemrosesan pembayaran di situs — semua transaksi terjadi di platform eksternal

## Capabilities and Constraints

- Landing page + halaman detail per produk di `/produk/<slug>`, tanpa backend
- Semua data produk hardcoded di `src/data/content.ts`
- Halaman detail di-prerender saat build (`scripts/prerender.mjs`) agar judul, deskripsi, canonical, dan JSON-LD unik per produk
- Gambar produk adalah aset statis (webp/jpg) di `src/assets/images/`
- 6 produk saat ini terdaftar, masing-masing punya halaman detail dan tertaut ke URL marketplace
- Bagian Pricing Packages sudah ada tapi saat ini dinonaktifkan di kode
- Link kebijakan footer (Privasi, Syarat, Pengiriman, Pengembalian) adalah placeholder `#`
- Supabase client terinstal tapi belum digunakan — tidak ada env vars yang dikonfigurasi
- Tidak ada test suite, tidak ada CI/CD
- Tech: React 18, TypeScript, Vite 5, Tailwind CSS 3, Lucide React
- Bahasa terkunci ke Indonesia (`lang="id"`)

## Brand Commitments

- **Nama:** Azmee Store
- **Tagline:** "Fashion Muslim Pria & Anak"
- **Palet warna:** Skala coksu hangat (50-950), krem, beige, off-white, charcoal — ini penting untuk identitas brand
- **Tipografi:** Plus Jakarta Sans (Google Fonts), bobot 400-800
- **Suara:** Hangat, meyakinkan, berorientasi keluarga. Menekankan kenyamanan, praktis, dan kerapian. Santai tapi sopan.
- **Logo:** `logo.webp` di aset
- **Meta theme color:** `#6B462B` (coksu-800)
- **Domain:** `azmee-store.my.id`

## Evidence on Hand

- 6 listing produk dengan gambar, harga, badge, dan link TikTok Shop
- 4 testimonial pelanggan dari Bandung, Jakarta, Surabaya
- 8 item FAQ yang mencakup ukuran, perawatan, pemesanan
- Stat bukti sosial: 1.000+ pelanggan, rating 4.9/5, 16.000+ produk terjual
- Link layanan pelanggan: WhatsApp, TikTok, 2x Shopee, Lynk
- 3 paket harga (saat ini dinonaktifkan di kode)

## Product Principles

1. **Nyaman dulu, selalu.** Setiap produk dan pesan harus memperkuat adem dan nyaman sebagai janji inti
2. **Rapi tanpa usaha.** Pakaian harus terlihat presentable tanpa setrika atau ribet — praktis untuk kehidupan sibuk
3. **Berorientasi keluarga.** Toko melayani seluruh keluarga — setelan ayah dan anak bersama
4. **Harga transparan.** Tampilkan harga nyata dengan diskon jelas, tanpa biaya tersembunyi
5. **Kualitas terjangkau.** Kain premium dengan titik harga yang terjangkau untuk keluarga Indonesia sehari-hari
