export interface GuestbookEntry {
  id: string;
  nickname: string;
  message: string;
  createdAt: string;
}

// 개발 모드 핫 리로딩 시에도 메모리가 초기화되지 않도록 globalThis에 보관
declare global {
  // eslint-disable-next-line no-var
  var __guestbookStore: GuestbookEntry[] | undefined;
}

if (!globalThis.__guestbookStore) {
  globalThis.__guestbookStore = [
    {
      id: "welcome-1",
      nickname: "샬자 동문",
      message: "이왕이면 샬자~! 따뜻한 학교 홈페이지 실습 응원합니다 🌱",
      createdAt: new Date().toISOString(),
    },
    {
      id: "welcome-2",
      nickname: "샬롬 친구",
      message: "자유의 맛, 사랑의 멋을 함께 나누는 멋진 배움터가 되길 응원해요!",
      createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    },
  ];
}

export function getGuestbookEntries(): GuestbookEntry[] {
  return globalThis.__guestbookStore || [];
}

export function addGuestbookEntry(nickname: string, message: string): GuestbookEntry {
  const newEntry: GuestbookEntry = {
    id: `entry-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    nickname: nickname.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };

  if (!globalThis.__guestbookStore) {
    globalThis.__guestbookStore = [];
  }
  // 최신 글이 위로 오도록 앞에 추가
  globalThis.__guestbookStore.unshift(newEntry);

  return newEntry;
}
