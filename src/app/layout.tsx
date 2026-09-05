import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amiplaced.com"),
  title: "AmiPlaced Built For Indian Students",
  description:
    "Stop sending the same resume everywhere. Get job-specific resumes, recruiter-ready LinkedIn profiles, and actual application assistance.",
  keywords: [
    "AmiPlaced",
    "Resume Builder for Indian Students",
    "Targeted Resumes",
    "ATS Friendly Resume",
    "LinkedIn Profile Optimization",
    "Job Application Assistance",
    "Fresher Resumes India",
    "Student Placement Resume",
  ],
  authors: [{ name: "AmiPlaced", url: "https://www.amiplaced.com" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AmiPlaced Built For Indian Students",
    description:
      "Stop sending the same resume everywhere. Get job-specific resumes, recruiter-ready LinkedIn profiles, and actual application assistance.",
    url: "https://www.amiplaced.com",
    siteName: "AmiPlaced",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "AmiPlaced Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AmiPlaced Built For Indian Students",
    description:
      "Stop sending the same resume everywhere. Get job-specific resumes, recruiter-ready LinkedIn profiles, and actual application assistance.",
    images: ["/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AmiPlaced",
              "url": "https://www.amiplaced.com",
              "description":
                "Stop sending the same resume everywhere. Get job-specific resumes, recruiter-ready LinkedIn profiles, and actual application assistance.",
            }),
          }}
        />
      </head>
      <body className="min-h-full bg-[#F4F3ED] text-[#0A0A0A] selection:bg-[#D7FF3F] selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
