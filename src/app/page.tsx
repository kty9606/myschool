import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 히어로 섹션 (재학생 시선 & 환영) */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 to-emerald-800 text-[#fdfbf7] p-8 sm:p-12 shadow-lg">
        {/* 배경 은은한 데코 */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-400/15 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-emerald-600/30 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/60 border border-emerald-600/40 text-amber-200 text-xs sm:text-sm font-medium">
            <span>🌱</span>
            <span>재학생이 직접 소개하는 우리들의 배움터</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            이왕이면 <span className="text-amber-300">샬자~</span>
            <br />
            샬롬자유학교에 오신 것을 환영해요!
          </h1>

          <p className="text-emerald-100/90 text-base sm:text-lg font-normal leading-relaxed pt-1">
            "하나님의 형상을 회복하고 삶의 힘을 기르는 교육"
          </p>

          <p className="text-emerald-200/80 text-sm sm:text-base leading-relaxed">
            우리가 학교에서 배우고 숨 쉬며 함께 자라나는 이야기를 이곳에 담았어요. 
            정해진 답 대신 스스로 선택하고, 서로를 아끼며 삶의 멋을 배워가고 있습니다.
          </p>

          <div className="flex flex-wrap gap-3 pt-3">
            <Link
              href="/life"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-amber-400 text-emerald-950 font-bold text-sm hover:bg-amber-300 transition-colors shadow-sm"
            >
              우리의 학교생활 둘러보기 →
            </Link>
            <Link
              href="/guestbook"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-emerald-700/70 hover:bg-emerald-700 text-white font-semibold text-sm border border-emerald-600/50 transition-colors"
            >
              응원 방명록 남기기 💌
            </Link>
          </div>
        </div>
      </section>

      {/* 핵심 가치 3가지 섹션 */}
      <section className="space-y-6">
        <div className="text-center sm:text-left space-y-1">
          <span className="text-xs font-bold tracking-wider text-amber-800 uppercase">
            Core Values
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950">
            우리가 함께 품어가는 3가지 핵심 가치
          </h2>
          <p className="text-sm text-emerald-900/70">
            샬롬자유학교에서 매일의 삶과 배움의 기준이 되는 세 가지 마음입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* 가치 1: 자유의 맛 */}
          <div className="bg-[#fffefb] border border-emerald-900/10 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center text-2xl">
                🌿
              </div>
              <h3 className="text-lg font-bold text-emerald-950">
                자유의 맛
              </h3>
              <p className="text-sm text-emerald-900/80 leading-relaxed font-medium">
                선택하고 책임지는 연습
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-emerald-900/5 text-xs text-emerald-800/70">
              스스로 결정하고 그 결과를 책임지며 참된 자유를 맛봅니다.
            </div>
          </div>

          {/* 가치 2: 사랑의 멋 */}
          <div className="bg-[#fffefb] border border-emerald-900/10 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100/70 text-amber-800 flex items-center justify-center text-2xl">
                💛
              </div>
              <h3 className="text-lg font-bold text-emerald-950">
                사랑의 멋
              </h3>
              <p className="text-sm text-emerald-900/80 leading-relaxed font-medium">
                하나님, 나와 이웃, 자연 사랑
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-emerald-900/5 text-xs text-emerald-800/70">
              나를 둘러싼 모든 존재와 깊이 연결되며 사랑의 멋을 살아냅니다.
            </div>
          </div>

          {/* 가치 3: 대안의 삶 */}
          <div className="bg-[#fffefb] border border-emerald-900/10 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center text-2xl">
                🌱
              </div>
              <h3 className="text-lg font-bold text-emerald-950">
                대안의 삶
              </h3>
              <p className="text-sm text-emerald-900/80 leading-relaxed font-medium">
                앎과 삶의 일치
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-emerald-900/5 text-xs text-emerald-800/70">
              배운 것을 머리에만 두지 않고 일상의 삶으로 살아내는 연습을 합니다.
            </div>
          </div>
        </div>
      </section>

      {/* 1년의 흐름 섹션 */}
      <section className="bg-[#f5f1e8] rounded-3xl p-6 sm:p-8 border border-emerald-900/10 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold tracking-wider text-amber-800 uppercase">
            Curriculum Flow
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-950">
            샬롬자유학교의 1년 흐름
          </h2>
          <p className="text-xs sm:text-sm text-emerald-900/70">
            우리의 1년은 기초에서 시작해 방향을 찾고 대안을 실천하는 여정으로 이어집니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white/80 backdrop-blur-xs rounded-xl p-5 border border-emerald-900/5 shadow-xs relative">
            <div className="text-xs font-bold text-emerald-700 mb-1">1학기</div>
            <div className="text-lg font-bold text-emerald-950 flex items-center gap-1.5">
              <span>🌱</span> 기초
            </div>
            <p className="text-xs text-emerald-900/70 mt-2 leading-relaxed">
              서로를 알아가고 삶과 배움의 단단한 기초를 다지는 학기
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xs rounded-xl p-5 border border-emerald-900/5 shadow-xs relative">
            <div className="text-xs font-bold text-amber-700 mb-1">2학기</div>
            <div className="text-lg font-bold text-emerald-950 flex items-center gap-1.5">
              <span>🧭</span> 방향
            </div>
            <p className="text-xs text-emerald-900/70 mt-2 leading-relaxed">
              더 깊은 배움과 관심사를 탐구하며 나만의 방향을 정립해가는 학기
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-xs rounded-xl p-5 border border-emerald-900/5 shadow-xs relative">
            <div className="text-xs font-bold text-emerald-800 mb-1">3학기</div>
            <div className="text-lg font-bold text-emerald-950 flex items-center gap-1.5">
              <span>🌾</span> 대안
            </div>
            <p className="text-xs text-emerald-900/70 mt-2 leading-relaxed">
              배운 것을 공동체와 세상 속에서 대안의 삶으로 실천해보는 학기
            </p>
          </div>
        </div>
      </section>

      {/* 학교생활 맛보기 카드 배너 */}
      <section className="rounded-2xl border border-dashed border-emerald-900/20 p-6 sm:p-8 bg-[#fffefb] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
            "우리는 학교에서 이런 활동들을 함께해요!"
          </h3>
          <p className="text-xs sm:text-sm text-emerald-900/70">
            걷기 여행, 몰입주간, 학교화폐, 기숙사 생활 등 생생한 5가지 활동 카드를 확인해 보세요.
          </p>
        </div>
        <Link
          href="/life"
          className="px-5 py-2.5 rounded-full bg-emerald-800 text-amber-100 hover:bg-emerald-900 font-semibold text-sm transition-colors flex-shrink-0"
        >
          학교생활 보러가기 →
        </Link>
      </section>
    </div>
  );
}
