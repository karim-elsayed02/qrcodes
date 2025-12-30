import { NextResponse } from "next/server";

export async function GET() {
  // This is where the QR will redirect
  return NextResponse.redirect(
    "https://drive.google.com/file/d/1yVWucBjAvb53xve-W6R7wfcxGlegbnTV/view?usp=drivesdk", // <-- change later
    { status: 302 }
  );
}
