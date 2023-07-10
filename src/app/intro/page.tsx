import { Metadata } from 'next'
import React from 'react'
import Head from './head'
import Left from './left'
import Right from './right'


export const metadata: Metadata = {
  title: 'Zhaomian Zhao Resume',
  description: 'Updated on 2023-07-10',
}


function Resume() {
    
   
   
    return (
      
        <div className="flex flex-col justify-center w-screen h-auto px-8 py-10 space-y-10 border border-blue-400 bg-slate-950" >
           
                <Head />
                
           
            <div className="flex flex-col-reverse gap-4 sm:grid sm:grid-cols-3">
                <Left />
                <Right />
                </div>
             
          
    </div>
  )
}

export default Resume