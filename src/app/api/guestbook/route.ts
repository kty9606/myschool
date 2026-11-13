import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("guestbook")
      .select("id, nickname, message, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase 조회 실패:", error);
      return NextResponse.json(
        { error: "방명록을 불러오는 중 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    const entries = (data || []).map((row) => ({
      id: row.id,
      nickname: row.nickname,
      message: row.message,
      createdAt: row.created_at,
    }));

    return NextResponse.json({ entries });
  } catch (error) {
    console.error("GET API 예외 발생:", error);
    return NextResponse.json(
      { error: "방명록을 불러오지 못했습니다." },
      { status: 500 }
    );
  }
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

    if (nickname.trim().length > 20) {
      return NextResponse.json(
        { error: "닉네임은 최대 20자까지 가능합니다." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "응원 메시지를 입력해 주세요." },
        { status: 400 }
      );
    }

    if (message.trim().length > 200) {
      return NextResponse.json(
        { error: "응원 메시지는 최대 200자까지 가능합니다." },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("guestbook")
      .insert([
        {
          nickname: nickname.trim(),
          message: message.trim(),
        },
      ])
      .select("id, nickname, message, created_at")
      .single();

    if (error) {
      console.error("Supabase 등록 실패:", error);
      return NextResponse.json(
        { error: "방명록 등록 중 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    const newEntry = {
      id: data.id,
      nickname: data.nickname,
      message: data.message,
      createdAt: data.created_at,
    };

    return NextResponse.json({ success: true, entry: newEntry }, { status: 201 });
  } catch (error) {
    console.error("POST API 예외 발생:", error);
    return NextResponse.json(
      { error: "방명록 등록 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
