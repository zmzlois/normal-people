import React from 'react'
import Link from 'next/link'
import PreLayout from '@/components/layout/PreLayout'

export const metadata = {
    title: 'Why Engineers Hate AWS',
    date: '2021-10-01',
    tags: ['aws', 'cloud', 'serverless'],
    
}
function HateAWS() {
    
  return (
      <PreLayout href={"/pre/hate-aws/1"}>
          <h1 className="text-center flex justify-center text-7xl">🌶️ WHY ENGINEERS HATE AWS? 🌶️</h1>
          <h3 className="text-center flex justify-center text-4xl text-red-500">Spicy alert</h3>
      </PreLayout>
  )
}

export default HateAWS

