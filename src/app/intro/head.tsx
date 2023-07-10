import React from 'react'
import { siteConfig as config } from './side'

function Head() {
  return (
      <div className="flex flex-col-reverse items-center content-center justify-center py-4 border border-green-400 sm:flex-row gap-y-6 sm:justify-between sm:px-10 lg:gap-y-0 ">
                <div className="flex flex-col justify-center text-center sm:text-start">
                    <h1 className="font-mono text-2xl font-bold sm:text-5xl text-slate-50">{config.name}</h1>
                    <h3 className="text-xl font-semibold tracking-wide sm:text-3xl text-slate-200">{config.occupation} in {config.location}</h3>
                </div>
                <div className="">
                    {/* eslint-disable-next-line */}
                    <img className="w-20 h-20 border-2 rounded-full sm:w-36 sm:h-36 border-sky-300 hover:cursor-pointer " src={config.avatar} />
                </div>
              
            </div>
  )
}

export default Head