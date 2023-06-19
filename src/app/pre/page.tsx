import React from 'react'
import fs from 'fs'
import path from 'path'
import PresentationCards from '@/components/PresentationCards'
import { allPresentations } from './pre'
import BlogHeader from '@/components/layout/blogLayout'

const presentationsDirectory = path.join(process.cwd(), '/src/app/pre')
const fileNames = fs.readdirSync(presentationsDirectory).filter((file) => !file.endsWith('.tsx'))



function Presentation() {
    
    return (
        <div className="md:py-10 py-6 md:px-24 px-8 w-screen h-auto">
            <BlogHeader/>
      <div className="mx-auto max-w-xl py-8">
          
      <div className="mb-8">
      <h1 className=" text-center text-2xl font-black">
       Presentations
      </h1>
        <p className="text-md font-sm text-center">at different places.</p> 
          </div>
          {allPresentations.map((file, idx) => (
              <PresentationCards key={idx} href={`/pre/${file.slug}`} title={file.title} date={file.date} description={file.description} />
            ))}
     
            </div>
            </div>
  )
}

export default Presentation