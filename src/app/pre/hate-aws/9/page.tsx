import PreLayout from '@/components/layout/PreLayout'
import React from 'react'

function Page4() {
  return (
      <PreLayout href={"/pre/hate-aws/10"}>
          <h1 className="text-center flex justify-center text-8xl m-10">Benefits from using AWS</h1>
          <ol className="mt-6">
              <li className="text-4xl">🤫 Job Security -&gt; Developer </li>
                <li className="text-4xl">😶‍🌫️ Recurring Customer -&gt; Third Parties </li>
            </ol>
          </PreLayout>
  )
}

export default Page4