export interface SiteConfig {
  name: string;
  shortName: string;
  domain: string;
  url: string;
  whatsappNumber: string;
  email: string;
  phoneDisplay: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
    region: string;
  };
  businessHours: string;
  description: string;
  defaultOgImage: string;
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
  defaultSeo: {
    title: string;
    description: string;
  };
}

const siteUrl = import.meta.env.PUBLIC_SITE_URL || "https://sewamobilmatic.id";
const waNumber = import.meta.env.PUBLIC_WHATSAPP_NUMBER || "+6287864264262";

export const siteConfig: SiteConfig = {
  name: "Sewa Mobil Matic",
  shortName: "SewaMobilMatic",
  domain: "sewamobilmatic.id",
  url: siteUrl,
  whatsappNumber: waNumber,
  email: "info@sewamobilmatic.id",
  phoneDisplay: "+6287864264262",
  address: {
    street: "Jl. Lengkong Gudang Timur Raya No. 97A",
    city: "Tangerang Selatan",
    province: "Banten",
    postalCode: "15321",
    country: "ID",
    region: "Jabodetabek",
  },
  businessHours: "Mo-Su 07:00-22:00",
  description:
    "Layanan rental mobil matic terpercaya untuk kebutuhan harian dan bulanan di area BSD, Tangerang Selatan, Alam Sutera, Jakarta, dan sekitarnya.",
  defaultOgImage: "/images/og-image.svg",
  socials: {
    instagram: "https://instagram.com/sewamobilmatic",
    facebook: "https://facebook.com/sewamobilmatic",
    tiktok: "https://tiktok.com/@sewamobilmatic",
  },
  defaultSeo: {
    title: "Sewa Mobil Matic BSD & Bulanan Terdekat | Rental Mobil Jabodetabek",
    description:
      "Sewa mobil matic harian dan bulanan terpercaya area BSD City, Tangerang Selatan, Alam Sutera, & Jakarta. Armada terawat, proses transparan & mudah.",
  },
};

/**
 * Helper to generate a pre-filled WhatsApp link with custom encoded text
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultMsg =
    "Halo Sewa Mobil Matic, saya ingin menanyakan informasi sewa mobil.";
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
