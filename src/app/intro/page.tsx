"use client"
import React from 'react'
import Head from './head'
import Left from './left'
import Right from './right'



function Resume() {
    
   
    return (
      
      <div className="flex flex-col justify-center w-screen h-auto px-8 py-10 space-y-10 border border-blue-400 bg-slate-950">
            <Head />
            <div className="grid grid-cols-3 gap-4">
                <Left />
                <Right />
            </div>
          
    </div>
  )
}

export default Resume