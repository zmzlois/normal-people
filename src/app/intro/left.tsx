"use client"
import React from 'react'
import { navigation, NavigationType } from './side'
import { ArrowRight } from 'lucide-react'
import clsx from 'clsx'
import { Balancer } from "react-wrap-balancer"
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"

type Content = NavigationType['content'][number]

function Left() {
     const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const { ref:firstref, inView: firstinView } = useInView({
    threshold: isMobile ? 0.05 : 0.1, // Trigger the animation when the element is 50% in view
    triggerOnce: true, // Only trigger the animation once
    })
  
  return (
      <div ref={firstref}>
            <motion.div animate={
          firstinView ? { y: [50, 0], opacity: [0, 1] } : { y: [50], opacity: [0] }
        }
        transition={{ ease: "easeOut", duration: 1 }}
            >
      <div className="flex flex-col col-span-2 gap-8 mt-8 sm:mt-0 sm:col-span-1 ">
          <h1 className="flex font-mono text-xl font-bold sm:hidden text-sky-400 sm:text-2xl">Miscellaneous</h1>
                    {navigation.map((item, navindex) => (
                        <div className={clsx("flex flex-col", item.name==="Tech" && "sm:mb-72 lg:mb-0 mb-0")} key={navindex}>
                             <div className="flex items-center content-center justify-end py-3 pr-3 space-x-4 border border-red-400 text-end">
                           
                                <h1 className="font-mono text-xl font-bold text-slate-50">{item.name}</h1>
                             {item.icon}
                            </div>
                            <div className="flex flex-col items-end content-center justify-end py-4 pr-3 space-y-4 border border-red-400">
                            {item.content.map((con: Content, index) => (
                                <div key={index} className="flex flex-row items-center content-center justify-end w-full space-x-4 text-sm">
                                    <div className="flex items-center content-center space-x-2">
                                    {con.fluency && <p className="font-mono text-sm text-slate-50">{con.fluency}</p>}
                                        {con.fluency && <ArrowRight size={12} className="text-slate-50" />}
                                        </div>
                                    {con.href ? <a href={con.href} className="font-mono underline text-end underline-offset-4 text-slate-50 decoration-1"><Balancer>{con.name}</Balancer></a> : <p className="font-mono text-slate-50 text-end">{con.name}</p>}
                                    <div className="text-slate-50">
                                        {con.icon}
                                        </div>
                                </div>
                            ))}
                            </div>
                            </div>
                        ))}
                  
          </div>
           </motion.div>
                </div>
         
  )
}

export default Left