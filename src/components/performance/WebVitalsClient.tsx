'use client';

import dynamic from 'next/dynamic';

const WebVitals = dynamic(
  () => import('@/components/performance/WebVitals'),
  { ssr: false }
);

export default function WebVitalsClient() {
  return <WebVitals />;
}
