import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qirat",
  description: "Software development startup",
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
