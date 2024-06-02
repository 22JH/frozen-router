"use client";
import "./globals.css";

import Link from "next/link";
import TransitionProvder from "./Effects";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className="w-full h-15 bg-slate-400 relative z-10">
            <Link href="/">home</Link>
            <Link href="/mypage">mypage</Link>
            <Link href="/payment">Payment</Link>
          </div>
          <TransitionProvder>{children}</TransitionProvder>
        </main>
      </body>
    </html>
  );
}
