import { NextResponse } from "next/server";
import { getGuestbookEntries, addGuestbookEntry } from "@/lib/guestbook-store";

export async function GET() {
  const entries = getGuestbookEntries();
  return NextResponse.json({ entries });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nickname, message } = body;

    if (!nickname || typeof nickname !== "string" || !nickname.trim()) {
      return NextResponse.json(
        { error: "닉네임을 입력해 주세요." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "응원 메시지를 입력해 주세요." },
        { status: 400 }
      );
    }

    const newEntry = addGuestbookEntry(nickname, message);
    return NextResponse.json({ success: true, entry: newEntry }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "방명록 등록 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
