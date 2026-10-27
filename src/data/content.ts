import {
  Wind,
  Feather,
  Shirt,
  Hand,
  BadgeCheck,
  RefreshCcw,
  Scissors,
  type LucideIcon,
} from 'lucide-react';

import kurtaAlfariz from '@/assets/images/02-kurta-34wm.jpg';
import kurtaAlfariz1 from '@/assets/images/02-kurta-34wm-1.jpg';
import kurtaAlfariz2 from '@/assets/images/02-kurta-34wm-2.jpg';
import kurtaAlfariz3 from '@/assets/images/02-kurta-34wm-3.jpg';
import kurtaAlfariz4 from '@/assets/images/02-kurta-34wm-4.jpg';
import kurtaAlfariz5 from '@/assets/images/02-kurta-34wm-5.jpg';
import kurtaAlfariz6 from '@/assets/images/02-kurta-34wm-6.jpg';
import kurtaAlfariz7 from '@/assets/images/02-kurta-34wm-7.jpg';
import kurtaAlfarizSize from '@/assets/images/02-kurta-34wm-size.webp';

import jallpt from '@/assets/images/03-jallpt.jpeg';
import jallpt1 from '@/assets/images/03-jallpt-1.jpeg';
import jallpt2 from '@/assets/images/03-jallpt-2.png';
import jallpt3 from '@/assets/images/03-jallpt-3.jpeg';
import jallpt4 from '@/assets/images/03-jallpt-4.jpeg';
import jallpt5 from '@/assets/images/03-jallpt-5.jpeg';
import jallpt6 from '@/assets/images/03-jallpt-6.jpeg';
import jallptSize from '@/assets/images/03-jallpt-size.webp';

import kurtaHitam from '@/assets/images/04-kurta.jpg';
import kurtaHitam1 from '@/assets/images/04-kurta-1.jpg';
import kurtaHitam2 from '@/assets/images/04-kurta-2.jpg';
import kurtaHitam3 from '@/assets/images/04-kurta-3.jpg';
import kurtaHitam4 from '@/assets/images/04-kurta-4.jpg';
import kurtaHitamSize from '@/assets/images/04-kurta-size.webp';

import polHitam from '@/assets/images/05-pol.jpg';
import polHitamSize from '@/assets/images/05-pol-size.webp';

import lkAbuTua from '@/assets/images/06-LK-ABUTUA.jpg';
import lkAbuTuaSize from '@/assets/images/06-LK-ABUTUA-size.webp';

import jallpo from '@/assets/images/07-jubah-anak-laki-laki-lengan-panjang-polos.jpg';
import jallpo01 from '@/assets/images/07-jubah-anak-laki-laki-lengan-panjang-polos-01.jpg';
import jallpo02 from '@/assets/images/07-jubah-anak-laki-laki-lengan-panjang-polos-02.jpg';
import jallpo03 from '@/assets/images/07-jubah-anak-laki-laki-lengan-panjang-polos-03.jpg';
import jallpo04 from '@/assets/images/07-jubah-anak-laki-laki-lengan-panjang-polos-04.jpg';
import jallpo05 from '@/assets/images/07-jubah-anak-laki-laki-lengan-panjang-polos-05.jpg';
import jallpo06 from '@/assets/images/07-jubah-anak-laki-laki-lengan-panjang-polos-06.jpg';
import jallpo07 from '@/assets/images/07-jubah-anak-laki-laki-lengan-panjang-polos-07.jpg';
import jallpo08 from '@/assets/images/07-jubah-anak-laki-laki-lengan-panjang-polos-08.jpg';
import jallpo09 from '@/assets/images/07-jubah-anak-laki-laki-lengan-panjang-polos-09.jpg';
import jallpo10 from '@/assets/images/07-jubah-anak-laki-laki-lengan-panjang-polos-10.jpg';
import jallpo11 from '@/assets/images/07-jubah-anak-laki-laki-lengan-panjang-polos-11.jpg';
import jallpoSize from '@/assets/images/07-jubah-anak-laki-laki-lengan-panjang-polos-size.webp';

export type DescriptionBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] };

export type ProductSpec = {
  label: string;
  value: string;
};

export type SizeChart = {
  columns: string[];
  rows: string[][];
  note?: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  rating: number;
  image: string;
  images: string[];
  alt: string;
  badge?: string;
  url?: string;
  highlights: string[];
  description: DescriptionBlock[];
  specs: ProductSpec[];
  sizeGuideImage: string;
  sizeGuideAlt: string;
  sizeNote?: string;
  sizeChart?: SizeChart;
  sizes?: string[];
};

export type ValueItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type StorePromise = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Package = {
  name: string;
  description: string;
  price: string;
  cta: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    slug: 'baju-koko-kurta-pakistan-pria-dewasa',
    name: 'Baju Koko Kurta Pakistan Pria Dewasa',
    category: 'Koko Kurta Pria',
    price: 'Rp125.120 - Rp135.320',
    oldPrice: 'Rp184.000 - Rp199.000',
    rating: 4.9,
    image: kurtaAlfariz,
    images: [
      kurtaAlfariz,
      kurtaAlfariz1,
      kurtaAlfariz2,
      kurtaAlfariz3,
      kurtaAlfariz4,
      kurtaAlfariz5,
      kurtaAlfariz6,
      kurtaAlfariz7,
    ],
    alt: 'Baju Koko Kurta Pakistan Pria Dewasa',
    badge: 'Terlaris',
    url: 'https://vt.tokopedia.com/t/ZS9B118CpcdYs-Bisrx/',
    highlights: ['Katun Toyobo', 'Lengan 3/4', 'Lis kerah & saku'],
    description: [
      {
        type: 'paragraph',
        text: 'Baju koko kurta Pakistan pria dewasa dengan lengan 3/4 dan lis pada kerah, saku, serta lengan. Potongan modern yang tetap sopan untuk acara formal maupun non-formal.',
      },
      { type: 'heading', text: 'Bahan katun Toyobo' },
      {
        type: 'paragraph',
        text: 'Katun Toyobo yang lembut dan adem, nyaman dipakai di cuaca tropis. Fodu yang lembut menambah kenyamanan sehingga Anda bisa memakainya sepanjang hari.',
      },
      { type: 'heading', text: 'Tampil percaya diri' },
      {
        type: 'paragraph',
        text: 'Detail lis membuat penampilan terlihat rapi tanpa banyak usaha. Mudah dipadukan dengan celana panjang maupun sarung untuk berbagai kesempatan.',
      },
    ],
    specs: [
      { label: 'Bahan', value: 'Katun Toyobo' },
      { label: 'Lengan', value: '3/4 dengan lis' },
      { label: 'Kantong', value: 'Saku dengan lis' },
      { label: 'Ukuran', value: 'Lihat panduan ukuran' },
    ],
    sizeGuideImage: kurtaAlfarizSize,
    sizeGuideAlt: 'Panduan ukuran Baju Koko Kurta Pakistan Pria Dewasa',
    sizeNote: 'Toleransi selisih 1–2 cm.',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
  },
  {
    slug: 'jubah-anak-laki-laki-lengan-panjang',
    name: 'Jubah Anak Laki-Laki Lengan Panjang',
    category: 'Jubah Anak',
    price: 'Rp 129.000',
    rating: 4.9,
    image: jallpt,
    images: [jallpt, jallpt1, jallpt2, jallpt3, jallpt4, jallpt5, jallpt6],
    alt: 'Jubah Anak Laki-Laki Lengan Panjang',
    badge: 'Terlaris',
    url: 'https://vt.tokopedia.com/t/ZS9koErDyrWMx-K3npk/',
    highlights: ['Bahan Toyobo', '3 kantong', 'Ukuran No. 02–14'],
    description: [
      {
        type: 'paragraph',
        text: 'Jubah anak laki-laki lengan panjang dengan bahan Toyobo. Model tiga kantong: satu kantong dada, satu kantong pinggang sebelah kanan, dan satu kantong pinggang sebelah kiri.',
      },
      {
        type: 'paragraph',
        text: 'Ringan, adem, dan mudah dipakaikan — nyaman untuk aktivitas harian maupun acara keluarga.',
      },
    ],
    specs: [
      { label: 'Bahan', value: 'Toyobo' },
      { label: 'Lengan', value: 'Panjang' },
      { label: 'Kantong', value: '3 kantong' },
      { label: 'Ukuran', value: 'No. 02, 04, 06, 08, 10, 12, 14' },
    ],
    sizeGuideImage: jallptSize,
    sizeGuideAlt: 'Panduan ukuran Jubah Anak Laki-Laki Lengan Panjang',
    sizeChart: {
      columns: ['Ukuran', 'Panjang Jubah', 'Lingkar Dada', 'Panjang Lengan'],
      rows: [
        ['No. 02', '70 cm', '60 cm', '27 cm'],
        ['No. 04', '80 cm', '68 cm', '31 cm'],
        ['No. 06', '85 cm', '76 cm', '34 cm'],
        ['No. 08', '90 cm', '84 cm', '38 cm'],
        ['No. 10', '100 cm', '92 cm', '42 cm'],
        ['No. 12', '110 cm', '—', '46 cm'],
        ['No. 14', '120 cm', '100 cm', '48 cm'],
      ],
      note: 'Lingkar dada No. 12 belum tercatat pada data produk asli.',
    },
    sizes: ['No. 02', 'No. 04', 'No. 06', 'No. 08', 'No. 10', 'No. 12', 'No. 14'],
  },
  {
    slug: 'koko-kurta-pakistan-pria-dewasa-lengan-3-4-polos',
    name: 'Koko Kurta Pakistan Pria Dewasa Lengan 3/4 Polos',
    category: 'Koko Kurta',
    price: 'Rp 125.000 - Rp 139.000',
    oldPrice: 'Rp 179.000',
    rating: 4.9,
    image: kurtaHitam,
    images: [kurtaHitam, kurtaHitam1, kurtaHitam2, kurtaHitam3, kurtaHitam4],
    alt: 'Koko Kurta Pakistan Pria Dewasa Lengan 3/4 Polos',
    badge: 'Baru',
    url: 'https://vt.tokopedia.com/t/ZS9kooSmos6rD-6h8UI/',
    highlights: ['Katun Toyobo Fodu', '3 kantong', '5 pilihan warna'],
    description: [
      {
        type: 'paragraph',
        text: 'Baju koko kurta Pakistan pria dewasa dengan lengan 3/4 dan bahan katun Toyobo Fodu. Potongan polos yang bersih, mudah dipadukan, dan tetap terlihat rapi.',
      },
      { type: 'heading', text: 'Spesifikasi produk' },
      {
        type: 'list',
        items: [
          'Bahan: Katun Toyobo Fodu',
          'Warna: Putih, Hitam, Silver, Abutua, Coksu',
          'Lengan: 3/4',
          'Kantong: 3 saku — 1 di kiri atas, 2 di kiri dan kanan samping bawah',
        ],
      },
      { type: 'heading', text: 'Desain dan kegunaan' },
      {
        type: 'paragraph',
        text: 'Dirancang untuk tampilan elegan di berbagai kesempatan. Lima warna netral memberi banyak pilihan padu padan, dari acara formal sampai pemakaian sehari-hari.',
      },
    ],
    specs: [
      { label: 'Bahan', value: 'Katun Toyobo Fodu' },
      { label: 'Warna', value: 'Putih, Hitam, Silver, Abutua, Coksu' },
      { label: 'Lengan', value: '3/4' },
      { label: 'Kantong', value: '3 saku' },
    ],
    sizeGuideImage: kurtaHitamSize,
    sizeGuideAlt: 'Panduan ukuran Koko Kurta Pakistan Pria Dewasa Lengan 3/4 Polos',
    sizeNote: 'Toleransi selisih 1–2 cm.',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
  },
  {
    slug: 'jubah-pria-dewasa-lengan-panjang-polos-toyobo',
    name: 'Jubah Pria Dewasa Lengan Panjang Polos Toyobo',
    category: 'Jubah',
    price: 'Rp 190.000',
    oldPrice: 'Rp 269.000',
    rating: 4.9,
    image: polHitam,
    images: [polHitam],
    alt: 'Jubah Pria Dewasa Lengan Panjang Polos Toyobo',
    url: 'https://vt.tokopedia.com/t/ZS9B11KjSwskr-XP1hw/',
    highlights: ['Katun Toyobo', '3 kantong', 'Ukuran S–XXL'],
    description: [
      {
        type: 'paragraph',
        text: 'Jubah pria dewasa lengan panjang polos dengan bahan katun Toyobo. Kain adem dan lembut, dengan jahitan rapi untuk pemakaian harian.',
      },
      {
        type: 'paragraph',
        text: 'Tiga kantong: satu kantong dada, satu kantong pinggang sebelah kanan, dan satu kantong pinggang sebelah kiri.',
      },
    ],
    specs: [
      { label: 'Bahan', value: 'Katun Toyobo' },
      { label: 'Lengan', value: 'Panjang' },
      { label: 'Kantong', value: '3 kantong' },
      { label: 'Berat', value: '1 kg ≈ 3 pcs jubah' },
    ],
    sizeGuideImage: polHitamSize,
    sizeGuideAlt: 'Panduan ukuran Jubah Pria Dewasa Lengan Panjang Polos Toyobo',
    sizeChart: {
      columns: ['Ukuran', 'Lingkar Dada', 'Lebar Bahu', 'Panjang Jubah', 'Panjang Tangan'],
      rows: [
        ['S', '104 cm', '42 cm', '128 cm', '54 cm'],
        ['M', '108 cm', '44 cm', '132 cm', '56 cm'],
        ['L', '112 cm', '46 cm', '136 cm', '58 cm'],
        ['XL', '116 cm', '48 cm', '138 cm', '59 cm'],
        ['XXL', '120 cm', '50 cm', '140 cm', '60 cm'],
      ],
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    slug: 'jubah-pria-dewasa-lis-kerah-lengan-panjang-katun-toyobo',
    name: 'Jubah Pria Dewasa Lis Kerah Lengan Panjang Katun Toyobo',
    category: 'Jubah',
    price: 'Rp 190.000',
    rating: 4.9,
    image: lkAbuTua,
    images: [lkAbuTua],
    alt: 'Jubah Pria Dewasa Lis Kerah Lengan Panjang Katun Toyobo',
    url: 'https://vt.tokopedia.com/t/ZS9koEtdmnB7h-gjrvm/',
    highlights: ['Katun Toyobo', 'Lis kerah', 'Ukuran S–XXL'],
    description: [
      {
        type: 'paragraph',
        text: 'Jubah pria dewasa lengan panjang dengan lis pada kerah. Bahan katun Toyobo yang adem dan lembut, dengan jahitan rapi.',
      },
      {
        type: 'paragraph',
        text: 'Tiga kantong: satu kantong dada, satu kantong pinggang sebelah kanan, dan satu kantong pinggang sebelah kiri.',
      },
    ],
    specs: [
      { label: 'Bahan', value: 'Katun Toyobo' },
      { label: 'Detail', value: 'Lis kerah' },
      { label: 'Kantong', value: '3 kantong' },
      { label: 'Berat', value: '1 kg ≈ 3 pcs jubah' },
    ],
    sizeGuideImage: lkAbuTuaSize,
    sizeGuideAlt: 'Panduan ukuran Jubah Pria Dewasa Lis Kerah Lengan Panjang Katun Toyobo',
    sizeChart: {
      columns: ['Ukuran', 'Lingkar Dada', 'Lebar Bahu', 'Panjang Jubah', 'Panjang Tangan'],
      rows: [
        ['S', '104 cm', '42 cm', '128 cm', '54 cm'],
        ['M', '108 cm', '44 cm', '132 cm', '56 cm'],
        ['L', '112 cm', '46 cm', '136 cm', '58 cm'],
        ['XL', '116 cm', '48 cm', '138 cm', '59 cm'],
        ['XXL', '120 cm', '50 cm', '140 cm', '60 cm'],
      ],
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    slug: 'jubah-gamis-muslim-anak-laki-laki-lengan-panjang-polos',
    name: 'Jubah Gamis Muslim Anak Laki-laki Lengan Panjang Polos',
    category: 'Jubah Anak',
    price: 'Rp 129.000',
    rating: 4.9,
    image: jallpo,
    images: [
      jallpo,
      jallpo01,
      jallpo02,
      jallpo03,
      jallpo04,
      jallpo05,
      jallpo06,
      jallpo07,
      jallpo08,
      jallpo09,
      jallpo10,
      jallpo11,
    ],
    alt: 'Jubah Gamis Muslim Anak Laki-laki Lengan Panjang Polos',
    badge: 'Terlaris',
    url: 'https://vt.tokopedia.com/t/ZS9koK2paodAS-n4M9A/',
    highlights: ['Toyobo Fodu Ori', '3 kantong', 'Ukuran No. 08–14'],
    description: [
      {
        type: 'paragraph',
        text: 'Jubah gamis muslim anak laki-laki lengan panjang polos dengan bahan katun Toyobo Fodu Ori. Model tiga kantong: satu kantong di dada, satu kantong pinggang sebelah kanan, dan satu kantong pinggang sebelah kiri.',
      },
      {
        type: 'paragraph',
        text: 'Tersedia untuk usia 8–15 tahun. Nyaman dipakai untuk ibadah, sekolah agama, maupun acara keluarga.',
      },
    ],
    specs: [
      { label: 'Bahan', value: 'Katun Toyobo Fodu Ori' },
      { label: 'Lengan', value: 'Panjang' },
      { label: 'Kantong', value: '3 kantong' },
      { label: 'Ukuran', value: 'No. 08, 10, 12, 14' },
    ],
    sizeGuideImage: jallpoSize,
    sizeGuideAlt: 'Panduan ukuran Jubah Gamis Muslim Anak Laki-laki Lengan Panjang Polos',
    sizeChart: {
      columns: ['Ukuran', 'Usia', 'Panjang Jubah', 'Lingkar Dada', 'Panjang Lengan'],
      rows: [
        ['No. 08', '8–9 tahun', '96 cm', '88 cm', '44 cm'],
        ['No. 10', '10–11 tahun', '104 cm', '92 cm', '46 cm'],
        ['No. 12', '12–13 tahun', '112 cm', '96 cm', '48 cm'],
        ['No. 14', '14–15 tahun', '120 cm', '100 cm', '50 cm'],
      ],
    },
    sizes: ['No. 08', 'No. 10', 'No. 12', 'No. 14'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, count = 3): Product[] {
  const sameCategory = products.filter(
    (item) => item.slug !== product.slug && item.category === product.category,
  );
  const others = products.filter(
    (item) => item.slug !== product.slug && item.category !== product.category,
  );

  return [...sameCategory, ...others].slice(0, count);
}

export const storePromises: StorePromise[] = [
  {
    icon: Scissors,
    title: 'Jahitan rapi',
    description: 'Dijahit rapi dengan kain pilihan untuk pemakaian jangka panjang.',
  },
  {
    icon: BadgeCheck,
    title: 'Dicek sebelum kirim',
    description: 'Setiap pesanan diperiksa terlebih dahulu sebelum dikirim.',
  },
  {
    icon: RefreshCcw,
    title: 'Bisa diretur',
    description: 'Barang yang tidak sesuai atau cacat dapat diretur.',
  },
  {
    icon: Wind,
    title: 'Adem & lembut',
    description: 'Kain yang adem dan lembut untuk kenyamanan sepanjang hari.',
  },
];

export const valueItems: ValueItem[] = [
  {
    icon: Wind,
    title: 'Adem',
    description: 'Nyaman digunakan sepanjang hari.',
  },
  {
    icon: Feather,
    title: 'Nyaman',
    description: 'Material dan potongan dibuat untuk memberikan rasa nyaman.',
  },
  {
    icon: Shirt,
    title: 'Tidak Mudah Kusut',
    description: 'Lebih mudah dirawat dan tetap terlihat rapi.',
  },
  {
    icon: Hand,
    title: 'Nyaman Dipakai',
    description: 'Nyaman digunakan untuk aktivitas sehari-hari maupun acara spesial.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Andi',
    city: 'Bandung',
    rating: 5,
    quote:
      'Bahannya adem dan nyaman banget. Dipakai seharian tetap enak, dan yang paling saya suka tidak gampang kusut.',
  },
  {
    name: 'Rina',
    city: 'Bandung',
    rating: 5,
    quote:
      'Anaknya suka karena nyaman dipakai. Saya juga suka karena modelnya rapi dan gampang dipakaikan.',
  },
  {
    name: 'Fauzan',
    city: 'Jakarta',
    rating: 5,
    quote:
      'Kurta-nya jatuh pas di badan. Dipakai ke kantor maupun ke masjid tetap terlihat rapi.',
  },
  {
    name: 'Dewi',
    city: 'Surabaya',
    rating: 4.9,
    quote:
      'Beli gamis untuk suami dan jubah untuk anak. Bahannya seragam, kualitasnya juara.',
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'Apakah bahan Azmee Store nyaman untuk dipakai sehari-hari?',
    answer:
      'Ya. Setiap produk dirancang dengan material yang adem dan ringan, cocok dipakai seharian untuk berbagai aktivitas.',
  },
  {
    question: 'Apakah produknya mudah kusut?',
    answer:
      'Bahan yang kami pilih tahan kusut dan mudah dirawat, sehingga tetap terlihat rapi meski dipakai berulang.',
  },
  {
    question: 'Bagaimana cara memilih ukuran?',
    answer:
      'Setiap produk memiliki tabel ukuran lengkap di halaman produk. Anda dapat mencocokkan tinggi dan lingkar dada untuk menemukan ukuran yang pas.',
  },
  {
    question: 'Apakah tersedia ukuran untuk anak?',
    answer:
      'Tersedia. Koleksi jubah dan pakaian muslim anak tersedia dalam berbagai ukuran, dirancang agar nyaman dan mudah dipakaikan.',
  },
  {
    question: 'Apakah produk cocok untuk acara formal?',
    answer:
      'Sangat cocok. Desain kami menggabungkan nuansa muslim dengan potongan modern, sehingga tepat untuk acara formal maupun santai.',
  },
  {
    question: 'Bagaimana cara perawatan produknya?',
    answer:
      'Cukup cuci dengan air dingin dan jemur di tempat teduh. Hindari pemutih agar warna tetap awet.',
  },
  {
    question: 'Apakah bisa melakukan penukaran ukuran?',
    answer:
      'Bisa. Kami menyediakan penukaran ukuran selama produk masih dalam kondisi utuh dan dilakukan dalam batas waktu yang berlaku.',
  },
  {
    question: 'Bagaimana cara melakukan pemesanan?',
    answer:
      'Pilih produk, buka halaman detailnya, lalu klik tombol beli yang akan mengarahkan Anda ke toko resmi kami di TikTok Shop. Anda juga dapat menghubungi WhatsApp kami untuk bantuan pemesanan.',
  },
];

export const packages: Package[] = [
  {
    name: 'Paket Everyday',
    description: '1 Koko / Kurta',
    price: 'Rp 189.000',
    cta: 'Pilih Koleksi',
  },
  {
    name: 'Paket Couple / Family',
    description: 'Pilihan pakaian untuk ayah dan anak.',
    price: 'Rp 349.000',
    cta: 'Lihat Paket',
    featured: true,
  },
  {
    name: 'Paket Special Moment',
    description: 'Pilihan outfit untuk acara spesial.',
    price: 'Rp 459.000',
    cta: 'Lihat Koleksi',
  },
];

export const stats = [
  { value: '1.000+', label: 'Pelanggan' },
  { value: '4.9/5', label: 'Rating' },
  { value: '16.000+', label: 'Produk Terjual' },
];

export const problems = [
  'Panas dan kurang nyaman dipakai seharian.',
  'Mudah kusut setelah digunakan.',
  'Sulit dipadukan untuk berbagai acara.',
  'Butuh waktu lama untuk dipakai dan dirapikan.',
  'Pakaian anak yang kurang nyaman untuk beraktivitas.',
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Koleksi', href: '#koleksi' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'FAQ', href: '#faq' },
];

const whatsappMessage = encodeURIComponent('Halo Azmee Store, saya ingin bertanya tentang produk Anda.');
export const whatsappUrl = `https://wa.me/6281384654138?text=${whatsappMessage}`;
