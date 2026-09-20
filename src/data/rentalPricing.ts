export interface PricingItem {
  vehicle: string;
  price: string;
  category?: string;
  note?: string;
}

export const TERMS_AND_CONDITIONS = [
  "Harap konfirmasi 1 hari sebelumnya untuk memastikan ketersediaan unitnya.",
  "Persyaratan sewa lepas kunci pribadi mengisi form sewa, Kirim KTP, KK, SIM via WhatsApp ke Admin.",
  "Pembayaran sewa dan deposit di transfer saat serah terima kendaraan beserta checklist (COD).",
  "Biaya antar / ambil menyesuaikan dengan Biaya GrabCar PP dari pool kita ke lokasi customer.",
  "24 Jam Perhari/Pertanggal terhitung mulai 00.00 sampai jam 24.00.",
];

export const DAILY_RENTAL_DATA: PricingItem[] = [
  { vehicle: "Toyota Agya A/T", price: "Rp 400.000", category: "City Car" },
  { vehicle: "Grand Avanza Facelift", price: "Rp 400.000", category: "MPV" },
  { vehicle: "Honda Mobilio E CVT", price: "Rp 450.000", category: "MPV" },
  { vehicle: "Honda Brio", price: "Rp 450.000", category: "City Car" },
  { vehicle: "Toyota Avanza 1.5 CVT", price: "Rp 500.000", category: "MPV" },
  { vehicle: "Suzuki XL7 Beta", price: "Rp 550.000", category: "SUV" },
  { vehicle: "Toyota Raize GR", price: "Rp 550.000", category: "Compact SUV" },
  { vehicle: "Honda Jazz Rs", price: "Rp 550.000", category: "Hatchback" },
  { vehicle: "Toyota Rush GR Sport", price: "Rp 600.000", category: "SUV" },
  {
    vehicle: "Mitsubishi Expander Ultimate",
    price: "Rp 600.000",
    category: "MPV",
  },
  { vehicle: "New Honda WRV Rs", price: "Rp 600.000", category: "Compact SUV" },
  { vehicle: "Toyota Veloz 1.5 Q CVT", price: "Rp 600.000", category: "MPV" },
  { vehicle: "Hyundai Stargazer", price: "Rp 600.000", category: "MPV" },
  {
    vehicle: "New Mitsubishi X-Force",
    price: "Rp 650.000",
    category: "Compact SUV",
  },
  {
    vehicle: "Innova Reborn G Diesel A/T",
    price: "Rp 750.000",
    category: "Medium MPV",
  },
  { vehicle: "Wuling Almaz Sunroof", price: "Rp 750.000", category: "SUV" },
  {
    vehicle: "Toyota Voxy Captain Seat Sunroof",
    price: "Rp 800.000",
    category: "Premium MPV",
  },
  {
    vehicle: "Honda HRV SE CVT Moonroof",
    price: "Rp 850.000",
    category: "Compact SUV",
  },
  {
    vehicle: "Toyota Innova Zenix V CVT Sunroof",
    price: "Rp 1.100.000",
    category: "Premium MPV",
  },
  { vehicle: "Toyota Fortuner GR", price: "Rp 1.300.000", category: "Big SUV" },
  {
    vehicle: "Toyota Alphard + Driver",
    price: "Hubungi Admin",
    category: "Luxury MPV",
    note: "Include Driver",
  },
  {
    vehicle: "Toyota Hi-Ace + Driver",
    price: "Hubungi Admin",
    category: "Minibus",
    note: "Include Driver",
  },
];

export const WEEKLY_RENTAL_DATA: PricingItem[] = [
  { vehicle: "Toyota Agya A/T", price: "Rp 2.100.000", category: "City Car" },
  { vehicle: "Grand Avanza Facelift", price: "Rp 2.300.000", category: "MPV" },
  { vehicle: "Honda Mobilio E CVT", price: "Rp 2.700.000", category: "MPV" },
  { vehicle: "Honda Brio", price: "Rp 2.700.000", category: "City Car" },
  { vehicle: "Toyota Avanza 1.5 CVT", price: "Rp 3.300.000", category: "MPV" },
  { vehicle: "Suzuki XL7 Beta", price: "Rp 3.300.000", category: "SUV" },
  {
    vehicle: "Toyota Raize GR",
    price: "Rp 3.300.000",
    category: "Compact SUV",
  },
  { vehicle: "Honda Jazz Rs", price: "Rp 3.500.000", category: "Hatchback" },
  { vehicle: "Toyota Rush GR Sport", price: "Rp 3.700.000", category: "SUV" },
  {
    vehicle: "Mitsubishi Expander Ultimate",
    price: "Rp 3.700.000",
    category: "MPV",
  },
  {
    vehicle: "New Honda WRV Rs",
    price: "Rp 3.700.000",
    category: "Compact SUV",
  },
  { vehicle: "Toyota Veloz 1.5 Q CVT", price: "Rp 4.000.000", category: "MPV" },
  { vehicle: "Hyundai Stargazer", price: "Rp 4.200.000", category: "MPV" },
  {
    vehicle: "New Mitsubishi X-Force",
    price: "Rp 4.500.000",
    category: "Compact SUV",
  },
  {
    vehicle: "Innova Reborn G Diesel A/T",
    price: "Rp 4.500.000",
    category: "Medium MPV",
  },
  { vehicle: "Wuling Almaz Sunroof", price: "Rp 4.500.000", category: "SUV" },
  {
    vehicle: "Toyota Voxy Captain Seat Sunroof",
    price: "Rp 5.000.000",
    category: "Premium MPV",
  },
  {
    vehicle: "Honda HRV SE CVT Moonroof",
    price: "Rp 5.000.000",
    category: "Compact SUV",
  },
  {
    vehicle: "Toyota Innova Zenix V CVT Sunroof",
    price: "Rp 7.000.000",
    category: "Premium MPV",
  },
  { vehicle: "Toyota Fortuner GR", price: "Rp 8.000.000", category: "Big SUV" },
  {
    vehicle: "Toyota Alphard + Driver",
    price: "Hubungi Admin",
    category: "Luxury MPV",
    note: "Include Driver",
  },
  {
    vehicle: "Toyota Hi-Ace + Driver",
    price: "Hubungi Admin",
    category: "Minibus",
    note: "Include Driver",
  },
];

export const MONTHLY_RENTAL_DATA: PricingItem[] = [
  { vehicle: "Toyota Agya A/T", price: "Rp 5.500.000", category: "City Car" },
  { vehicle: "Grand Avanza Facelift", price: "Rp 6.500.000", category: "MPV" },
  { vehicle: "Honda Mobilio E CVT", price: "Rp 7.000.000", category: "MPV" },
  { vehicle: "Honda Brio", price: "Rp 7.000.000", category: "City Car" },
  { vehicle: "Toyota Avanza 1.5 CVT", price: "Rp 8.000.000", category: "MPV" },
  { vehicle: "Suzuki XL7 Beta", price: "Rp 9.000.000", category: "SUV" },
  {
    vehicle: "Toyota Raize GR",
    price: "Rp 8.500.000",
    category: "Compact SUV",
  },
  { vehicle: "Honda Jazz Rs", price: "Rp 8.500.000", category: "Hatchback" },
  { vehicle: "Toyota Rush GR Sport", price: "Rp 9.000.000", category: "SUV" },
  {
    vehicle: "Mitsubishi Expander Ultimate",
    price: "Rp 9.000.000",
    category: "MPV",
  },
  {
    vehicle: "New Honda WRV Rs",
    price: "Rp 9.000.000",
    category: "Compact SUV",
  },
  { vehicle: "Toyota Veloz 1.5 Q CVT", price: "Rp 9.900.000", category: "MPV" },
  { vehicle: "Hyundai Stargazer", price: "Rp 9.900.000", category: "MPV" },
  {
    vehicle: "New Mitsubishi X-Force",
    price: "Rp 11.000.000",
    category: "Compact SUV",
  },
  {
    vehicle: "Innova Reborn G Diesel A/T",
    price: "Rp 13.000.000",
    category: "Medium MPV",
  },
  { vehicle: "Wuling Almaz Sunroof", price: "Rp 12.000.000", category: "SUV" },
  {
    vehicle: "Toyota Voxy Captain Seat Sunroof",
    price: "Rp 12.000.000",
    category: "Premium MPV",
  },
  {
    vehicle: "Honda HRV SE CVT Moonroof",
    price: "Rp 13.000.000",
    category: "Compact SUV",
  },
  {
    vehicle: "Toyota Innova Zenix V CVT Sunroof",
    price: "Rp 18.000.000",
    category: "Premium MPV",
  },
  {
    vehicle: "Toyota Fortuner GR",
    price: "Rp 23.000.000",
    category: "Big SUV",
  },
  {
    vehicle: "Toyota Alphard + Driver",
    price: "Hubungi Admin",
    category: "Luxury MPV",
    note: "Include Driver",
  },
  {
    vehicle: "Toyota Hi-Ace + Driver",
    price: "Hubungi Admin",
    category: "Minibus",
    note: "Include Driver",
  },
];
