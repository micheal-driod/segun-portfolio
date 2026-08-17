import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Segun Adegbite — Full-Stack Developer & Product Builder",
  description: "Portfolio of Segun Adegbite: web applications, mobile products, business systems, dashboards and deployment-ready digital experiences.",
  keywords: ["Segun Adegbite", "full-stack developer", "Next.js developer", "Flutter developer", "PHP developer", "React developer", "remote developer"],
  openGraph: { title: "Segun Adegbite — Digital Builder", description: "Web applications, mobile products and business systems built for real-world use.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}><body>{children}</body></html>;
}
