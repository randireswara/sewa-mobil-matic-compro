export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: "City Car" | "Compact SUV" | "MPV" | "Premium MPV";
  transmission: "Automatic" | "CVT";
  seats: number;
  engine: string;
  fuelType: "Bensin";
  dailyPrice: number;
  monthlyPrice: number;
  image: string;
  features: string[];
  isPopular?: boolean;
  available: boolean;
  slug: string;
}

export const FLEET_DATA: Vehicle[] = [
  {
    id: "honda-brio-cvt",
    name: "Honda Brio E CVT",
    brand: "Honda",
    category: "City Car",
    transmission: "Automatic",
    seats: 5,
    engine: "1.2L i-VTEC",
    fuelType: "Bensin",
    dailyPrice: 350000,
    monthlyPrice: 5500000,
    image: "/images/fleet/brio-satya.png",
    features: [
      "Lincah & Hemat BBM",
      "Touchscreen Head Unit",
      "AC Digital",
      "Dual SRS Airbags",
      "Kamera Parkir",
    ],
    isPopular: true,
    available: true,
    slug: "honda-brio-cvt",
  },
  {
    id: "toyota-avanza-cvt",
    name: "Toyota Avanza All New CVT",
    brand: "Toyota",
    category: "MPV",
    transmission: "CVT",
    seats: 7,
    engine: "1.5L Dual VVT-i",
    fuelType: "Bensin",
    dailyPrice: 450000,
    monthlyPrice: 6500000,
    image: "/images/fleet/avanza-white.png",
    features: [
      "7-Seater Lapang",
      "AC Double Blower",
      "Long Sofa Mode",
      "ABS & EBD",
      "Hill Start Assist",
    ],
    isPopular: true,
    available: true,
    slug: "toyota-avanza-cvt",
  },
  {
    id: "mitsubishi-xpander-cvt",
    name: "Mitsubishi Xpander Ultimate CVT",
    brand: "Mitsubishi",
    category: "MPV",
    transmission: "CVT",
    seats: 7,
    engine: "1.5L MIVEC",
    fuelType: "Bensin",
    dailyPrice: 550000,
    monthlyPrice: 7500000,
    image: "/images/fleet/xpander.png",
    features: [
      "Suspensi Sangat Nyaman",
      "Electric Parking Brake",
      "Kabin Senyap",
      "Apple CarPlay / Android Auto",
      "Cruise Control",
    ],
    isPopular: true,
    available: true,
    slug: "mitsubishi-xpander-cvt",
  },
  {
    id: "toyota-raize-turbo",
    name: "Toyota Raize 1.0 Turbo CVT",
    brand: "Toyota",
    category: "Compact SUV",
    transmission: "CVT",
    seats: 5,
    engine: "1.0L Turbocharged",
    fuelType: "Bensin",
    dailyPrice: 450000,
    monthlyPrice: 6800000,
    image: "/images/fleet/raize-yellow-black.png",
    features: [
      "Mesin Turbo Responsif",
      "Ground Clearance Tinggi",
      "Digital Meter Cluster",
      "Velg Ring 17",
      "Design Sporty",
    ],
    isPopular: false,
    available: true,
    slug: "toyota-raize-turbo",
  },
  {
    id: "honda-hrv-se",
    name: "Honda HR-V SE CVT",
    brand: "Honda",
    category: "Compact SUV",
    transmission: "CVT",
    seats: 5,
    engine: "1.5L DOHC i-VTEC",
    fuelType: "Bensin",
    dailyPrice: 700000,
    monthlyPrice: 11000000,
    image: "/images/fleet/hrv.png",
    features: [
      "Panoramic Glass Roof",
      "Honda SENSING",
      "Interior Full Leather",
      "Hands-free Power Tailgate",
      "Desain Executive",
    ],
    isPopular: false,
    available: true,
    slug: "honda-hrv-se",
  },
  {
    id: "toyota-innova-zenix",
    name: "Toyota Innova Zenix G CVT",
    brand: "Toyota",
    category: "Premium MPV",
    transmission: "CVT",
    seats: 7,
    engine: "2.0L TNGA Engine",
    fuelType: "Bensin",
    dailyPrice: 800000,
    monthlyPrice: 12500000,
    image: "/images/fleet/zenix.png",
    features: [
      "Kabin Mewah & Sangat Luas",
      "Platform TNGA Nyaman",
      "Rear Seat Entertainment",
      "Dual Zone Climate Control",
      "Cocok Kebutuhan Direksi/VVIP",
    ],
    isPopular: true,
    available: true,
    slug: "toyota-innova-zenix",
  },
];

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}
