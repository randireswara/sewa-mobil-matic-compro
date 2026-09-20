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
  googleMapsUrl?: string;
  googleMapsEmbedUrl?: string;
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
const waNumber = "+6287864264262";

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
  googleMapsUrl: "https://maps.app.goo.gl/AjTdVSqWTYwxwykN7?g_st=ac",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8!2d106.685!3d-6.307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fad021c8da79%3A0x1fc3ae6d8086ffdd!2sPM4Q%2B44H%2C%20Lengkong%20Gudang%20Tim.%2C%20Kec.%20Serpong%2C%20Kota%20Tangerang%20Selatan%2C%20Banten%2015310!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
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
