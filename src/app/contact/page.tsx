import BlogHeader from '@/components/layout/blogLayout'
import React from 'react'
import Link from 'next/link'

interface ContactLinkProps {
  label: string
  href: string
  text: string
  description?: string
}

function ContactLink({ label, href, text, description }: ContactLinkProps) {
  return (
    <div className="group">
      <p className="text-sm text-zinc-500 font-light mb-2">{label}</p>
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="block text-lg font-light text-zinc-300 hover:text-zinc-100 transition-colors duration-200 underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-400"
      >
        {text}
      </a>
      {description && (
        <p className="text-xs text-zinc-600 mt-1 font-light">{description}</p>
      )}
    </div>
  )
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <BlogHeader />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-12">
          {/* Header */}
          <header className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-50 tracking-tight leading-tight">
              Get in touch
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 font-light max-w-lg mx-auto">
              Let's connect. Whether it's work, collaboration, or just a chat.
            </p>
          </header>

          {/* Contact Links */}
          <div className="space-y-8 pt-8">
            <div className="border-t border-gray-200/10 pt-8">
              <ContactLink
                label="Need a reply ASAP?"
                href="mailto:loisisar@outlook.com"
                text="lois@normal-people.com"
                description="For urgent matters and quick responses"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="border-t border-gray-200/10 pt-6">
                <ContactLink
                  label="Professional"
                  href="https://www.linkedin.com/in/loiszhao/"
                  text="LinkedIn"
                />
              </div>

              <div className="border-t border-gray-200/10 pt-6">
                <ContactLink
                  label="Casual"
                  href="https://twitter.com/zmzhaooo"
                  text="Twitter"
                />
              </div>
            </div>

            <div className="border-t border-gray-200/10 pt-6">
              <ContactLink
                label="Stalk each other"
                href="https://github.com/zmzlois"
                text="GitHub"
                description="Check out my code and projects"
              />
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-12 text-center">
            <p className="text-xs text-zinc-600 font-light">
              Usually responds within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage