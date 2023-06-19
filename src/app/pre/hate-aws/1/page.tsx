import PreLayout from '@/components/layout/PreLayout'
import React from 'react'

function Page1() {
  return (
      <PreLayout href={"/pre/hate-aws/2"}>
          <h1 className="text-center flex justify-center text-8xl">AWS is cheaper?</h1>
          <h3 className="text-center flex justify-center text-4xl text-red-500">Wrong</h3>
        </PreLayout>
  )
}

export default Page1