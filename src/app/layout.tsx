import type { Metadata } from "next";
import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "700", "800"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "MODERATO | Кулинарная студия",
  description: "Первая кулинарная студия на Урале с 2009 года. Звездные шеф-повара, необычный досуг, мастер-классы.",
  openGraph: {
    title: "MODERATO | Кулинарная студия",
    description: "Первая кулинарная студия на Урале",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${bebasNeue.variable} font-sans bg-primary text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
