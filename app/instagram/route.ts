import { NextResponse } from "next/server";

export async function GET() {
  // This is where the QR will redirect
  return NextResponse.redirect(
    "https://www.instagram.com/juiceyardeg?igsh=MTFsOWZ6dzhiYWI2ZQ==", // <-- change later
    { status: 302 }
  );
}
