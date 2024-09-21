import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/components/Providers";
import TopNavBar from "@/components/navbar/TopNavBar";
import Footer from "@/components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Production Serjik",
  description: "Generated Sajjad Mousavi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
      >
        <Providers>
          <div className=" flex flex-col">
            <div >
              <TopNavBar />
            </div>
            <div className="flex-1">
              <div className="p-2">
                {children}
              </div>
            </div>
            <div >
              <Footer />
            </div>
          </div>

        </Providers>
      </body>
    </html>
  );
}
