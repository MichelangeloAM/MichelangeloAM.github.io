import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./styles.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Michelangelo Amoruso Manzari | Software Engineer & Data Scientist",
  description: "Personal website of Michelangelo Amoruso Manzari, a Software Engineer and Data Scientist with expertise in Python, Java, and machine learning.",
  keywords: ["Software Engineer", "Data Scientist", "Python", "Java", "Machine Learning", "Portfolio", "Michelangelo Amoruso Manzari"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
