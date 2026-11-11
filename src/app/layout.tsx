import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "샬롬자유학교 | 이왕이면 샬자~",
  description: "하나님의 형상을 회복하고 삶의 힘을 기르는 교육 · 샬롬자유학교 학생 실습 소개 사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#fdfbf7] text-[#213524]">
        {/* 상단 공통 네비게이션 헤더 */}
        <Navbar />

        {/* 메인 콘텐츠 영역 */}
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {children}
        </main>

        {/* 하단 푸터 (규칙 준수) */}
        <footer className="mt-auto border-t border-emerald-900/10 bg-[#f7f4ec] py-6 px-4 text-center text-xs sm:text-sm text-emerald-950/70">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
            <span>학생 실습으로 만든 사이트예요 (공식 홈페이지 아님)</span>
            <span className="hidden sm:inline">·</span>
            <span>
              공식 홈페이지:{" "}
              <a
                href="https://www.shalomfree.kr"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-emerald-900 font-medium"
              >
                shalomfree.kr
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
