export type PolicySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Policy = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  updated: string;
  sections: PolicySection[];
};

export const policies: Policy[] = [
  {
    slug: 'kebijakan-privasi',
    name: 'Kebijakan Privasi',
    title: 'Kebijakan Privasi | Azmee Store',
    description:
      'Kebijakan privasi Azmee Store: data yang kami kumpulkan, cara penggunaannya, cookie, keamanan, dan cara menghubungi kami.',
    intro:
      'Kami menghargai privasi Anda. Kebijakan ini menjelaskan data yang dapat kami terima saat Anda menggunakan situs Azmee Store dan bagaimana data tersebut digunakan.',
    updated: '27 Oktober 2026',
    sections: [
      {
        heading: 'Data yang kami kumpulkan',
        paragraphs: [
          'Kami dapat menerima data yang Anda kirimkan secara langsung, seperti nama, nomor WhatsApp, alamat pengiriman, dan detail pesanan ketika Anda menghubungi kami atau bertransaksi melalui toko resmi kami.',
          'Situs ini juga dapat menerima data teknis dasar seperti jenis perangkat, browser, dan halaman yang dikunjungi apabila fitur analitik diaktifkan.',
        ],
      },
      {
        heading: 'Cara kami menggunakan data',
        bullets: [
          'Menjawab pertanyaan tentang produk, ukuran, dan pesanan.',
          'Membantu proses pemesanan dan pengiriman melalui marketplace atau WhatsApp.',
          'Meningkatkan kualitas produk, layanan, dan konten situs.',
          'Memenuhi kewajiban hukum yang berlaku.',
        ],
      },
      {
        heading: 'Berbagi data',
        paragraphs: [
          'Kami tidak menjual data pribadi Anda. Data hanya dapat dibagikan kepada pihak yang membantu proses pesanan, seperti marketplace, kurir, atau penyedia layanan pembayaran, sesuai kebutuhan transaksi.',
        ],
      },
      {
        heading: 'Cookie dan analitik',
        paragraphs: [
          'Situs dapat menggunakan cookie atau teknologi serupa untuk memahami penggunaan halaman. Jika fitur analitik digunakan, data yang dikumpulkan bersifat agregat dan tidak digunakan untuk mengidentifikasi Anda secara pribadi.',
        ],
      },
      {
        heading: 'Penyimpanan dan keamanan',
        paragraphs: [
          'Kami menyimpan data hanya selama diperlukan untuk tujuan di atas atau sesuai ketentuan hukum. Kami menerapkan langkah yang wajar untuk melindungi data, tetapi tidak ada metode transmisi atau penyimpanan yang sepenuhnya bebas risiko.',
        ],
      },
      {
        heading: 'Hak Anda',
        paragraphs: [
          'Anda dapat meminta informasi, koreksi, atau penghapusan data pribadi yang kami simpan dengan menghubungi kami melalui WhatsApp. Kami akan menindaklanjuti permintaan sesuai ketentuan yang berlaku.',
        ],
      },
      {
        heading: 'Hubungi kami',
        paragraphs: [
          'Pertanyaan tentang kebijakan ini dapat disampaikan melalui WhatsApp Azmee Store di +62 813-8465-4138.',
        ],
      },
    ],
  },
  {
    slug: 'syarat-ketentuan',
    name: 'Syarat & Ketentuan',
    title: 'Syarat & Ketentuan | Azmee Store',
    description:
      'Syarat dan ketentuan penggunaan situs serta pembelian produk Azmee Store, termasuk harga, pembayaran, pengiriman, dan pengembalian.',
    intro:
      'Dengan menggunakan situs Azmee Store, Anda menyetujui syarat dan ketentuan berikut. Mohon baca dengan saksama sebelum melakukan pemesanan.',
    updated: '27 Oktober 2026',
    sections: [
      {
        heading: 'Penggunaan situs',
        paragraphs: [
          'Situs ini disediakan untuk memberikan informasi produk dan memudahkan Anda menghubungi Azmee Store. Anda setuju untuk tidak menggunakan situs dengan cara yang melanggar hukum atau merugikan pihak lain.',
        ],
      },
      {
        heading: 'Produk dan harga',
        paragraphs: [
          'Kami berusaha menampilkan warna, bahan, ukuran, dan harga seakurat mungkin. Perbedaan warna dapat terjadi karena pengaturan layar atau pencahayaan saat pemotretan.',
          'Harga dan ketersediaan produk dapat berubah tanpa pemberitahuan. Harga yang berlaku adalah harga yang tercantum pada halaman produk atau marketplace resmi saat transaksi.',
        ],
      },
      {
        heading: 'Pemesanan dan pembayaran',
        paragraphs: [
          'Pemesanan dilakukan melalui marketplace resmi yang tertaut dari situs atau melalui WhatsApp. Pembayaran diproses oleh marketplace atau penyedia pembayaran yang digunakan.',
        ],
      },
      {
        heading: 'Pengiriman',
        paragraphs: [
          'Waktu pengiriman bergantung pada kurir, tujuan, dan kebijakan marketplace yang digunakan. Estimasi yang ditampilkan bersifat perkiraan dan dapat berubah karena faktor di luar kendali kami.',
        ],
      },
      {
        heading: 'Pengembalian dan penukaran',
        paragraphs: [
          'Pengembalian atau penukaran mengikuti kebijakan marketplace tempat transaksi dilakukan. Untuk produk cacat atau salah kirim, hubungi kami melalui WhatsApp agar dapat dibantu.',
        ],
      },
      {
        heading: 'Hak kekayaan intelektual',
        paragraphs: [
          'Logo, foto, teks, dan materi lain di situs ini merupakan milik Azmee Store atau pihak yang memberikan izin. Materi tidak boleh digunakan untuk kepentingan komersial tanpa izin tertulis.',
        ],
      },
      {
        heading: 'Batasan tanggung jawab',
        paragraphs: [
          'Kami berupaya menjaga informasi tetap akurat, tetapi tidak menjamin situs bebas dari kesalahan atau gangguan. Penggunaan situs dan keputusan pembelian merupakan tanggung jawab pengguna.',
        ],
      },
      {
        heading: 'Perubahan ketentuan',
        paragraphs: [
          'Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. Versi terbaru akan ditampilkan pada halaman ini.',
        ],
      },
      {
        heading: 'Hubungi kami',
        paragraphs: [
          'Pertanyaan tentang syarat dan ketentuan dapat disampaikan melalui WhatsApp Azmee Store di +62 813-8465-4138.',
        ],
      },
    ],
  },
  {
    slug: 'kebijakan-pengiriman',
    name: 'Kebijakan Pengiriman',
    title: 'Kebijakan Pengiriman | Azmee Store',
    description:
      'Informasi pemrosesan pesanan, kurir, estimasi pengiriman, biaya, pelacakan paket, dan kendala pengiriman Azmee Store.',
    intro:
      'Pesanan Azmee Store diproses melalui marketplace resmi dan dikirim menggunakan kurir yang tersedia di marketplace tersebut. Berikut informasi umum mengenai pengiriman.',
    updated: '27 Oktober 2026',
    sections: [
      {
        heading: 'Pemrosesan pesanan',
        paragraphs: [
          'Pesanan biasanya diproses pada hari kerja setelah pembayaran terkonfirmasi. Pesanan yang masuk pada akhir pekan atau hari libur dapat diproses pada hari kerja berikutnya.',
        ],
      },
      {
        heading: 'Kurir dan estimasi',
        paragraphs: [
          'Pilihan kurir dan estimasi waktu pengiriman ditampilkan saat checkout di marketplace. Estimasi dapat berubah tergantung lokasi tujuan, cuaca, dan volume pengiriman.',
        ],
      },
      {
        heading: 'Biaya pengiriman',
        paragraphs: [
          'Biaya pengiriman dihitung oleh marketplace berdasarkan berat paket, jarak, dan kurir yang dipilih. Promo gratis ongkir, jika tersedia, mengikuti syarat dari marketplace.',
        ],
      },
      {
        heading: 'Pelacakan paket',
        paragraphs: [
          'Nomor resi akan tersedia di halaman pesanan marketplace setelah paket diserahkan ke kurir. Gunakan nomor tersebut untuk melacak status pengiriman.',
        ],
      },
      {
        heading: 'Alamat pengiriman',
        paragraphs: [
          'Pastikan nama penerima, nomor telepon, dan alamat lengkap sudah benar sebelum menyelesaikan pesanan. Perubahan alamat setelah pesanan diproses mungkin tidak dapat dilakukan.',
        ],
      },
      {
        heading: 'Keterlambatan atau kendala',
        paragraphs: [
          'Jika paket terlambat atau mengalami kendala, hubungi kami melalui WhatsApp dengan menyertakan nomor pesanan. Kami akan membantu mengecek status ke marketplace dan kurir.',
        ],
      },
    ],
  },
  {
    slug: 'kebijakan-pengembalian',
    name: 'Kebijakan Pengembalian',
    title: 'Kebijakan Pengembalian | Azmee Store',
    description:
      'Ketentuan pengembalian dan penukaran produk Azmee Store, termasuk produk cacat, salah kirim, biaya, dan waktu proses.',
    intro:
      'Kami ingin Anda menerima produk yang sesuai. Pengembalian dan penukaran mengikuti kebijakan marketplace tempat transaksi, dengan bantuan dari tim Azmee Store.',
    updated: '27 Oktober 2026',
    sections: [
      {
        heading: 'Kelayakan pengembalian',
        bullets: [
          'Produk cacat, rusak, atau salah kirim.',
          'Ukuran atau warna tidak sesuai dengan pesanan.',
          'Produk belum dipakai, belum dicuci, dan label masih lengkap.',
          'Pengajuan dilakukan dalam batas waktu yang ditentukan marketplace.',
        ],
      },
      {
        heading: 'Cara mengajukan',
        paragraphs: [
          'Ajukan pengembalian melalui halaman pesanan di marketplace yang digunakan. Jika memerlukan bantuan, hubungi WhatsApp Azmee Store dengan menyertakan nomor pesanan dan foto produk.',
        ],
      },
      {
        heading: 'Biaya pengembalian',
        paragraphs: [
          'Biaya pengiriman untuk pengembalian dapat berbeda tergantung alasan dan kebijakan marketplace. Untuk produk cacat atau salah kirim, kami akan membantu sesuai ketentuan yang berlaku.',
        ],
      },
      {
        heading: 'Waktu proses',
        paragraphs: [
          'Waktu pemeriksaan dan penggantian bergantung pada proses marketplace dan ketersediaan stok pengganti. Kami akan memberikan informasi perkembangan melalui WhatsApp.',
        ],
      },
      {
        heading: 'Pengecualian',
        paragraphs: [
          'Produk yang sudah dipakai, dicuci, atau rusak akibat penggunaan tidak dapat dikembalikan, kecuali memang cacat dari awal. Produk yang dibeli melalui marketplace tetap mengikuti kebijakan platform tersebut.',
        ],
      },
      {
        heading: 'Hubungi kami',
        paragraphs: [
          'Untuk pertanyaan tentang pengembalian, hubungi WhatsApp Azmee Store di +62 813-8465-4138.',
        ],
      },
    ],
  },
];

export function getPolicyBySlug(slug: string): Policy | undefined {
  return policies.find((policy) => policy.slug === slug);
}
