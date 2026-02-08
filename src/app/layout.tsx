import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

export const metadata: Metadata = {
  title: "Ivan Alesik - Full-stack Engineer",
  description:
    "Full-Stack Engineer with 5+ years of experience in building scalable, high-load systems and AI-integrated web applications. Strong background in applied mathematics.",
  keywords: [
    "Full-stack Engineer",
    "Software Engineer",
    "React",
    "Node.js",
    "TypeScript",
    "AI Integration",
    "Web Development",
    "Ivan Alesik",
  ],
  authors: [{ name: "Ivan Alesik" }],
  creator: "Ivan Alesik",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ivan Alesik - Full-stack Engineer",
    description:
      "Full-Stack Engineer with 5+ years of experience in building scalable, high-load systems and AI-integrated web applications.",
    siteName: "Ivan Alesik Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Alesik - Full-stack Engineer",
    description:
      "Full-Stack Engineer with 5+ years of experience in building scalable, high-load systems and AI-integrated web applications.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden scrollbar-custom">
        <SmoothScrolling />
        {children}
      </body>
    </html>
  );
}
