"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ModeToggle } from "../mode-toggle"
import { useEffect, useRef, useState } from "react"
import { HeaderLink } from "./header-link"
import { scrollSpy } from "react-scroll"
import HamburgerMenu, { RowNavigation } from "@/components/navigation"

export const TransparentHeader: React.FC = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setIsHeaderTransparent(window.scrollY < window.innerHeight / 2)
    }

    window.addEventListener("scroll", onScroll)
    scrollSpy.update()

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed flex items-center bg-transparent justify-between top-0 z-50 w-screen px-4 h-16 transition duration-500 ease-in-out",
        isHeaderTransparent ? "backdrop-blur-xs" : "backdrop-blur-xl"
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

      <RowNavigation isHeaderTransparent={isHeaderTransparent} />

      <div className="flex items-center gap-2">
        <ModeToggle />
        <HamburgerMenu />
      </div>
    </header>
  )
}
