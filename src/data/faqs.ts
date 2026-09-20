export interface FAQItem {
  question: string;
  answer: string;
}

export const MAIN_FAQS: FAQItem[] = [
  {
    question: "Berapa harga sewa mobil bulanan di Sewa Mobil Matic?",
    answer:
      "Harga sewa mobil bulanan di Sewa Mobil Matic bervariasi mulai dari Rp 5.500.000/bulan untuk tipe City Car (seperti Honda Brio) hingga Rp 12.500.000/bulan untuk Premium MPV (seperti Innova Zenix). Harga bulanan sudah termasuk perawatan berkala dan pemakaian yang jauh lebih hemat dibanding tarif harian.",
  },
  {
    question: "Apakah semua armada unit mobil bertransmisi Matic (Automatic)?",
    answer:
      "Ya, seluruh armada kami 100% bertransmisi Matic / CVT modern. Hal ini untuk memastikan kenyamanan ekstra bagi pengemudi saat menghadapi kemacetan perkotaan di BSD, Tangerang Selatan, maupun Jakarta.",
  },
  {
    question:
      "Apakah melayani sewa mobil bulanan untuk perseorangan dan perusahaan?",
    answer:
      "Tentu saja. Kami melayani sewa mobil bulanan untuk kebutuhan personal/keluarga maupun kebutuhan operasional perusahaan (corporate rental) dengan sistem invoice resmi dan kontrak bulanan yang fleksibel.",
  },
  {
    question: "Area mana saja yang dilayani oleh Sewa Mobil Matic?",
    answer:
      "Fokus utama layanan kami mencakup BSD City, Tangerang Selatan, Alam Sutera, Gading Serpong, Karawaci, Jakarta Barat, Jakarta Selatan, serta wilayah Jabodetabek pada umumnya.",
  },
  {
    question: "Bagaimana prosedur dan cara melakukan booking unit mobil?",
    answer:
      "Proses booking sangat cepat dan praktis via WhatsApp: 1) Pilih unit armada & durasi sewa, 2) Kirimkan dokumen verifikasi (KTP/ID), 3) Tentukan jadwal & lokasi antar/jemput unit, 4) Konfirmasi reservasi selesai.",
  },
  {
    question: "Apa saja dokumen yang diperlukan untuk sewa mobil matic?",
    answer:
      "Untuk penyewa perorangan cukup melampirkan foto KTP, SIM A aktif, dan akun media sosial atau bukti domisili. Untuk perusahaan melampirkan legalitas PT/CV (NIB/NPWP) serta KTP penanggung jawab.",
  },
  {
    question:
      "Apakah unit mobil bisa diantar langsung ke rumah, kantor, atau bandara?",
    answer:
      "Ya, kami menyediakan fasilitas antar-jemput unit langsung ke lokasi Anda di wilayah BSD City, Alam Sutera, Tangerang Selatan, Jakarta, hingga Bandara Soekarno-Hatta (Soetta).",
  },
];

export const SEO_FAQS: Record<string, FAQItem[]> = {
  "sewa-mobil-bsd": [
    {
      question:
        "Mengapa memilih layanan sewa mobil di BSD City dari Sewa Mobil Matic?",
      answer:
        "Kami berlokasi strategis di BSD City, memberikan respon cepat, armada transmisi matic bersih & terawat, serta bebas biaya antar untuk area BSD tertentu.",
    },
    {
      question: "Berapa lama estimasi pengantaran mobil ke area BSD?",
      answer:
        "Untuk pemesanan terkonfirmasi di wilayah BSD City (AEON, Edutown, BSD Plaza, Nava Park, The Breeze, dll), unit dapat diantar dalam waktu singkat sesuai kesepakatan jam.",
    },
  ],
  "sewa-mobil-bulanan-bsd": [
    {
      question:
        "Apa keuntungan sewa mobil bulanan di BSD dibanding sewa harian?",
      answer:
        "Sewa mobil bulanan memberikan diskon tarif hingga 40-50% dibanding harian, bebas biaya perawatan/servis rutin, serta garansi unit pengganti jika ada kendala mesin.",
    },
    {
      question: "Apakah ada kontrak mengikat untuk sewa bulanan BSD?",
      answer:
        "Kontrak sewa bulanan fleksibel minimal 1 bulan dengan opsi perpanjangan otomatis yang mudah melalui WhatsApp.",
    },
  ],
  "sewa-mobil-bulanan-terdekat": [
    {
      question:
        "Bagaimana cara menemukan sewa mobil bulanan terdekat di lokasi saya?",
      answer:
        "Sewa Mobil Matic melayani pengantaran langsung ke titik lokasi domisili Anda di BSD, Alam Sutera, Tangerang Selatan, dan Jakarta, sehingga Anda tidak perlu repot mendatangi garasi.",
    },
  ],
  "harga-sewa-mobil-bulanan-tangerang-selatan": [
    {
      question:
        "Berapa daftar estimasi harga sewa mobil bulanan di Tangerang Selatan?",
      answer:
        "Tarif mulai dari Rp 5.500.000/bulan (City Car), Rp 6.500.000/bulan (MPV 7-Seater), dan Rp 12.500.000/bulan (Premium MPV). Hubungi tim CS kami via WhatsApp untuk penawaran diskon khusus.",
    },
  ],
  "harga-sewa-mobil-bulanan-bsd": [
    {
      question:
        "Apakah harga sewa mobil bulanan BSD sudah termasuk perawatan armada?",
      answer:
        "Ya, seluruh biaya perawatan rutin seperti ganti oli, service berkala, dan ganti suku cadang aus ditanggung sepenuhnya oleh Sewa Mobil Matic.",
    },
  ],
  "sewa-mobil-bulanan-jakarta": [
    {
      question:
        "Apakah Sewa Mobil Matic melayani pengantaran mobil ke wilayah Jakarta?",
      answer:
        "Ya, kami melayani pengantaran unit sewa bulanan untuk area Jakarta Selatan, Jakarta Barat, Jakarta Pusat, Jakarta Timur, dan Jakarta Utara.",
    },
  ],
  "sewa-mobil-bulanan-alam-sutera": [
    {
      question:
        "Apakah sewa mobil bulanan Alam Sutera bisa antar-jemput di kluster perumahan / apartemen?",
      answer:
        "Bisa. Pengantaran unit dapat dilakukan langsung ke kluster perumahan, apartemen, maupun area perkantoran di Alam Sutera.",
    },
  ],
  "sewa-mobil-matic-bulanan": [
    {
      question:
        "Mengapa mobil matic sangat disukai untuk sewa bulanan di perkotaan?",
      answer:
        "Mobil matic mengurangi kelelahan berkendara di lalu lintas stop-and-go Jabodetabek. Semua unit matic kami menggunakan transmisi halus dan terawat presisi.",
    },
  ],
  "sewa-mobil-alam-sutera": [
    {
      question:
        "Apakah unit sewa mobil bisa diantar ke apartemen atau kluster di Alam Sutera?",
      answer:
        "Tentu saja. Kami melayani pengantaran unit langsung ke seluruh kluster perumahan, apartemen (Silkwood, Saumata, Lloyd), serta gedung perkantoran di Alam Sutera.",
    },
    {
      question: "Berapa tarif sewa mobil matic harian di Alam Sutera?",
      answer:
        "Tarif sewa harian mulai dari Rp 350.000/24 jam untuk City Car matic seperti Honda Brio. Seluruh unit siap diantar bersih dan higienis.",
    },
  ],
  "sewa-mobil-serpong": [
    {
      question:
        "Apakah Sewa Mobil Matic melayani area Gading Serpong dan sekitarnya?",
      answer:
        "Ya, kami melayani pengantaran langsung ke perumahan, apartemen, maupun hotel di Gading Serpong, Serpong Raya, hingga stasiun KRL terdekat.",
    },
    {
      question: "Bagaimana cara pemesanan sewa mobil di Serpong?",
      answer:
        "Cukup hubungi kami melalui WhatsApp, tentukan unit mobil matic dan jadwal sewa, kirim foto dokumen identitas, dan unit akan segera dijadwalkan untuk pengantaran.",
    },
  ],
  "sewa-mobil-bintaro": [
    {
      question:
        "Apakah pengantaran unit mencakup seluruh sektor di Bintaro Jaya?",
      answer:
        "Ya, layanan kami mencakup Bintaro Sektor 1 hingga Sektor 9, Graha Bintaro, stasiun KRL Jurangmangu/Pondok Ranji, serta area perkantoran CBD Bintaro.",
    },
    {
      question: "Apakah tersedia pilihan sewa mobil lepas kunci di Bintaro?",
      answer:
        "Kami menyediakan fasilitas sewa lepas kunci untuk pelanggan yang memenuhi kelengkapan verifikasi dokumen identitas dan domisili.",
    },
  ],
  "sewa-mobil-jakarta-selatan": [
    {
      question:
        "Apakah mobil sewa bisa diantar langsung ke wilayah Jakarta Selatan?",
      answer:
        "Bisa. Kami melayani pengantaran unit ke kawasan Pondok Indah, Cilandak, TB Simatupang, Kemang, Senopati, hingga Kuningan.",
    },
    {
      question:
        "Apakah melayani sewa mobil bulanan untuk operasional kantor di Jaksel?",
      answer:
        "Tentu. Kami menyediakan skema sewa bulanan perusahaan dengan invoice resmi, bebas biaya servis berkala, dan fasilitas unit pengganti.",
    },
  ],
  "sewa-mobil-jakarta-barat": [
    {
      question:
        "Apakah melayani pengantaran unit ke Puri Indah atau Kebon Jeruk?",
      answer:
        "Ya, kami melayani pengantaran unit ke seluruh kawasan Jakarta Barat termasuk Puri Indah, Kembangan, Kebon Jeruk, hingga Tanjung Duren.",
    },
    {
      question:
        "Apakah mobil bisa diantar atau dijemput di Bandara Soekarno-Hatta?",
      answer:
        "Bisa. Karena akses tol yang sangat dekat dari Jakarta Barat, kami dapat mengakomodasi titik temu atau pengantaran di Bandara Soetta sesuai perjanjian.",
    },
  ],
};
