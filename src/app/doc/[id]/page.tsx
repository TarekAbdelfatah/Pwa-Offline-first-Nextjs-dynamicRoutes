'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Doc() {
  const [id, setId] = useState('...');
  const router = useRouter();

  useEffect(() => {
    const parts = location.pathname.split('/').filter(Boolean);
    setId(parts[parts.length - 1] || '—');
  }, []);

  return (
    <div className="p-8">
      <div> رقم الوثيقة   DOC ID : {id}</div>
      <button
        onClick={() => router.push('/')}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
       عودة للصفحة الرئيسية ( back to home)
      </button>
    </div>
  );
}
