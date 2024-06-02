"use client"
import React from 'react';
import NotFound from './not-found';
import { useRouter } from 'next/navigation';

type Params = {
  params: {
    productId: string
  }
}


export default function Profile({ params }: Params) {
  const router = useRouter();

  if (parseInt(params?.productId) > 40) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <NotFound />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <button onClick={() => router.back()}>Back</button>
      <div>Details of {params.productId}</div>
    </main>
  );
}
