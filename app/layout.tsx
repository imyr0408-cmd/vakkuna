import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "VAKKUNA | Intensive Barrier Cream",
  description: "전문 에스테틱의 보습 장벽 케어를 매일의 루틴으로.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
