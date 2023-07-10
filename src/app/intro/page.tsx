"use client"
import React from 'react'
import Head from './head'
import Left from './left'
import Right from './right'
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"



function Resume() {
    
    const isMobile = window.innerWidth < 768 
    const { ref:firstref, inView: firstinView } = useInView({
    threshold: isMobile ? 0.5 : 1, // Trigger the animation when the element is 50% in view
    triggerOnce: true, // Only trigger the animation once
    })
     const { ref:secondref, inView: secondinView } = useInView({
    threshold: isMobile ? 0.08: 0.16, // Trigger the animation when the element is 50% in view
    triggerOnce: true, // Only trigger the animation once
  })
    return (
      
        <div className="flex flex-col justify-center w-screen h-auto px-8 py-10 space-y-10 border border-blue-400 bg-slate-950" >
            <div ref={firstref}>
            <motion.div animate={
          firstinView ? { y: [20, 0], opacity: [0, 1] } : { y: [50], opacity: [0] }
        }
        transition={{ ease: "easeOut", duration: 1 }}
            >
                <Head />
                </motion.div>
                </div>
            <div ref={secondref}>
            <motion.div animate={
          secondinView ? { y: [30, 0], opacity: [0, 1] } : { y: [50], opacity: [0] }
        }
        transition={{ ease: "easeOut", duration: 1 }} className="flex flex-col-reverse gap-4 sm:grid sm:grid-cols-3">
                <Left />
                <Right />
                </motion.div>
                </div>
          
    </div>
  )
}

export default Resume