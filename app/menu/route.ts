import { NextResponse } from "next/server";

export async function GET() {
  // This is where the QR will redirect
  return NextResponse.redirect(
    "https://www.canva.com/design/DAG5tST81Ns/1eUR9E5TLnI6U4BeX6SaBA/edit", // <-- change later
    { status: 302 }
  );
}
