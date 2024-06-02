"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="w-dvw h-dvh bg-yellow-300">
      <h1>Home</h1>
      <button onClick={() => router.push("/mypage")}>go to mypage</button>
    </main>
  );
}
