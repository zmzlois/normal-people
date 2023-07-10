"use client"
import React from 'react'
import { Companies, Volunteer, Education } from './config'

import type { CompanyType, VolunteerType, EducationType } from './config'
import clsx from 'clsx'
import { Balancer } from "react-wrap-balancer"
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"

function Right() {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const { ref:secondref, inView: secondinView } = useInView({
    threshold: isMobile ? 0.05: 0.1, // Trigger the animation when the element is 50% in view
    triggerOnce: true, // Only trigger the animation once
  })
    return (
       <div ref={secondref} className="flex flex-col col-span-2 text-slate-50">
            <motion.div animate={
          secondinView ? { y: [50,0], opacity: [0, 1] } : { y: [50], opacity: [0] }
        }
        transition={{ ease: "linear", duration: 1 }} >
      <div className="space-y-8">
          <div className="text-slate-50">
              <h1 className="font-mono text-lg font-bold sm:text-2xl text-sky-400">Professional Experience</h1>
          </div>
          {Companies.map((item: CompanyType, index) => (
              <div className={clsx("grid sm:grid-cols-3 grid-cols-1 gap-4 py-4 px-2 border border-pink-400", item.name==="Knight Frank LLP" && "sm:mb-52 lg:mb-0 mb-0")} key={index}>
                  <div className="col-span-1 sm:text-end text-start">
                        <h3 className="font-mono font-semibold text-md text-slate-100">{item.name}</h3>
                        <p className="text-xs sm:text-sm text-slate-200">{item.location}</p>
                      <p className="text-xs sm:text-sm text-slate-300">{item.time}</p>
                  </div>
                  <div className="col-span-2 space-y-2">
                      <h3 className="font-mono text-xl font-bold text-slate-100">{item.title}</h3>
                      <div>
                          {item.description && <><h5 className="italic font-semibold text-slate-300">Description</h5>
                      <Balancer className="text-xs text-slate-200">{item.description}</Balancer></>}
                      
                      
                      </div>
                      <div>
                          {item.context && <><h5 className="italic font-semibold text-slate-300">Context</h5>
                          <Balancer className="text-xs text-slate-200">{item.context}</Balancer></>}
                     </div>
                        <div>
                         {item.responsibility &&
                                  <> <h5 className="italic font-semibold text-slate-300">Responsibilities</h5>
                          <ul className="space-y-1 list-none sm:list-disc sm:list-inside text-slate-200">
                          {item.responsibility.map((res: string, index) => (
                              <li key={index} className="text-sm">{res}</li>
                          ))}
                        </ul>
                                  </>
                              }
                      </div>
                    
                  </div>
                </div>
          ))}
           <div className="mt-4">
              <h1 className="font-mono text-lg font-bold sm:text-2xl text-sky-400">Open Source & Volunteering</h1>
          </div>
          {Volunteer.map((item: VolunteerType, index) => (
              <div className={clsx("grid sm:grid-cols-3 grid-cols-1 gap-4  py-4 px-2 border border-pink-400", item.name==="ByteDance Infrastructure Team" && "sm:mb-52 mb-0 lg:mb-0")} key={index}>
                  <div className="col-span-1 sm:text-end text-start">
                        <h3 className="font-mono text-sm font-semibold sm:text-md text-slate-100">{item.title}</h3>
                        <p className="text-sm text-slate-200">{item.location}</p>
                      <p className="text-sm text-slate-300">{item.time}</p>
                  </div>
                  <div className="col-span-2 ml-0 space-y-1 sm:ml-2">
                      <Balancer className="font-mono text-sm font-bold sm:text-md text-slate-100">{item.name}</Balancer>
                      <div>
                          {item.description && <><h5 className="italic font-semibold text-slate-300">Description</h5>
                        <Balancer className="text-xs text-slate-200">{item.description}</Balancer></>}
                     </div>
                        <div>
                         {item.responsibility &&
                                  <> <h5 className="italic font-semibold text-slate-300">Responsiblity</h5>
                          <ul className="space-y-1 list-none sm:list-disc sm:list-inside text-slate-200">
                          {item.responsibility.map((res: string, index) => (
                              <li key={index} className="text-xs">
                                  <Balancer>
                                      {res}</Balancer>
                              </li>
                          ))}
                        </ul>
                                  </>
                              }
                      </div>
                     
                    
                  </div>
                </div>
            ))}
          <div className="mt-4">
              <h1 className="font-mono text-2xl font-bold text-sky-400">Education</h1>
          </div>
          {Education.map((item: EducationType, index) => (
              <div className={clsx("grid sm:grid-cols-3 grid-cols-1 gap-4 px-2 py-4 border border-pink-400", item.name==="Knight Frank LLP" && "sm:mb-52 lg:mb-0 mb-0")} key={index}>
                  <div className="col-span-1 sm:text-end text-start">
                        <h3 className="font-mono font-semibold text-md text-slate-100">{item.major}</h3>
                        <p className="text-sm text-slate-200">{item.location}</p>
                      <p className="text-sm text-slate-300">{item.time}</p>
                  </div>
                  <div className="col-span-2 ml-0 space-y-1 sm:ml-2">
                      <h3 className="font-mono font-bold text-md text-slate-100">{item.name}</h3>
                     
                        <div>
                         {item.modules &&
                                  <> <h5 className="text-sm italic font-semibold text-slate-300">Modules</h5>
                          <ul className="flex flex-wrap text-slate-200">
                          {item.modules.map((res: string, index) => (
                              <li key={index} className="text-xs">{res} | </li>
                          ))}
                        </ul>
                                  </>
                              }
                      </div>
                      <div>
                         {item.activity &&
                                  <> <h5 className="text-sm italic font-semibold text-slate-300">Activities</h5>
                          <ul className="space-y-1 text-slate-200">
                          {item.activity.map((res: string, index) => (
                              <li key={index} className="text-xs">{res}</li>
                          ))}
                        </ul>
                                  </>
                              }
                      </div>
                    
                  </div>
                </div>
            ))}
         
                </div>
            </motion.div>
        </div>
  )
}

export default Right