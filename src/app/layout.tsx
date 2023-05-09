import MainLayout from "@/components/MainLayout";
import "@/styles/globals.css";
import localFont from "next/font/local";

export const Pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  title: "solmin.io",
  description: "blog project using Next.js",
};

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
