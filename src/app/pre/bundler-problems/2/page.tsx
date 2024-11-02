'use client';
import PreLayout from '@/components/layout/PreLayout';
import { useNextRoute } from '@/utils/useNextRoute';

export default function Page() {
  return (
    <PreLayout href={useNextRoute()}>
      <div className="flex flex-col gap-10">
        <h2>This talk will not cover...</h2>
        <ol>
          <li>Setting up your CI</li>
          <li>Unfuck your Micro-frontends 😒 ( let's do that offline )</li>
        </ol>
      </div>
    </PreLayout>
  );
}
