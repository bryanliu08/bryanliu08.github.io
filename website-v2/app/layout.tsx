import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bryanliu08.github.io"),
  title: "Bryan Liu",
  description: "ML/AI Researcher. Incoming undergrad at UTSG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased grain min-h-screen">
        {children}
      </body>
    </html>
  );
}
