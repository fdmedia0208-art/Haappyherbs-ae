import "@fontsource/cinzel/500.css";
import "@fontsource/cinzel/600.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://haappy-herbs-grand-launch.vercel.app");

const title = "Haappy Herbs Grand Launch · A Special Invitation";
const description =
  "You are warmly invited to the Grand Launch of Haappy Herbs – Beautiful Naturally, with our Emerging Founder Shrutika Arjun. 15 November 2026, 4:00 PM · BurJuman Mall, 2nd Floor, Lobby E, Dubai.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Haappy Herbs",
  keywords: ["Haappy Herbs", "Grand Launch", "Shrutika Arjun", "BurJuman Mall", "Dubai", "Ayurvedic skincare"],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Haappy Herbs",
    title,
    description,
    locale: "en_AE",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Haappy Herbs Grand Launch with Shrutika Arjun" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  icons: { icon: "/icon.svg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b2214",
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Haappy Herbs Grand Launch",
  description,
  startDate: "2026-11-15T16:00:00+04:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "BurJuman Mall",
    address: { "@type": "PostalAddress", streetAddress: "2nd Floor, Lobby E", addressLocality: "Dubai", addressCountry: "AE" },
  },
  performer: { "@type": "Person", name: "Shrutika Arjun" },
  organizer: { "@type": "Organization", name: "Haappy Herbs", url: "https://haappyherbs.ae" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/media/hero-poster.jpg" />
        <link rel="preconnect" href="https://cdn.shopify.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
