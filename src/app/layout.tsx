import localFont from "next/font/local";
import "../styles/globals.css";

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
      <body className={Pretendard.className}>{children}</body>
    </html>
  );
}
