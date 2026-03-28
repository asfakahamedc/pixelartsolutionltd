import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PostHogProvider } from "@/components/PostHogProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixelart Solution Ltd | Agency Website",
  description: "Precision engineered B2B corporate web infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-surface text-neutral-900 font-sans antialiased selection:bg-brand selection:text-white flex flex-col min-h-screen">
        <PostHogProvider>
          <Navigation />
          {/* Global container: max-width is 1200px (max-w-[1200px] mx-auto with 80-120px horizontal padding on large screens) */}
          <main className="flex-grow max-w-[1200px] mx-auto px-6 lg:px-[80px] xl:px-[120px] w-full mt-10">
            {children}
          </main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
