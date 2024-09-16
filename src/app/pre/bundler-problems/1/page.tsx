'use client';
import PreLayout from '@/components/layout/PreLayout';
import { useNextRoute } from '@/utils/useNextRoute';

export default function Page() {
  return (
    <PreLayout href={useNextRoute()}>
      <div className="flex flex-col gap-16">
        <h1>OUTLINE</h1>
        <div className="flex flex-col gap-10">
          {' '}
          <h2>What this talk is about</h2>
          <ol>
            <li>Some bundler stuff</li>
            <li>Some common problems everyone cried on 😢</li>
            <li>🌶️ Fixing Nx problems 🌶️</li>
          </ol>
        </div>
      </div>
      <div></div>
    </PreLayout>
  );
}
