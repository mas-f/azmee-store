import { getProductBySlug, type FaqItem, type Product } from '@/data/content';

export type CollectionHighlight = {
  title: string;
  description: string;
};

export type Collection = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  intro: string;
  paragraphs: string[];
  highlights: CollectionHighlight[];
  faq: FaqItem[];
  productSlugs: string[];
};

export const collections: Collection[] = [
  {
    slug: 'baju-koko-pria',
    name: 'Baju Koko Pria',
    shortName: 'Baju Koko',
    title: 'Baju Koko Pria Lengan 3/4 & Modern | Azmee Store',
    description:
      'Baju koko pria dengan bahan katun Toyobo, lengan 3/4, dan potongan modern. Adem, tidak mudah kusut, ukuran S–4XL. Harga mulai Rp125.000.',
    intro:
      'Baju koko pria yang rapi tanpa mengorbankan kenyamanan. Potongan modern dengan katun Toyobo yang adem untuk cuaca Indonesia.',
    paragraphs: [
      'Koleksi baju koko pria Azmee Store dibuat untuk pemakaian harian maupun acara. Pilih koko kurta Pakistan dengan lis kerah, atau versi polos dengan tiga kantong yang lebih minimal.',
      'Katun Toyobo dipilih karena ringan, tidak mudah kusut, dan tetap nyaman dipakai dalam waktu lama. Tersedia ukuran S sampai 4XL dengan warna netral yang mudah dipadukan dengan celana panjang, sarung, atau alas kaki favorit Anda.',
      'Butuh baju koko untuk Lebaran, kajian, kantor, atau acara keluarga? Mulai dari model yang paling sesuai, lalu cek tabel ukuran di halaman produk. Kalau masih ragu, tim kami bisa membantu lewat WhatsApp.',
    ],
    highlights: [
      { title: 'Lengan 3/4', description: 'Nyaman untuk cuaca panas dan tetap terlihat rapi.' },
      { title: 'Katun Toyobo', description: 'Ringan, adem, dan tidak mudah kusut.' },
      { title: 'Ukuran S–4XL', description: 'Cek tabel ukuran agar hasilnya pas di badan.' },
    ],
    faq: [
      {
        question: 'Apa beda baju koko dan koko kurta?',
        answer:
          'Baju koko adalah sebutan umum untuk atasan muslim pria. Koko kurta di Azmee Store mengacu pada potongan kurta Pakistan dengan lengan 3/4 dan detail lis. Keduanya bisa dipakai untuk acara formal maupun harian.',
      },
      {
        question: 'Apakah baju koko tersedia ukuran besar?',
        answer:
          'Ya. Beberapa model tersedia sampai ukuran 4XL. Buka halaman produk untuk melihat tabel ukuran dan stok ukuran yang tersedia.',
      },
      {
        question: 'Bagaimana cara merawat baju koko Toyobo?',
        answer:
          'Cuci dengan air dingin, hindari pemutih, lalu jemur di tempat teduh. Setrika dengan suhu sedang agar bahan tetap awet.',
      },
    ],
    productSlugs: ['baju-koko-kurta-pakistan-pria-dewasa', 'koko-kurta-pakistan-pria-dewasa-lengan-3-4-polos'],
  },
  {
    slug: 'koko-kurta',
    name: 'Koko Kurta Pakistan Pria',
    shortName: 'Koko Kurta',
    title: 'Koko Kurta Pakistan Pria Lengan 3/4 | Azmee Store',
    description:
      'Koko kurta Pakistan pria dengan lengan 3/4, lis kerah, dan bahan katun Toyobo. Ukuran S–4XL, harga mulai Rp125.000. Adem dan tetap rapi.',
    intro:
      'Koko kurta dengan potongan Pakistan, lengan 3/4, dan bahan katun Toyobo. Pilihan rapi untuk ibadah, acara, dan pemakaian sehari-hari.',
    paragraphs: [
      'Koko kurta adalah atasan muslim pria yang menggabungkan potongan koko dengan detail kurta. Di Azmee Store, model ini hadir dengan lis di kerah, saku, dan lengan, sehingga terlihat rapi tanpa banyak aksesori.',
      'Bahan katun Toyobo memberi rasa adem dan lembut. Potongan lengan 3/4 membantu menjaga pergerakan tangan tetap nyaman, terutama saat cuaca panas atau saat beraktivitas seharian.',
      'Tersedia dua pilihan: koko kurta dengan lis dan versi polos tiga kantong. Keduanya bisa dipadukan dengan celana panjang, sarung, atau celana chino untuk acara formal maupun santai.',
    ],
    highlights: [
      { title: 'Detail lis', description: 'Lis kerah, saku, dan lengan membuat tampilan lebih rapi.' },
      { title: 'Lengan 3/4', description: 'Lebih leluasa dan nyaman untuk cuaca tropis.' },
      { title: 'Katun Toyobo', description: 'Adem, lembut, dan mudah dirawat.' },
    ],
    faq: [
      {
        question: 'Apa itu koko kurta?',
        answer:
          'Koko kurta adalah atasan muslim pria dengan potongan kurta, biasanya berleher tinggi dan berlengan panjang atau 3/4. Model ini populer karena terlihat rapi untuk acara formal maupun harian.',
      },
      {
        question: 'Apakah koko kurta cocok untuk acara formal?',
        answer:
          'Cocok. Pilih warna netral seperti putih, hitam, atau abu tua, lalu padukan dengan celana panjang dan alas kaki tertutup untuk tampilan yang lebih formal.',
      },
      {
        question: 'Bagaimana memilih ukuran koko kurta?',
        answer:
          'Ukur lingkar dada dan panjang badan, lalu bandingkan dengan tabel ukuran di halaman produk. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar untuk kenyamanan.',
      },
    ],
    productSlugs: ['baju-koko-kurta-pakistan-pria-dewasa', 'koko-kurta-pakistan-pria-dewasa-lengan-3-4-polos'],
  },
  {
    slug: 'jubah-pria',
    name: 'Jubah Pria Dewasa',
    shortName: 'Jubah Pria',
    title: 'Jubah Pria Dewasa Toyobo & Katun | Azmee Store',
    description:
      'Jubah pria dewasa lengan panjang dari katun Toyobo. Adem, tidak mudah kusut, ukuran S–XXL. Harga Rp190.000. Cocok untuk ibadah dan acara.',
    intro:
      'Jubah pria dewasa dengan lengan panjang, tiga kantong, dan bahan katun Toyobo. Nyaman untuk ibadah, acara keluarga, maupun pemakaian harian.',
    paragraphs: [
      'Koleksi jubah pria Azmee Store hadir dalam dua gaya: polos minimalis dan lis kerah yang lebih formal. Keduanya memakai katun Toyobo yang adem dan lembut, dengan jahitan rapi untuk pemakaian jangka panjang.',
      'Tiga kantong membantu menyimpan barang kecil saat beraktivitas. Potongan panjang dan longgar memberi ruang gerak, sementara warna netral seperti hitam dan abu tua mudah dipadukan dengan peci, sarung, atau sandal.',
      'Tersedia ukuran S sampai XXL. Sebelum memesan, cocokkan lingkar dada, lebar bahu, dan panjang jubah dengan tabel ukuran. Tim kami juga siap membantu memilih ukuran lewat WhatsApp.',
    ],
    highlights: [
      { title: 'Katun Toyobo', description: 'Bahan adem dan lembut untuk pemakaian lama.' },
      { title: 'Tiga kantong', description: 'Satu kantong dada dan dua kantong samping.' },
      { title: 'Ukuran S–XXL', description: 'Tersedia pilihan ukuran untuk pria dewasa.' },
    ],
    faq: [
      {
        question: 'Apa beda jubah polos dan jubah lis kerah?',
        answer:
          'Jubah polos memiliki tampilan minimalis tanpa detail tambahan. Jubah lis kerah menambahkan garis kontras di bagian kerah sehingga terlihat lebih formal.',
      },
      {
        question: 'Berapa ukuran jubah pria dewasa?',
        answer:
          'Tersedia ukuran S, M, L, XL, dan XXL. Setiap produk memiliki tabel ukuran lingkar dada, lebar bahu, panjang jubah, dan panjang tangan.',
      },
      {
        question: 'Apakah jubah bisa dipakai harian?',
        answer:
          'Bisa. Pilih model polos untuk pemakaian harian dan model lis kerah untuk acara yang lebih formal.',
      },
    ],
    productSlugs: [
      'jubah-pria-dewasa-lengan-panjang-polos-toyobo',
      'jubah-pria-dewasa-lis-kerah-lengan-panjang-katun-toyobo',
    ],
  },
  {
    slug: 'jubah-anak-laki-laki',
    name: 'Jubah Anak Laki-Laki',
    shortName: 'Jubah Anak',
    title: 'Jubah Anak Laki-Laki Lengan Panjang | Azmee Store',
    description:
      'Jubah anak laki-laki lengan panjang dari Toyobo, ukuran No. 02–14. Nyaman untuk harian, ibadah, dan acara keluarga. Harga mulai Rp129.000.',
    intro:
      'Jubah anak laki-laki yang ringan dan mudah dipakaikan. Tersedia ukuran kecil sampai besar untuk ibadah, acara keluarga, dan pemakaian harian.',
    paragraphs: [
      'Anak perlu pakaian yang nyaman agar bisa bergerak bebas. Jubah anak Azmee Store memakai bahan Toyobo yang ringan, adem, dan tidak mudah kusut, sehingga tetap rapi meski dipakai seharian.',
      'Tersedia model tiga kantong dengan ukuran No. 02 sampai No. 14. Untuk anak usia 8–15 tahun, pilih jubah gamis dengan ukuran No. 08–14 yang potongannya lebih panjang.',
      'Gunakan tabel ukuran dengan mengukur panjang jubah dan lingkar dada anak. Jika anak sedang tumbuh cepat atau berada di antara dua ukuran, pilih ukuran yang lebih besar agar bisa dipakai lebih lama.',
    ],
    highlights: [
      { title: 'Ukuran No. 02–14', description: 'Dari anak kecil sampai usia sekolah.' },
      { title: 'Bahan adem', description: 'Toyobo yang ringan dan nyaman untuk aktivitas.' },
      { title: 'Mudah dipakaikan', description: 'Potongan longgar dan tidak membatasi gerak.' },
    ],
    faq: [
      {
        question: 'Jubah anak ukuran apa untuk umur 8 tahun?',
        answer:
          'Umumnya ukuran No. 08 atau No. 10, tergantung tinggi dan lingkar dada anak. Cocokkan dengan tabel ukuran di halaman produk sebelum memesan.',
      },
      {
        question: 'Apakah bahan jubah anak adem?',
        answer:
          'Ya. Jubah anak Azmee Store memakai Toyobo yang ringan dan adem, cocok untuk cuaca Indonesia.',
      },
      {
        question: 'Apakah tersedia ukuran untuk anak umur 2 tahun?',
        answer:
          'Untuk model jubah anak laki-laki, ukuran terkecil adalah No. 02. Cek tabel ukuran untuk memastikan panjang dan lingkar dadanya sesuai.',
      },
    ],
    productSlugs: [
      'jubah-anak-laki-laki-lengan-panjang',
      'jubah-gamis-muslim-anak-laki-laki-lengan-panjang-polos',
    ],
  },
  {
    slug: 'jubah-gamis-anak',
    name: 'Jubah Gamis Anak Laki-Laki',
    shortName: 'Jubah Gamis Anak',
    title: 'Jubah Gamis Anak Laki-Laki Polos | Azmee Store',
    description:
      'Jubah gamis anak laki-laki lengan panjang polos, bahan Toyobo Fodu Ori. Ukuran No. 08–14 untuk usia 8–15 tahun. Harga Rp129.000.',
    intro:
      'Jubah gamis anak laki-laki dengan potongan panjang, tiga kantong, dan bahan Toyobo Fodu Ori. Rapi untuk ibadah dan acara keluarga.',
    paragraphs: [
      'Jubah gamis anak laki-laki Azmee Store dirancang untuk anak usia 8–15 tahun. Potongan panjang dan longgar memberi kenyamanan saat beribadah, sekolah agama, atau menghadiri acara keluarga.',
      'Bahan Toyobo Fodu Ori terasa lembut dan adem. Tiga kantong memudahkan anak menyimpan barang kecil, sementara warna polos membuat jubah mudah dipadukan dengan peci dan sandal.',
      'Tersedia ukuran No. 08, 10, 12, dan 14. Tabel ukuran mencantumkan perkiraan usia, panjang jubah, lingkar dada, dan panjang lengan agar Anda lebih mudah memilih.',
    ],
    highlights: [
      { title: 'Usia 8–15 tahun', description: 'Ukuran No. 08 sampai No. 14.' },
      { title: 'Toyobo Fodu Ori', description: 'Lembut, adem, dan tidak mudah kusut.' },
      { title: 'Tiga kantong', description: 'Praktis untuk pemakaian sehari-hari.' },
    ],
    faq: [
      {
        question: 'Apa beda jubah dan gamis anak?',
        answer:
          'Di Azmee Store, jubah gamis anak mengacu pada model panjang dengan potongan gamis. Untuk model yang lebih pendek, lihat koleksi jubah anak laki-laki.',
      },
      {
        question: 'Ukuran apa untuk anak usia 10 tahun?',
        answer:
          'Umumnya No. 10 atau No. 12. Cocokkan tinggi, lingkar dada, dan panjang jubah anak dengan tabel ukuran di halaman produk.',
      },
      {
        question: 'Apakah jubah gamis anak ada kantongnya?',
        answer:
          'Ada. Model ini memiliki tiga kantong: satu di dada dan dua di bagian samping.',
      },
    ],
    productSlugs: ['jubah-gamis-muslim-anak-laki-laki-lengan-panjang-polos'],
  },
  {
    slug: 'baju-muslim-pria',
    name: 'Baju Muslim Pria',
    shortName: 'Baju Muslim Pria',
    title: 'Baju Muslim Pria: Koko, Kurta & Jubah | Azmee Store',
    description:
      'Koleksi baju muslim pria: baju koko, koko kurta, dan jubah dari bahan adem. Ukuran lengkap, harga mulai Rp125.000. Beli di Azmee Store.',
    intro:
      'Baju muslim pria untuk ibadah, acara, dan pemakaian harian. Pilih baju koko, koko kurta, atau jubah dengan bahan yang adem dan potongan yang rapi.',
    paragraphs: [
      'Azmee Store menyediakan baju muslim pria dengan tiga gaya utama: baju koko, koko kurta, dan jubah. Semua model memakai bahan katun Toyobo yang ringan, adem, dan tidak mudah kusut.',
      'Baju koko dan koko kurta cocok untuk acara formal maupun santai. Jubah memberi tampilan yang lebih panjang dan longgar untuk ibadah atau acara keluarga. Pilih sesuai kebutuhan, lalu sesuaikan ukuran dengan tabel di halaman produk.',
      'Koleksi ini terus dilengkapi dengan warna dan ukuran baru. Kalau Anda mencari model tertentu, hubungi kami lewat WhatsApp agar tim dapat membantu mengecek ketersediaan.',
    ],
    highlights: [
      { title: 'Bahan adem', description: 'Katun Toyobo untuk cuaca tropis.' },
      { title: 'Tiga gaya', description: 'Baju koko, koko kurta, dan jubah.' },
      { title: 'Ukuran lengkap', description: 'Dari S sampai 4XL untuk pria dewasa.' },
    ],
    faq: [
      {
        question: 'Apa saja pilihan baju muslim pria di Azmee Store?',
        answer:
          'Ada baju koko, koko kurta Pakistan, jubah polos, dan jubah lis kerah. Semua tersedia di halaman koleksi dan halaman produk masing-masing.',
      },
      {
        question: 'Bagaimana memilih bahan untuk cuaca panas?',
        answer:
          'Pilih katun Toyobo yang ringan dan adem. Bahan ini tidak mudah kusut dan nyaman dipakai dalam waktu lama.',
      },
      {
        question: 'Apakah tersedia ukuran besar?',
        answer:
          'Beberapa model baju koko dan koko kurta tersedia sampai 4XL. Cek tabel ukuran di halaman produk untuk memastikan ukuran yang sesuai.',
      },
    ],
    productSlugs: [
      'baju-koko-kurta-pakistan-pria-dewasa',
      'koko-kurta-pakistan-pria-dewasa-lengan-3-4-polos',
      'jubah-pria-dewasa-lengan-panjang-polos-toyobo',
      'jubah-pria-dewasa-lis-kerah-lengan-panjang-katun-toyobo',
    ],
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((collection) => collection.slug === slug);
}

export function getCollectionProducts(collection: Collection): Product[] {
  return collection.productSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is Product => Boolean(product));
}

export function getCollectionForProduct(product: Product): Collection | undefined {
  return getCollectionBySlug(product.collectionSlug);
}
