'use client';
import PreLayout from '@/components/layout/PreLayout';
import { useNextRoute } from '@/utils/useNextRoute';

export default function Page() {
  return (
    <PreLayout href={useNextRoute()}>
      <h1>Unfuck your Bundler Problems in Nx</h1>{' '}
    </PreLayout>
  );
}
