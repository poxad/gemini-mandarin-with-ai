import * as React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 shrink-0 border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <Link href="/home" rel="nofollow">
        <img className="size-6" src="/images/gemini.png" alt="gemini logo" />
      </Link>

      {/* Centered Menu */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="/home"
            className="rounded-md px-4 hover:bg-accent hover:text-accent-foreground"
          >
            Home
          </Link>
          <Link
            href="/new"
            className="rounded-md px-4 hover:bg-accent hover:text-accent-foreground"
          >
            Chatbot
          </Link>
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/poxad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl hover:text-accent" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jasonjonarto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-xl hover:text-accent" />
        </Link>
        <Link
          href="https://jasonjonarto.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe className="text-xl hover:text-accent" />
        </Link>
      </div>
    </header>
  )
}
