export interface SeoPageData {
  slug: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  serviceDetail: {
    heading: string;
    paragraphs: string[];
  };
  pricingTitle?: string;
  pricingNote?: string;
  advantages: {
    title: string;
    desc: string;
    icon?: string;
  }[];
  coverageTitle: string;
  coverageAreas: string[];
  waMessage: string;
  relatedPages: { title: string; slug: string }[];
}

export const SEO_PAGES: Record<string, SeoPageData> = {
  "sewa-mobil-bsd": {
    slug: "sewa-mobil-bsd",
    targetKeyword: "sewa mobil bsd",
    metaTitle: "Sewa Mobil BSD City Matic Harian & Bulanan Terpercaya",
    metaDescription:
      "Layanan sewa mobil BSD City bertransmisi matic terawat. Melayani kebutuhan harian & bulanan untuk perorangan dan perusahaan di BSD & sekitarnya.",
    h1: "Sewa Mobil BSD City Terpercaya - Transmisi Matic Harian & Bulanan",
    intro:
      "Mencari rental mobil terpercaya di BSD City? Sewa Mobil Matic menghadirkan solusi transportasi modern dengan armada matic terawat, proses transparan, dan layanan antar jemput langsung ke lokasi Anda di kawasan BSD.",
    serviceDetail: {
      heading: "Layanan Rental Mobil Matic Profesional di Kawasan BSD City",
      paragraphs: [
        "Kebutuhan mobilitas di kawasan BSD City (Bumi Serpong Damai) terus meningkat seiring perkembangan pusat bisnis, edukasi, dan hunian. Sewa Mobil Matic hadir memberikan kemudahan sewa kendaraan tanpa ribet dengan armada matic pilihan yang efisien dan nyaman.",
        "Kami menyediakan fleksibilitas skema sewa mulai dari sewa harian untuk keperluan perjalanan bisnis singkat, sewa bulanan hemat untuk operasional kantor maupun tempat tinggal, hingga fasilitas antar-jemput di kluster perumahan, stasiun KRL, dan gedung perkantoran di BSD.",
      ],
    },
    advantages: [
      {
        title: "Unit Full Matic Terawat",
        desc: "Seluruh armada rutin di-service berkala di bengkel resmi dan dipastikan bersih sebelum diserahterimakan.",
      },
      {
        title: "Layanan Antar-Jemput BSD",
        desc: "Kemudahan pengantaran unit langsung ke rumah, apartemen, atau kantor Anda di area BSD City.",
      },
      {
        title: "Transparansi Biaya",
        desc: "Tanpa biaya tersembunyi. Syarat mudah dan proses konfirmasi via WhatsApp yang ramah dan responsive.",
      },
      {
        title: "Pilihan Harian & Bulanan",
        desc: "Dapatkan fleksibilitas waktu sewa yang disesuaikan dengan agenda mobilitas Anda.",
      },
    ],
    coverageTitle: "Cakupan Area Layanan Sewa Mobil di BSD City",
    coverageAreas: [
      "BSD Green Office Park & Digital Hub",
      "AEON Mall BSD & ICE BSD",
      "Nava Park, De Park, & Foresta",
      "The Breeze & BSD Plaza",
      "Stasiun Rawa Buntu, Serpong, & Cisauk",
      "Kawasan Edutown (Prasetiya Mulya, Unika Atma Jaya BSD)",
    ],
    waMessage:
      "Halo Sewa Mobil Matic, saya ingin bertanya mengenai layanan sewa mobil di BSD City.",
    relatedPages: [
      { title: "Sewa Mobil Bulanan BSD", slug: "sewa-mobil-bulanan-bsd" },
      {
        title: "Harga Sewa Mobil Bulanan BSD",
        slug: "harga-sewa-mobil-bulanan-bsd",
      },
      {
        title: "Sewa Mobil Bulanan Alam Sutera",
        slug: "sewa-mobil-bulanan-alam-sutera",
      },
      { title: "Sewa Mobil Matic Bulanan", slug: "sewa-mobil-matic-bulanan" },
    ],
  },
  "sewa-mobil-bulanan-bsd": {
    slug: "sewa-mobil-bulanan-bsd",
    targetKeyword: "sewa mobil bulanan bsd",
    metaTitle: "Sewa Mobil Bulanan BSD - Hemat, Praktis & Bebas Perawatan",
    metaDescription:
      "Solusi sewa mobil bulanan BSD City untuk individu & perusahaan. Hemat biaya hingga 40%, armada matic terawat, bebas biaya service rutin.",
    h1: "Sewa Mobil Bulanan BSD City - Solusi Mobilitas Hemat & Bebas Ribet",
    intro:
      "Nikmati kemudahan berkendara tanpa perlu memikirkan pajak, asuransi, dan perawatan rutin dengan layanan sewa mobil bulanan BSD dari Sewa Mobil Matic.",
    serviceDetail: {
      heading:
        "Keuntungan Sewa Mobil Bulanan untuk Personal & Perusahaan di BSD",
      paragraphs: [
        "Sewa mobil bulanan di BSD City menjadi pilihan cerdas bagi eksekutif, keluarga yang menetap sementara, maupun perusahaan yang membutuhkan armada operasional tanpa mengikat kapital besar untuk pembelian mobil baru.",
        "Dengan mengambil paket bulanan, Anda akan menghemat anggaran transportasi secara signifikan dibanding tarif harian, sekaligus mendapatkan jaminan perawatan berkala gratis serta replacement car (unit pengganti) jika terjadi perawatan besar.",
      ],
    },
    advantages: [
      {
        title: "Hemat Hingga 40-50%",
        desc: "Tarif bulanan jauh lebih terjangkau per harinya dibandingkan sewa harian akumulatif.",
      },
      {
        title: "Free Perawatan Rutin",
        desc: "Biaya ganti oli, aki, ban, dan service berkala ditanggung 100% oleh pihak rental.",
      },
      {
        title: "Unit Pengganti (Replacement)",
        desc: "Jaminan ketersediaan mobil pengganti jika unit utama membutuhkan servis berkala.",
      },
      {
        title: "Faktur & Kontrak Perusahaan",
        desc: "Dukungan administrasi legalitas dan invoice resmi untuk pembukuan perusahaan.",
      },
    ],
    coverageTitle: "Wilayah Pengantaran Sewa Mobil Bulanan BSD",
    coverageAreas: [
      "BSD Phase 1 & Phase 2",
      "Vanya Park, Greenwich Park, & Eminent",
      "Kawasan Perkantoran BSD GOP 1 - 9",
      "Gading Serpong & Medang",
      "Pasar Modern BSD & BSD Sektor 1 - 14",
    ],
    waMessage:
      "Halo Sewa Mobil Matic, saya ingin reservasi/konsultasi sewa mobil bulanan di BSD.",
    relatedPages: [
      {
        title: "Harga Sewa Mobil Bulanan BSD",
        slug: "harga-sewa-mobil-bulanan-bsd",
      },
      {
        title: "Harga Sewa Mobil Bulanan Tangerang Selatan",
        slug: "harga-sewa-mobil-bulanan-tangerang-selatan",
      },
      { title: "Sewa Mobil BSD", slug: "sewa-mobil-bsd" },
      {
        title: "Sewa Mobil Bulanan Terdekat",
        slug: "sewa-mobil-bulanan-terdekat",
      },
    ],
  },
  "sewa-mobil-bulanan-terdekat": {
    slug: "sewa-mobil-bulanan-terdekat",
    targetKeyword: "sewa mobil bulanan terdekat",
    metaTitle: "Sewa Mobil Bulanan Terdekat Jabodetabek - Antar ke Lokasi Anda",
    metaDescription:
      "Cari sewa mobil bulanan terdekat? Kami antar unit matic langsung ke rumah/kantor Anda di area BSD, Tangerang Selatan, Alam Sutera & Jakarta.",
    h1: "Sewa Mobil Bulanan Terdekat dengan Pengantaran Langsung ke Lokasi",
    intro:
      "Tidak perlu repot mencari alamat garasi. Kami hadirkan layanan sewa mobil bulanan terdekat yang siap mengantarkan armada matic prima tepat ke pintu rumah atau kantor Anda.",
    serviceDetail: {
      heading:
        "Mengapa Layanan Antar-Jemput Menjadikan Kami Terdekat dari Anda",
      paragraphs: [
        "Konsep sewa mobil modern tidak lagi mengharuskan Anda mendatangi pool kendaraan. Dengan sistem pemesanan online dan pengantaran unit (door-to-door delivery), kami menjadi pilihan sewa mobil bulanan terdekat di kawasan BSD, Tangerang Selatan, Alam Sutera, dan Jakarta.",
        "Cukup pilih mobil matic yang sesuai kebutuhan dari smartphone Anda, kirimkan dokumen verifikasi via WhatsApp, dan tim driver profesional kami akan menyerahkan unit bersih siap pakai.",
      ],
    },
    advantages: [
      {
        title: "Layanan Door-to-Door Delivery",
        desc: "Mobil diantar dan dijemput langsung di alamat domisili atau lokasi pilihan Anda.",
      },
      {
        title: "Pemesanan Fast-Response",
        desc: "Proses konfirmasi dan verifikasi syarat berjalan cepat melalui WhatsApp.",
      },
      {
        title: "Jangkauan Luas Jabodetabek",
        desc: "Melayani area BSD City, Tangsel, Alam Sutera, Karawaci, hingga seluruh Jakarta.",
      },
      {
        title: "Unit Matic Siap Pakai",
        desc: "Kondisi fisik bersih, BBM terisi, dan performa mesin telah diuji uji kelayakan.",
      },
    ],
    coverageTitle: "Lokasi Pengantaran Utama Layanan Terdekat",
    coverageAreas: [
      "Tangerang Selatan (BSD, Bintaro, Ciputat, Pamulang)",
      "Alam Sutera & Gading Serpong",
      "Jakarta Selatan (Pondok Indah, Cilandak, Kebayoran)",
      "Jakarta Barat (Puri Indah, Kebon Jeruk, Kembangan)",
      "Bandara Soekarno-Hatta (Soetta)",
    ],
    waMessage:
      "Halo Sewa Mobil Matic, saya mencari sewa mobil bulanan terdekat di lokasi saya.",
    relatedPages: [
      { title: "Sewa Mobil Bulanan BSD", slug: "sewa-mobil-bulanan-bsd" },
      {
        title: "Sewa Mobil Bulanan Jakarta",
        slug: "sewa-mobil-bulanan-jakarta",
      },
      {
        title: "Sewa Mobil Bulanan Alam Sutera",
        slug: "sewa-mobil-bulanan-alam-sutera",
      },
      {
        title: "Harga Sewa Mobil Bulanan Tangerang Selatan",
        slug: "harga-sewa-mobil-bulanan-tangerang-selatan",
      },
    ],
  },
  "harga-sewa-mobil-bulanan-tangerang-selatan": {
    slug: "harga-sewa-mobil-bulanan-tangerang-selatan",
    targetKeyword: "harga sewa mobil bulanan tangerang selatan",
    metaTitle: "Daftar Harga Sewa Mobil Bulanan Tangerang Selatan Terbaru",
    metaDescription:
      "Informasi daftar harga sewa mobil bulanan Tangerang Selatan (BSD, Bintaro, Ciputat). Transparan, hemat, armada matic lengkap mulai Rp 5.5 Juta/bln.",
    h1: "Daftar Harga Sewa Mobil Bulanan Tangerang Selatan Terbaru",
    intro:
      "Dapatkan transparansi estimasi tarif dan daftar harga sewa mobil bulanan di area Tangerang Selatan. Pilihan armada matic lengkap untuk kebutuhan pribadi maupun operasional bisnis.",
    serviceDetail: {
      heading: "Rincian Tarif dan Paket Sewa Mobil Bulanan Tangsel",
      paragraphs: [
        "Memahami struktur harga sebelum melakukan sewa mobil bulanan sangat penting. Kami menawarkan skema harga yang bersaing di wilayah Tangerang Selatan tanpa biaya tersembunyi.",
        "Harga sewa bulanan sudah memperhitungkan fasilitas perawatan berkala, asuransi standar, dan jaminan kualitas armada. Berikut adalah daftar acuan tarif sewa bulanan mobil matic kami.",
      ],
    },
    advantages: [
      {
        title: "Harga Net & Transparan",
        desc: "Seluruh komponen tarif dijelaskan terbuka sejak awal tanpa komisi tersembunyi.",
      },
      {
        title: "Paket Perusahaan (Corporate Rate)",
        desc: "Penawaran khusus untuk armada operasional perusahaan jumlah banyak.",
      },
      {
        title: "Diskon Durasi Panjang",
        desc: "Dapatkan potongan harga fleksibel untuk sewa 3 bulan, 6 bulan, hingga 1 tahun.",
      },
      {
        title: "All Maintenance Included",
        desc: "Bebas pusing memikirkan biaya perawatan kendaraan bulanan.",
      },
    ],
    coverageTitle: "Area Tangerang Selatan yang Tercover Tarif Pengantaran",
    coverageAreas: [
      "Kecamatan Serpong & Serpong Utara (BSD, Alam Sutera)",
      "Kecamatan Pondok Aren (Bintaro Jaya, Graha Raya)",
      "Kecamatan Ciputat & Ciputat Timur",
      "Kecamatan Pamulang & Setu",
      "Kecamatan Cisauk & Pagedangan",
    ],
    waMessage:
      "Halo Sewa Mobil Matic, saya ingin menanyakan rincian harga sewa mobil bulanan di Tangerang Selatan.",
    relatedPages: [
      {
        title: "Harga Sewa Mobil Bulanan BSD",
        slug: "harga-sewa-mobil-bulanan-bsd",
      },
      { title: "Sewa Mobil Bulanan BSD", slug: "sewa-mobil-bulanan-bsd" },
      { title: "Sewa Mobil Matic Bulanan", slug: "sewa-mobil-matic-bulanan" },
      {
        title: "Sewa Mobil Bulanan Terdekat",
        slug: "sewa-mobil-bulanan-terdekat",
      },
    ],
  },
  "harga-sewa-mobil-bulanan-bsd": {
    slug: "harga-sewa-mobil-bulanan-bsd",
    targetKeyword: "harga sewa mobil bulanan bsd",
    metaTitle: "Harga Sewa Mobil Bulanan BSD City - Pricelist & Paket Terbaik",
    metaDescription:
      "Cek daftar harga sewa mobil bulanan BSD City. Tarif hemat mulai Rp 5.500.000/bulan untuk mobil matic Honda, Toyota, Mitsubishi terawat.",
    h1: "Harga Sewa Mobil Bulanan BSD City - Hemat & Transparan",
    intro:
      "Cari informasi harga sewa mobil bulanan BSD City? Temukan penawaran terbaik untuk mobil matic harian dan bulanan dengan rincian biaya yang terjangkau dan jernih.",
    serviceDetail: {
      heading: "Simulasi & Penjelasan Harga Sewa Bulanan di BSD",
      paragraphs: [
        "Harga sewa mobil bulanan di BSD ditentukan berdasarkan kelas kendaraan, brand, tahun pembuatan, serta durasi kontrak sewa. Tipe City Car matic cocok untuk penggunaan harian individu yang efisien BBM, sementara MPV 7-seater ideal bagi kebutuhan keluarga atau mobilitas tim kerja.",
        "Semua paket sewa bulanan kami di BSD mencakup fasilitas free service rutin dan layanan antar-jemput ke lokasi hunian atau gedung kantor di kawasan BSD City.",
      ],
    },
    advantages: [
      {
        title: "Rincian Jelas Tanpa Hidden Fees",
        desc: "Kontrak transparan dengan perincian item yang lengkap dan jujur.",
      },
      {
        title: "Metode Pembayaran Mudah",
        desc: "Mendukung transfer bank, invoice kantor, dan kemudahan proses administrasi.",
      },
      {
        title: "Service Berkala Gratis",
        desc: "Perawatan oli dan komponen dilakukan secara teratur tanpa biaya tambahan.",
      },
      {
        title: "Kondisi Unit Terjamin",
        desc: "Setiap mobil melalui checking kelayakan 15 titik sebelum diserahkan.",
      },
    ],
    coverageTitle: "Cakupan Layanan Harga Sewa Bulanan BSD",
    coverageAreas: [
      "BSD Sektor 1 s/d Sektor 14",
      "Kawasan Edutown & BSD Plaza",
      "GOP (Green Office Park) 1, 6, 9",
      "Cluster NavaPark, Vanya Park, Mozia, De Park",
      "Kawasan Industri BSD & Cisauk",
    ],
    waMessage:
      "Halo Sewa Mobil Matic, mohon info rincian harga sewa mobil bulanan untuk area BSD.",
    relatedPages: [
      { title: "Sewa Mobil Bulanan BSD", slug: "sewa-mobil-bulanan-bsd" },
      {
        title: "Harga Sewa Mobil Bulanan Tangerang Selatan",
        slug: "harga-sewa-mobil-bulanan-tangerang-selatan",
      },
      { title: "Sewa Mobil Matic Bulanan", slug: "sewa-mobil-matic-bulanan" },
      { title: "Sewa Mobil BSD", slug: "sewa-mobil-bsd" },
    ],
  },
  "sewa-mobil-bulanan-jakarta": {
    slug: "sewa-mobil-bulanan-jakarta",
    targetKeyword: "sewa mobil bulanan jakarta",
    metaTitle: "Sewa Mobil Bulanan Jakarta Matic - Pengantaran Seluruh Wilayah",
    metaDescription:
      "Sewa mobil bulanan Jakarta bertransmisi matic terawat. Melayani Jaksel, Jakbar, Jakpus, Jaktim, Jakut. Cocok untuk individu & operasional kantor.",
    h1: "Sewa Mobil Bulanan Jakarta - Mobil Matic Nyaman untuk Ibukota",
    intro:
      "Hadapi kemacetan Jakarta dengan kenyamanan mobil matic prima. Kami melayani sewa mobil bulanan Jakarta dengan layanan pengantaran langsung ke domisili Anda.",
    serviceDetail: {
      heading: "Solusi Mobilitas Bulanan Praktis di Ibukota Jakarta",
      paragraphs: [
        "Lalu lintas ibukota yang padat menuntut kendaraan bertransmisi otomatis (matic/CVT) yang nyaman dan tidak membuat pengemudi cepat lelah. Sewa mobil bulanan Jakarta dari Sewa Mobil Matic hadir menjadi jawaban praktis.",
        "Baik untuk kebutuhan ekspatriat, eksekutif perusahaan di daerah CBD Sudirman-Thamrin, maupun kebutuhan personal di wilayah Jakarta Selatan dan Jakarta Barat, kami menyediakan unit matic pilihan dengan pengantaran yang fleksibel.",
      ],
    },
    advantages: [
      {
        title: "Transmisi Matic Nyaman",
        desc: "Berkendara di jalur kemacetan Jakarta lebih nyaman tanpa pegal kopling.",
      },
      {
        title: "Pengantaran Ke Seluruh Wilayah Jakarta",
        desc: "Melayani area Jakarta Selatan, Jakarta Barat, Jakarta Pusat, dan sekitarnya.",
      },
      {
        title: "Perawatan Berkala Terjadwal",
        desc: "Tim mekanik siap menjadwalkan servis rutin tanpa mengganggu aktivitas Anda.",
      },
      {
        title: "Mendukung Kontrak Perusahaan",
        desc: "Kelengkapan dokumen tagihan bulanan untuk keperluan pembukuan operasional.",
      },
    ],
    coverageTitle: "Cakupan Layanan Sewa Bulanan Jakarta",
    coverageAreas: [
      "Jakarta Selatan (Pondok Indah, Cilandak, TB Simatupang, Senopati)",
      "Jakarta Barat (Puri Indah, Permata Hijau, Kebon Jeruk, Slipi)",
      "Jakarta Pusat (Sudirman, Thamrin, Kuningan, Menteng)",
      "Jakarta Utara & Jakarta Timur (Sesuai kesepakatan pengantaran)",
    ],
    waMessage:
      "Halo Sewa Mobil Matic, saya berminat sewa mobil bulanan untuk area Jakarta.",
    relatedPages: [
      {
        title: "Sewa Mobil Bulanan Terdekat",
        slug: "sewa-mobil-bulanan-terdekat",
      },
      { title: "Sewa Mobil Matic Bulanan", slug: "sewa-mobil-matic-bulanan" },
      { title: "Sewa Mobil Bulanan BSD", slug: "sewa-mobil-bulanan-bsd" },
      {
        title: "Harga Sewa Mobil Bulanan Tangerang Selatan",
        slug: "harga-sewa-mobil-bulanan-tangerang-selatan",
      },
    ],
  },
  "sewa-mobil-bulanan-alam-sutera": {
    slug: "sewa-mobil-bulanan-alam-sutera",
    targetKeyword: "sewa mobil bulanan alam sutera",
    metaTitle:
      "Sewa Mobil Bulanan Alam Sutera Matic - Pengantaran Kluster & Kantor",
    metaDescription:
      "Sewa mobil bulanan Alam Sutera transmisi matic terawat. Antar-jemput unit ke perumahan, apartemen, & perkantoran Alam Sutera & Serpong.",
    h1: "Sewa Mobil Bulanan Alam Sutera - Pengantaran Cepat & Unit Prima",
    intro:
      "Dapatkan layanan sewa mobil bulanan Alam Sutera bertransmisi matic bersih, nyaman, dan terawat dengan proses pengantaran langsung ke alamat Anda.",
    serviceDetail: {
      heading: "Layanan Sewa Kendaraan Bulanan Eksklusif di Alam Sutera",
      paragraphs: [
        "Alam Sutera merupakan salah satu kawasan hunian dan bisnis terpadu dengan mobilitas tinggi. Sewa Mobil Matic memfasilitasi kebutuhan kendaraan bulanan bagi warga perumahan, penghuni apartemen, serta staf perkantoran di Alam Sutera.",
        "Dengan pilihan armada mulai dari City Car yang ringkas hingga MPV premium, Anda dapat menikmati kebebasan berkendara setiap hari tanpa perlu mengurus pemeliharaan rutin.",
      ],
    },
    advantages: [
      {
        title: "Antar-Jemput Kluster Perumahan",
        desc: "Unit diantar langsung ke lokasi perumahan/apartemen di sekitar Alam Sutera.",
      },
      {
        title: "Armada Bersih & Bebas Bau",
        desc: "Kebersihan interior dan kenyamanan kabin menjadi prioritas standar kami.",
      },
      {
        title: "Dukungan Service Terjadwal",
        desc: "Servis rutin berkala dikondisikan agar kendaraan selalu dalam kondisi optimal.",
      },
      {
        title: "Syarat Verifikasi Praktis",
        desc: "Persyaratan mudah melalui pengiriman foto identitas legal via WhatsApp.",
      },
    ],
    coverageTitle: "Lokasi Pengantaran di Area Alam Sutera",
    coverageAreas: [
      "Mall @ Alam Sutera & Living World",
      "Silkwood Residence, Saumata, & Lloyd Apartment",
      "Kluster Sutera Utama, Sutera Flamboyan, & Sutera Sitara",
      "Kawasan Perkantoran Synergy Building & Promenade",
      "Kampus BINUS Alam Sutera & Jalur Sutera",
    ],
    waMessage:
      "Halo Sewa Mobil Matic, saya mau reservasi sewa mobil bulanan di area Alam Sutera.",
    relatedPages: [
      { title: "Sewa Mobil Bulanan BSD", slug: "sewa-mobil-bulanan-bsd" },
      { title: "Sewa Mobil BSD", slug: "sewa-mobil-bsd" },
      {
        title: "Harga Sewa Mobil Bulanan BSD",
        slug: "harga-sewa-mobil-bulanan-bsd",
      },
      { title: "Sewa Mobil Matic Bulanan", slug: "sewa-mobil-matic-bulanan" },
    ],
  },
  "sewa-mobil-matic-bulanan": {
    slug: "sewa-mobil-matic-bulanan",
    targetKeyword: "sewa mobil matic bulanan",
    metaTitle: "Sewa Mobil Matic Bulanan Terlengkap - City Car, MPV & SUV",
    metaDescription:
      "Spesialis sewa mobil matic bulanan. Pilihan unit Brio, Avanza, Xpander, Raize, Innova Zenix matic terawat. Bebas capek, hemat, & fleksibel.",
    h1: "Spesialis Sewa Mobil Matic Bulanan - Bebas Lelah di Jalan",
    intro:
      "Solusi berkendara santai tanpa pegal di kemacetan perkotaan. Sewa Mobil Matic menyediakan 100% pilihan armada transmisi otomatis untuk sewa bulanan.",
    serviceDetail: {
      heading: "Keunggulan Memilih Transmisi Matic untuk Sewa Durasi Bulanan",
      paragraphs: [
        "Mobil bertransmisi matic (Automatic / CVT) menawarkan kenyamanan luar biasa saat dikendarai sehari-hari di jalur perkotaan Jabodetabek yang padat. Anda tidak perlu lelah menekan pedal kopling berulang kali dalam situasi stop-and-go.",
        "Sewa Mobil Matic berfokus menyediakan kendaraan otomatis dengan sistem transmisi yang rutin dirawat dan diuji kinerjanya. Pilihan unit kami mencakup segmen City Car efisien, MPV 7-seater keluarga, hingga SUV stylish.",
      ],
    },
    advantages: [
      {
        title: "Kenyamanan Maksimal Pengemudi",
        desc: "Bebas lelah kaki kiri saat melintasi rute padat lalu lintas.",
      },
      {
        title: "Transmisi Responsif & Halus",
        desc: "Perpindahan gigi CVT / Automatic yang mulus dan terawat berkala.",
      },
      {
        title: "Model Kendaraan Kekinian",
        desc: "Armada keluaran terbaru dengan teknologi keselamatan modern.",
      },
      {
        title: "Tarif Bulanan Hemat",
        desc: "Nikmati harga promo sewa bulanan yang terjangkau untuk semua tipe mobil.",
      },
    ],
    coverageTitle: "Cakupan Pengantaran Unit Matic Bulanan",
    coverageAreas: [
      "BSD City & Gading Serpong",
      "Alam Sutera & Karawaci",
      "Tangerang Selatan & Kota Tangerang",
      "Jakarta Selatan, Barat, Pusat, & sekitarnya",
    ],
    waMessage:
      "Halo Sewa Mobil Matic, saya tertarik mencari opsi sewa mobil matic bulanan.",
    relatedPages: [
      { title: "Sewa Mobil Bulanan BSD", slug: "sewa-mobil-bulanan-bsd" },
      {
        title: "Harga Sewa Mobil Bulanan BSD",
        slug: "harga-sewa-mobil-bulanan-bsd",
      },
      {
        title: "Sewa Mobil Bulanan Terdekat",
        slug: "sewa-mobil-bulanan-terdekat",
      },
      {
        title: "Sewa Mobil Bulanan Jakarta",
        slug: "sewa-mobil-bulanan-jakarta",
      },
    ],
  },
  "sewa-mobil-alam-sutera": {
    slug: "sewa-mobil-alam-sutera",
    targetKeyword: "sewa mobil alam sutera",
    metaTitle: "Sewa Mobil Alam Sutera Matic Harian & Bulanan Terpercaya",
    metaDescription:
      "Layanan sewa mobil Alam Sutera bertransmisi matic terawat. Antar-jemput unit ke perumahan, apartemen, & perkantoran di kawasan Alam Sutera.",
    h1: "Sewa Mobil Alam Sutera Terpercaya - Transmisi Matic Harian & Bulanan",
    intro:
      "Mencari rental mobil matic prima di Alam Sutera? Sewa Mobil Matic siap mengantarkan armada bersih dan terawat langsung ke hunian atau kantor Anda di kawasan Alam Sutera.",
    serviceDetail: {
      heading: "Layanan Rental Mobil Matic Modern di Alam Sutera",
      paragraphs: [
        "Alam Sutera merupakan kawasan kota mandiri dengan pertumbuhan perkantoran, universitas, dan kluster hunian yang pesat. Kami memberikan kemudahan sewa kendaraan matic yang praktis, higienis, dan terpercaya.",
        "Tersedia paket sewa harian maupun bulanan yang fleksibel untuk kebutuhan personal, dinas bisnis, maupun operasional instansi di Alam Sutera.",
      ],
    },
    advantages: [
      {
        title: "Unit 100% Matic Prima",
        desc: "Seluruh armada bertransmisi otomatis modern yang rutin menjalani servis berkala di bengkel resmi.",
      },
      {
        title: "Antar-Jemput Kluster Alam Sutera",
        desc: "Kemudahan pengantaran langsung ke perumahan, apartemen, atau perkantoran Anda di Alam Sutera.",
      },
      {
        title: "Bebas Biaya Perawatan",
        desc: "Bagi penyewa bulanan, seluruh perawatan rutin dan penggantian oli ditanggung penuh.",
      },
      {
        title: "Konfirmasi WhatsApp Cepat",
        desc: "Proses reservasi praktis, persyaratan verifikasi mudah, dan CS ramah responsive.",
      },
    ],
    coverageTitle: "Cakupan Area Pengantaran di Alam Sutera",
    coverageAreas: [
      "Mall @ Alam Sutera & Living World Alam Sutera",
      "Silkwood Residence, Saumata, & Lloyd Apartment",
      "Kluster Sutera Utama, Sutera Flamboyan, & Sutera Sitara",
      "Kawasan Perkantoran Synergy Building & The Prominence",
      "Kampus BINUS University Alam Sutera & Jalur Sutera",
      "Pasar 8 Alam Sutera & Flavor Bliss",
    ],
    waMessage:
      "Halo Sewa Mobil Matic, saya ingin bertanya layanan sewa mobil di Alam Sutera.",
    relatedPages: [
      { title: "Sewa Mobil BSD", slug: "sewa-mobil-bsd" },
      { title: "Sewa Mobil Serpong", slug: "sewa-mobil-serpong" },
      { title: "Sewa Mobil Bintaro", slug: "sewa-mobil-bintaro" },
      {
        title: "Sewa Mobil Bulanan Alam Sutera",
        slug: "sewa-mobil-bulanan-alam-sutera",
      },
    ],
  },
  "sewa-mobil-serpong": {
    slug: "sewa-mobil-serpong",
    targetKeyword: "sewa mobil serpong",
    metaTitle: "Sewa Mobil Serpong Matic Harian & Bulanan Terpercaya",
    metaDescription:
      "Rental sewa mobil Serpong bertransmisi matic terawat. Melayani harian & bulanan untuk personal dan kantor di Serpong, Serpong Utara & Gading Serpong.",
    h1: "Sewa Mobil Serpong Terpercaya - Transmisi Matic Harian & Bulanan",
    intro:
      "Butuh rental mobil matic terpercaya di kawasan Serpong? Sewa Mobil Matic menyediakan armada bertransmisi otomatis terawat, syarat praktis, dan layanan antar-jemput langsung ke lokasi Anda di Serpong dan sekitarnya.",
    serviceDetail: {
      heading: "Layanan Rental Mobil Matic Fleksibel di Wilayah Serpong",
      paragraphs: [
        "Kawasan Serpong, Serpong Utara, hingga Gading Serpong merupakan pusat aktivitas bisnis, hunian modern, dan pusat perbelanjaan yang sangat dinamis. Kebutuhan kendaraan yang efisien dan nyaman tanpa lelah menghadapi kemacetan sangat dibutuhkan oleh para komuter maupun keluarga.",
        "Sewa Mobil Matic hadir memberikan pilihan sewa mobil harian maupun bulanan di Serpong dengan armada terawat dan siap pakai. Kami siap mengantarkan unit langsung ke apartemen, perumahan, maupun kantor Anda.",
      ],
    },
    advantages: [
      {
        title: "Unit 100% Matic Prima",
        desc: "Armada bertransmisi otomatis modern (CVT / AT) yang sangat nyaman dikendarai di lalu lintas Serpong.",
      },
      {
        title: "Antar-Jemput Area Serpong",
        desc: "Layanan antar-jemput unit ke perumahan, apartemen, hotel, atau stasiun di kawasan Serpong.",
      },
      {
        title: "Harga Transparan & Bersahabat",
        desc: "Tarif sewa transparan tanpa biaya tersembunyi. Tersedia paket harian dan diskon bulanan hemat.",
      },
      {
        title: "CS Fast Response WhatsApp",
        desc: "Pemesanan cepat dan konsultasi ketersediaan armada langsung bersama tim layanan pelanggan kami.",
      },
    ],
    coverageTitle: "Cakupan Area Layanan Sewa Mobil di Serpong",
    coverageAreas: [
      "Kawasan Gading Serpong (Summarecon & Paramount)",
      "Jalan Raya Serpong & WTC Matahari Serpong",
      "Serpong Utara, Pakulonan Barat, & Jelupang",
      "Stasiun Serpong & Stasiun Rawa Buntu",
      "Perumahan Melati Mas, Villa Serpong, & Graha Raya",
      "Kawasan Bisnis & Kuliner Pasar Modern Paramount",
    ],
    waMessage:
      "Halo Sewa Mobil Matic, saya ingin bertanya mengenai layanan sewa mobil di Serpong.",
    relatedPages: [
      { title: "Sewa Mobil BSD", slug: "sewa-mobil-bsd" },
      { title: "Sewa Mobil Alam Sutera", slug: "sewa-mobil-alam-sutera" },
      { title: "Sewa Mobil Bintaro", slug: "sewa-mobil-bintaro" },
      { title: "Sewa Mobil Matic Bulanan", slug: "sewa-mobil-matic-bulanan" },
    ],
  },
  "sewa-mobil-bintaro": {
    slug: "sewa-mobil-bintaro",
    targetKeyword: "sewa mobil bintaro",
    metaTitle: "Sewa Mobil Bintaro Jaya Matic Harian & Bulanan Terpercaya",
    metaDescription:
      "Sewa mobil Bintaro Jaya bertransmisi matic harian & bulanan. Antar-jemput unit ke sektor 1-9 Bintaro, Graha Bintaro, stasiun, perumahan, & perkantoran.",
    h1: "Sewa Mobil Bintaro Jaya Terpercaya - Transmisi Matic Harian & Bulanan",
    intro:
      "Mencari rental mobil matic berkualitas di Bintaro? Sewa Mobil Matic hadir dengan armada bersih, transmisi otomatis prima, dan kemudahan pengantaran langsung ke kawasan Bintaro Jaya Sektor 1 hingga 9.",
    serviceDetail: {
      heading: "Solusi Transportasi Nyaman & Praktis di Kawasan Bintaro Jaya",
      paragraphs: [
        "Bintaro Jaya dikenal sebagai kawasan mandiri dengan aksesibilitas tinggi ke Jakarta Selatan dan Tangerang Selatan. Mobilitas warga di kluster perumahan maupun pusat bisnis Bintaro membutuhkan moda transportasi yang andal, efisien, dan fleksibel.",
        "Kami melayani sewa mobil matic untuk keperluan harian seperti acara keluarga, dinas kerja, maupun sewa bulanan hemat tanpa beban perawatan kendaraan. Unit kami antar langsung ke alamat Anda di Bintaro.",
      ],
    },
    advantages: [
      {
        title: "Unit Matic Bersih & Terawat",
        desc: "Kondisi fisik dan mesin terjamin prima, interior wangi dan higienis siap pakai.",
      },
      {
        title: "Antar-Jemput Bintaro Sektor 1-9",
        desc: "Kemudahan antar dan ambil unit ke seluruh sektor Bintaro Jaya serta area sekitarnya.",
      },
      {
        title: "Proses Booking Cepat via WhatsApp",
        desc: "Verifikasi dokumen ringkas dan konfirmasi ketersediaan unit dalam hitungan menit.",
      },
      {
        title: "Fleksibilitas Sewa Harian & Bulanan",
        desc: "Tersedia pilihan sewa 24 jam untuk harian maupun kontrak bulanan hemat untuk perorangan dan kantor.",
      },
    ],
    coverageTitle: "Cakupan Area Layanan Sewa Mobil di Bintaro",
    coverageAreas: [
      "Bintaro Jaya Sektor 1, 2, 3, 4, 5, 6, 7, 8, & 9",
      "Bintaro Jaya Xchange Mall & Kebayoran Arcade",
      "Graha Bintaro & Discovery Bintaro",
      "Stasiun KRL Jurangmangu, Pondok Ranji, & Sudimara",
      "Kawasan RS Premier Bintaro & Pondok Aren",
      "CBD Bintaro Sektor 7 & Emerald Bintaro",
    ],
    waMessage:
      "Halo Sewa Mobil Matic, saya ingin menanyakan layanan sewa mobil di Bintaro.",
    relatedPages: [
      { title: "Sewa Mobil BSD", slug: "sewa-mobil-bsd" },
      {
        title: "Sewa Mobil Jakarta Selatan",
        slug: "sewa-mobil-jakarta-selatan",
      },
      { title: "Sewa Mobil Serpong", slug: "sewa-mobil-serpong" },
      {
        title: "Harga Sewa Mobil Bulanan Tangerang Selatan",
        slug: "harga-sewa-mobil-bulanan-tangerang-selatan",
      },
    ],
  },
  "sewa-mobil-jakarta-selatan": {
    slug: "sewa-mobil-jakarta-selatan",
    targetKeyword: "sewa mobil jakarta selatan",
    metaTitle: "Sewa Mobil Jakarta Selatan Matic Harian & Bulanan Terpercaya",
    metaDescription:
      "Rental sewa mobil Jakarta Selatan transmisi matic harian & bulanan. Antar-jemput unit ke Pondok Indah, Cilandak, TB Simatupang, Kemang, & Senopati.",
    h1: "Sewa Mobil Jakarta Selatan - Armada Matic Prima Harian & Bulanan",
    intro:
      "Nikmati kenyamanan berkendara di Jakarta Selatan tanpa pegal di tengah kemacetan. Sewa Mobil Matic menyediakan armada 100% matic terawat dengan layanan antar-jemput ke lokasi Anda di Jaksel.",
    serviceDetail: {
      heading: "Layanan Rental Mobil Matic Terpercaya di Jakarta Selatan",
      paragraphs: [
        "Jakarta Selatan adalah pusat bisnis, koridor perkantoran terkemuka, dan kawasan hunian prestisius di ibukota. Menghadapi kemacetan di koridor TB Simatupang, Blok M, atau Rasuna Said memerlukan armada mobil matic yang nyaman dan responsif.",
        "Sewa Mobil Matic menawarkan kemudahan sewa harian untuk kebutuhan mobilitas profesional dan keluarga, serta paket sewa bulanan hemat untuk ekspatriat, staf eksekutif, dan operasional kantor di kawasan Jakarta Selatan.",
      ],
    },
    advantages: [
      {
        title: "100% Mobil Matic Nyaman",
        desc: "Armada otomatis modern yang membuat perjalanan di tengah kemacetan Jakarta Selatan terasa lebih santai.",
      },
      {
        title: "Antar-Jemput Seluruh Jaksel",
        desc: "Unit siap diantarkan langsung ke apartemen, perumahan, hotel, atau gedung kantor Anda di Jaksel.",
      },
      {
        title: "Tarif Kompetitif & Transparan",
        desc: "Perincian biaya jelas tanpa biaya tersembunyi dengan pilihan durasi fleksibel.",
      },
      {
        title: "Siap Personal & Perusahaan",
        desc: "Mendukung kebutuhan sewa individu maupun kebutuhan operasional bisnis (corporate rental).",
      },
    ],
    coverageTitle: "Cakupan Area Layanan Sewa Mobil di Jakarta Selatan",
    coverageAreas: [
      "Pondok Indah, Cilandak, & Lebak Bulus",
      "Kawasan Perkantoran TB Simatupang & Fatmawati",
      "Kebayoran Baru, Senopati, & Blok M",
      "Kemang, Bangka, & Ampera Raya",
      "Kuningan, Rasuna Said, Pancoran, & Tebet",
      "Pasar Minggu, Pejaten, & Jagakarsa",
    ],
    waMessage:
      "Halo Sewa Mobil Matic, saya ingin bertanya sewa mobil untuk area Jakarta Selatan.",
    relatedPages: [
      { title: "Sewa Mobil Jakarta Barat", slug: "sewa-mobil-jakarta-barat" },
      { title: "Sewa Mobil Bintaro", slug: "sewa-mobil-bintaro" },
      {
        title: "Sewa Mobil Bulanan Jakarta",
        slug: "sewa-mobil-bulanan-jakarta",
      },
      { title: "Sewa Mobil BSD", slug: "sewa-mobil-bsd" },
    ],
  },
  "sewa-mobil-jakarta-barat": {
    slug: "sewa-mobil-jakarta-barat",
    targetKeyword: "sewa mobil jakarta barat",
    metaTitle: "Sewa Mobil Jakarta Barat Matic Harian & Bulanan Terpercaya",
    metaDescription:
      "Sewa mobil Jakarta Barat transmisi matic harian & bulanan terawat. Antar unit ke Puri Indah, Kebon Jeruk, Kembangan, Tanjung Duren, & Grogol.",
    h1: "Sewa Mobil Jakarta Barat - Transmisi Matic Terawat Harian & Bulanan",
    intro:
      "Solusi praktis rental mobil matic di Jakarta Barat. Sewa Mobil Matic menghadirkan armada terawat, tarif hemat harian dan bulanan, serta kemudahan antar-jemput unit ke rumah atau kantor Anda.",
    serviceDetail: {
      heading: "Layanan Sewa Kendaraan Matic Fleksibel di Area Jakarta Barat",
      paragraphs: [
        "Dengan akses tol langsung menuju Bandara Soekarno-Hatta dan Tangerang, Jakarta Barat menjadi salah satu kawasan hunian dan perdagangan tersibuk di Jabodetabek. Memiliki armada mobil matic yang siap pakai memudahkan setiap rencana mobilitas Anda.",
        "Kami melayani pengantaran unit ke kawasan perumahan, apartemen, maupun pusat perkantoran di Puri Indah, Kembangan, hingga Kebon Jeruk. Seluruh unit kami dirawat berkala agar selalu dalam kondisi prima.",
      ],
    },
    advantages: [
      {
        title: "Transmisi Otomatis Nyaman",
        desc: "Mengemudi lebih santai dan rileks tanpa pegal di jalur arteri maupun tol Jakarta Barat.",
      },
      {
        title: "Pengantaran Door-to-Door",
        desc: "Mobil diantar dan dijemput langsung di alamat domisili atau titik pertemuan yang disepakati.",
      },
      {
        title: "Booking Mudah via WhatsApp",
        desc: "Proses konfirmasi cepat, persyaratan praktis, dan respon CS yang ramah dan solutif.",
      },
      {
        title: "Tarif Bersaing & Diskon Bulanan",
        desc: "Skema harga harian yang kompetitif dan diskon hemat untuk durasi sewa bulanan.",
      },
    ],
    coverageTitle: "Cakupan Area Layanan Sewa Mobil di Jakarta Barat",
    coverageAreas: [
      "Puri Indah, Kembangan, & Meruya",
      "Kebon Jeruk, Kedoya, & Green Garden",
      "Tanjung Duren, Grogol, Tomang, & Kemanggisan",
      "Cengkareng, Daan Mogot, & Kalideres",
      "Permata Hijau & Slipi",
      "Koridor Tol Menuju Bandara Soekarno-Hatta (CGK)",
    ],
    waMessage:
      "Halo Sewa Mobil Matic, saya berminat sewa mobil untuk wilayah Jakarta Barat.",
    relatedPages: [
      {
        title: "Sewa Mobil Jakarta Selatan",
        slug: "sewa-mobil-jakarta-selatan",
      },
      { title: "Sewa Mobil Alam Sutera", slug: "sewa-mobil-alam-sutera" },
      {
        title: "Sewa Mobil Bulanan Jakarta",
        slug: "sewa-mobil-bulanan-jakarta",
      },
      { title: "Sewa Mobil BSD", slug: "sewa-mobil-bsd" },
    ],
  },
};
