import { NextResponse } from "next/server";

export async function GET() {
  // This is where the QR will redirect
  return NextResponse.redirect(
    "https://www.instagram.com/mordevo.catering?igsh=MTFnNGtveTUybmd4OQ%3D%3D&utm_source=qr",
    { status: 302 }
  );
}
