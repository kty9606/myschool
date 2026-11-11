import Link from "next/link";

interface Activity {
  name: string;
  emoji: string;
  description: string;
  tag: string;
}

const ACTIVITIES: Activity[] = [
  {
    name: "걷기 여행",
    emoji: "👟",
    description: "발걸음을 맞추며 길 위에서 나와 친구를 깊이 만나는 시간",
    tag: "자유와 성찰",
  },
  {
    name: "몰입주간",
    emoji: "💡",
    description: "좋아하는 주제와 배움에 온전히 푹 빠져보는 특별한 일주일",
    tag: "배움과 탐구",
  },
  {
    name: "학교화폐·기본소득·콩앗이",
    emoji: "🪙",
    description: "학교 안에서 스스로 경제와 나눔, 기본소득을 경험하는 생활",
    tag: "대안의 삶",
  },
  {
    name: "기숙사 생활",
    emoji: "🏡",
    description: "함께 살아가며 서로 다른 우리가 배려와 책임을 배우는 연습",
    tag: "공동체",
  },
  {
    name: "비폭력대화",
    emoji: "💬",
    description: "솔직한 마음을 표현하고 서로에게 따뜻하게 귀 기울이는 평화의 대화",
    tag: "사랑과 평화",
  },
];

export default function LifePage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 상단 소개 헤더 */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs sm:text-sm font-semibold">
          <span>🎒</span>
          <span>재학생이 들려주는 학교 이야기</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
          샬롬자유학교의 학교생활
        </h1>
        <p className="text-sm sm:text-base text-emerald-900/80 leading-relaxed">
          책상 앞 공부를 넘어, 삶의 현장에서 온몸으로 부딪히며 배우는 우리의 5가지 특별한 배움 활동을 소개합니다.
        </p>
      </section>

      {/* 활동 카드 5개 그리드 */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACTIVITIES.map((activity, index) => (
          <div
            key={activity.name}
            className={`bg-[#fffefb] border border-emerald-900/10 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group ${
              index === 0 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl p-3 bg-emerald-50 rounded-2xl border border-emerald-900/5 group-hover:scale-110 transition-transform duration-200 inline-block">
                  {activity.emoji}
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                  {activity.tag}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors">
                  {activity.name}
                </h3>
                <p className="text-sm text-emerald-900/85 leading-relaxed font-medium">
                  {activity.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-900/5 flex items-center justify-between text-xs text-emerald-800/60">
              <span>샬롬자유학교 핵심 배움</span>
              <span className="font-semibold text-emerald-900/80">활동 #{index + 1}</span>
            </div>
          </div>
        ))}
      </section>

      {/* 하단 방명록 안내 배너 */}
      <section className="rounded-2xl bg-[#f5f1e8] border border-emerald-900/10 p-6 sm:p-8 text-center space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
          우리의 배움과 성장을 응원해 주세요!
        </h3>
        <p className="text-xs sm:text-sm text-emerald-900/70 max-w-md mx-auto">
          학교생활을 둘러보고 느낀 점이나 응원의 한마디를 방명록에 남겨주시면 재학생 모두에게 큰 힘이 됩니다.
        </p>
        <Link
          href="/guestbook"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-800 text-amber-100 font-semibold text-sm hover:bg-emerald-900 transition-colors shadow-xs"
        >
          <span>💌</span>
          <span>방명록에 응원 남기러 가기</span>
        </Link>
      </section>
    </div>
  );
}
