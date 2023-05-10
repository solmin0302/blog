import MainLayout from "@/components/MainLayout";
import { getCustomMeta } from "@/data/metadatas";
import "@/styles/globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";

export const Pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = getCustomMeta({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Pretendard.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
