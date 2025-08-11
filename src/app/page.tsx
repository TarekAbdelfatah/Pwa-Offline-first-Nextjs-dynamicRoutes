'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [docId, setDocId] = useState("");

  const handleGo = () => {
    if (docId.trim() !== "") {
      router.push(`/doc/${docId.trim()}`);
    }
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <input
        type="text"
        placeholder="  رقم الوثيقه  DOC ID"
        value={docId}
        onChange={(e) => setDocId(e.target.value)}
        className="border border-gray-400 rounded px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleGo}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
       اذهب لصفحة العرض ( Go To Document )
      </button>
    </div>
  );
}
