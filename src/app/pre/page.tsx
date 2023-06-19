import React from 'react'
import fs from 'fs'
import path from 'path'
import PresentationCards from '@/components/PresentationCards'

function Presentation() {
 
  return (
    <div className="mx-auto max-w-xl py-8">
      <div className="mb-8">
      <h1 className=" text-center text-2xl font-black">
       Presentations
      </h1>
        <p className="text-md font-sm text-center">at different places.</p> 
        </div>
     <PresentationCards/>
    </div>
  )
}

export default Presentation