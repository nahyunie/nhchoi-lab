import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nhchoi's lab",
  description: "Welcome to nhchoi's laboratory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
