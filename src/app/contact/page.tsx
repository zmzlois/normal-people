import BlogHeader from '@/components/layout/blogLayout'
import React from 'react'

function ContactPage() {
  return (
      <div className="md:py-10 py-6 md:px-24 px-8 ">
          <BlogHeader />
          
          <div className="grid h-screen items-center justify-center content-center space-y-4">
              <h1 className="text-8xl tracking-tighter font-bold">zmzlois</h1>
              <div>
              <p>Need a reply ASAP?</p>
                  <a href="mailto:loisisar@outlook.com" className="text-md tracking-widest underline font-extralight text-gray-200 hover:text-gray-100 transition transform leading-4 underline-offset-4 decoration-1">loisisar@outlook.com</a>
              </div>
            
                  <div>
              <p>Professional:</p>
                  <a href="https://www.linkedin.com/in/loiszhao/" className="text-md tracking-widest underline font-extralight text-gray-200 hover:text-gray-100 transition transform leading-4 underline-offset-4 decoration-1">Lois@Linkedin</a>
              </div>
              <div>
              <p>Casual:</p>
                  <a href="https://twitter.com/zmzhaooo" className="text-md tracking-widest underline font-extralight text-gray-200 hover:text-gray-100 transition transform leading-4 underline-offset-4 decoration-1">Lois@Twitter</a>
              </div>
               <div>
              <p>Stalk each other:</p>
                  <a href="https://github.com/zmzlois" className="text-md tracking-widest underline font-extralight text-gray-200 hover:text-gray-100 transition transform leading-4 underline-offset-4 decoration-1">Lois@Github</a>
                  </div>
              </div>
      </div>
  )
}

export default ContactPage