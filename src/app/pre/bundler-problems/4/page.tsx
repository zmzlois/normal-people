'use client';

import PreLayout from '@/components/layout/PreLayout';
import { motion, useAnimationControls } from 'framer-motion';
import { useNextRoute } from '@/utils/useNextRoute';
export default function Page() {
  return (
    <PreLayout href={useNextRoute()}>
      <div className="grid w-full grid-flow-col grid-cols-6 max-h-[90vh] grid-rows-5">
        <div className="col-span-1 row-span-1">
          {' '}
          <h2>swc/core</h2>
        </div>
        <div className="col-start-5 row-start-2">
          <h2>swc/loader</h2>
        </div>
        <div className="col-start-2 row-start-3">
          {' '}
          <h2>postcss</h2>
        </div>
        <div className="flex col-start-4 col-end-6 row-start-4 ">
          <h2>Migration</h2>
        </div>
        <div className="flex col-start-6 row-start-5">
          {' '}
          <h2>Environment setup</h2>
        </div>
        <div className="flex col-start-1 col-end-3 row-start-5">
          {' '}
          <h2>Passing additional configuration</h2>
        </div>

        <h2></h2>
      </div>
    </PreLayout>
  );
}
