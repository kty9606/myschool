"use client";

import { useEffect, useState, useTransition } from "react";

interface GuestbookEntry {
  id: string;
  nickname: string;
  message: string;
  createdAt: string;
}

export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // 방명록 목록 불러오기 (서버 메모리 API)
  const fetchEntries = async () => {
    try {
      const res = await fetch("/api/guestbook");
      if (res.ok) {
        const data = await res.json();
        setEntries(data.entries || []);
      }
    } catch (err) {
      console.error("방명록 로딩 실패:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  // 방명록 작성 제출
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!nickname.trim()) {
      setErrorMsg("닉네임을 입력해 주세요.");
      return;
    }
    if (!message.trim()) {
      setErrorMsg("응원 메시지를 입력해 주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname, message }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "등록에 실패했습니다.");
      } else {
        setNickname("");
        setMessage("");
        setSuccessMsg("응원 메시지가 등록되었어요! 🌱");
        // 목록 갱신
        fetchEntries();
      }
    } catch (err) {
      setErrorMsg("네트워크 오류가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 날짜 포맷 함수
  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(
        date.getDate()
      ).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(
        date.getMinutes()
      ).padStart(2, "0")}`;
    } catch {
      return "";
    }
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 상단 소개 헤더 */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-semibold">
          <span>💌</span>
          <span>따뜻한 응원 한마디</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
          샬롬자유학교 방명록
        </h1>
        <p className="text-sm sm:text-base text-emerald-900/80 leading-relaxed">
          샬롬자유학교 학생들과 학교를 응원하는 메시지를 남겨주세요. 
          <br className="hidden sm:inline" />
          남겨주신 글은 데이터베이스에 안전하게 저장되어 모든 방문자가 함께 볼 수 있습니다.
        </p>
      </section>

      {/* 방명록 작성 폼 카드 */}
      <section className="max-w-xl mx-auto bg-[#fffefb] border border-emerald-900/15 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-lg font-bold text-emerald-950 mb-1 flex items-center gap-2">
          <span>✍️</span> 응원 글 남기기
        </h2>
        <p className="text-xs text-emerald-900/70 mb-5">
          * 실제 개인정보(실명, 전화번호, 주소)는 작성하지 말아주세요.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nickname"
              className="block text-xs font-bold text-emerald-950 mb-1.5"
            >
              닉네임
            </label>
            <input
              id="nickname"
              type="text"
              maxLength={20}
              placeholder="예: 샬자사랑, 꿈꾸는나무"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-emerald-900/20 bg-[#fdfbf7] text-emerald-950 placeholder:text-emerald-900/40 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold text-emerald-950 mb-1.5"
            >
              응원 메시지
            </label>
            <textarea
              id="message"
              rows={3}
              maxLength={200}
              placeholder="따뜻한 응원과 격려의 한마디를 적어주세요 (최대 200자)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-emerald-900/20 bg-[#fdfbf7] text-emerald-950 placeholder:text-emerald-900/40 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent transition resize-none"
              disabled={isSubmitting}
            />
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              ⚠️ {errorMsg}
            </div>
          )}

          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
              {successMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-amber-100 font-bold text-sm transition-colors duration-150 shadow-xs disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span>저장 중...</span>
            ) : (
              <>
                <span>응원 등록하기</span>
                <span>🌱</span>
              </>
            )}
          </button>
        </form>
      </section>

      {/* 방명록 목록 섹션 */}
      <section className="max-w-2xl mx-auto space-y-4">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xl font-bold text-emerald-950 flex items-center gap-2">
            <span>💬</span> 함께 나누는 응원 목록
            <span className="text-xs font-normal text-emerald-800/70 bg-emerald-100/70 px-2 py-0.5 rounded-full">
              {entries.length}개
            </span>
          </h2>
          <button
            onClick={fetchEntries}
            className="text-xs text-emerald-800/80 hover:text-emerald-950 underline font-medium"
          >
            새로고침 🔄
          </button>
        </div>

        {isLoading ? (
          <div className="text-center py-12 text-emerald-900/60 text-sm">
            방명록을 불러오는 중입니다...
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-12 bg-[#fffefb] border border-dashed border-emerald-900/20 rounded-2xl p-8 space-y-2">
            <p className="text-3xl">🌱</p>
            <p className="text-emerald-950 font-semibold text-sm">
              아직 등록된 응원 글이 없어요.
            </p>
            <p className="text-xs text-emerald-900/60">
              첫 번째 따뜻한 응원의 주인공이 되어주세요!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-[#fffefb] border border-emerald-900/10 rounded-2xl p-5 shadow-xs hover:border-emerald-900/20 transition-all space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 font-bold text-emerald-900">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs">
                      👤
                    </span>
                    <span>{entry.nickname}</span>
                  </div>
                  <span className="text-[11px] text-emerald-900/50">
                    {formatDate(entry.createdAt)}
                  </span>
                </div>
                <p className="text-sm text-emerald-950/90 pl-8 leading-relaxed whitespace-pre-wrap">
                  {entry.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
