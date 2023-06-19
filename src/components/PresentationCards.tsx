import React from 'react'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'

type Meta = {
    title: string
    date: string
    tags: string[]
    description?: string
    image?: string
}
const presentationPath = path.join(process.cwd(), '/src/app/pre')
const presentationName = path.basename(presentationPath)
const presentationFiles = fs.readdirSync(presentationPath).filter((file) => file.endsWith('page.tsx'))
const moduleName = presentationFiles.join('').replace('.tsx', '');
// const metaObjects = presentationFiles.map(file => require(path.join(presentationPath, presentationName, file)).meta)

const metaObjects: Meta[] = []

async function getMeta() {
    for (const file of presentationFiles) {
        const { meta } = await import(path.join(presentationPath, file))
        metaObjects.push(meta)
        console.log(metaObjects)
    }
}
getMeta()

function PresentationCards({meta}: Meta) {
    console.log(presentationFiles)
    console.log(`Presentation's Module Name ${moduleName}`)
    console.log(`Presentation's Name ${presentationName}`)
    
   console.log(metaObjects)
  return (
    <div>
    <div className=" my-1 ">
       <Link
            href={meta.url}
            className=" group "
          >
      <div className="border-b-1 border-gray-200/20   px-4 py-6">

        <h2 className="mb-1 text-lg font-light tracking-wide text-zinc-300 group-hover:text-zinc-50 transition transform">
         
            {meta.title}
         
        </h2>
        <time dateTime={meta.date} className="mb-2 block text-xs text-gray-600 group-hover:text-gray-300 transition transform">
          {format(parseISO(meta.date), 'LLLL d, yyyy')}
        </time>
        <div
          className="text-sm [&>*]:mb-1 [&>*:last-child]:mb-0 text-gray-400 group-hover:text-gray-100 transition transform"
          
          >{blog.description}</div>
      </div>
       </Link>
      </div>
      </div>
  )
}

export default PresentationCards