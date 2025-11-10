import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rohtech | Innovative Tech & IT Solutions",
  description:
    "Rohtech is a modern technology company providing innovative IT, software development, and digital transformation solutions. We empower businesses with smart technology, automation, and futuristic designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Rohtech is a modern technology company providing innovative IT, software development, and digital transformation solutions."
        />
        <meta
          name="keywords"
          content="Rohtech, IT solutions, software company, web development, digital transformation, AI, automation, tech solutions"
        />
        <meta name="author" content="Rohtech" />
        <link rel="canonical" href="https://rohtech.com/" />

        {/* ✅ Open Graph Meta Tags (for social sharing) */}
        <meta property="og:title" content="Rohtech | Innovative Tech & IT Solutions" />
        <meta
          property="og:description"
          content="Rohtech delivers cutting-edge IT and software development solutions that drive innovation and business growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rohtech.com/" />
        <meta property="og:image" content="https://rohtech.com/images/og-banner.jpg" />

        {/* ✅ Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rohtech | Innovative Tech & IT Solutions" />
        <meta
          name="twitter:description"
          content="Transform your business with Rohtech — a leader in innovative software, automation, and IT solutions."
        />
        <meta name="twitter:image" content="https://rohtech.com/images/og-banner.jpg" />

        {/* ✅ Structured Data (JSON-LD Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Rohtech",
                "url": "https://rohtech.com",
                "logo": "https://rohtech.com/images/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9000000000",
                  "contactType": "Customer Support"
                },
                "sameAs": [
                  "https://www.facebook.com/rohtech/",
                  "https://www.instagram.com/rohtech/",
                  "https://www.linkedin.com/company/rohtech/"
                ]
              }
            `,
          }}
        />

        {/* ✅ Google Analytics (replace with your GA ID) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
