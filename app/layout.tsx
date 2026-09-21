import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://htz2025.github.io"),
  title: "Hongtao Zheng | Academic Homepage",
  description:
    "Academic homepage of Hongtao Zheng, Ph.D. student at The Hong Kong Polytechnic University.",
  authors: [{ name: "Hongtao Zheng" }],
  openGraph: {
    title: "Hongtao Zheng | Academic Homepage",
    description:
      "Ph.D. student at The Hong Kong Polytechnic University working on computer vision, diffusion models, multimodal AI, fire safety, and AI for science.",
    url: "https://htz2025.github.io",
    siteName: "Hongtao Zheng",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
