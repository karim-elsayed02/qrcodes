import { NextResponse } from "next/server";

export async function GET() {
  // This is where the QR will redirect
  return NextResponse.redirect(
    "https://linktree2-blush.vercel.app", // <-- change later
    { status: 302 }
  );
}
