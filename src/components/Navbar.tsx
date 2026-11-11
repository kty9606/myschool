"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "홈", href: "/" },
  { name: "학교생활", href: "/life" },
  { name: "방명록", href: "/guestbook" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#fdfbf7]/95 backdrop-blur-sm border-b border-emerald-900/10 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* 로고 & 학교명 & 인사말 */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-emerald-800/20 bg-white flex-shrink-0 shadow-xs">
            <Image
              src="/logo.jpg"
              alt="샬롬자유학교 로고"
              fill
              sizes="36px"
              className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg text-emerald-950 tracking-tight leading-tight">
              샬롬자유학교
            </span>
            <span className="text-[11px] font-medium text-amber-700 leading-none">
              이왕이면 샬자~ 🌱
            </span>
          </div>
        </Link>

        {/* 메뉴 네비게이션 */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? "bg-emerald-800 text-amber-100 shadow-xs"
                    : "text-emerald-950/80 hover:text-emerald-900 hover:bg-emerald-900/5"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
