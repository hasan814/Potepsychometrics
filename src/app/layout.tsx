import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Potepsycholometrics App",
  description:
    "Unlock the potential of psychological evaluation with Potepsycholometrics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
