"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ModeToggle } from "../mode-toggle"
import { useEffect, useState } from "react"
import { HeaderLink } from "./header-link"

export const TransparentHeader: React.FC = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setIsHeaderTransparent(window.scrollY < window.innerHeight / 2)
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed flex items-center justify-between top-0 z-50 w-screen px-4 h-16 transition duration-500 ease-in-out",
        isHeaderTransparent ? "bg-transparent backdrop-blur-sm" : "bg-secondary"
      )}
    >
      <Button
        asChild
        variant="link"
        className={cn(
          "text-xl font-bold transition duration-300 ease-in-out",
          isHeaderTransparent ? "text-inherit" : "text-secondary-foreground"
        )}
      >
        <Link href="/">Portfolio API</Link>
      </Button>

      <nav>
        <ul className="flex space-x-4">
          <HeaderLink to="home" headerTransparent={isHeaderTransparent}>
            Home
          </HeaderLink>
          <HeaderLink to="participants" headerTransparent={isHeaderTransparent}>
            Participants
          </HeaderLink>
          <HeaderLink to="projects" headerTransparent={isHeaderTransparent}>
            Projects
          </HeaderLink>
        </ul>
      </nav>

      <ModeToggle />
    </header>
  )
}
