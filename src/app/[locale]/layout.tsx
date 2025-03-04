/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { Providers } from "@/context";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const sourceSans3 = Poppins({
  subsets: ["latin"],
  weight: ["400","500", "600", "700"], // regular (400), semiBold (600)
  variable: "--font-source-sans-3",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7c3aed",
};

export const metadata: Metadata = {
  title: "Emhealth",
  description: "Emhealth app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const messages = await getMessages();

  const { locale } = await params;
  return (
    <html lang={locale}>
      <body
        suppressHydrationWarning={true}
        className={`${sourceSans3.variable} scrollbar-none`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
