"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { scrollSpy } from "react-scroll"
import { Button } from "@/components/ui/button"
import HamburgerMenu, { RowNavigation } from "@/components/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "../mode-toggle"
import { HeaderLink } from "./header-link"

export const TransparentHeader: React.FC = () => {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    if (!isHomePage) {
      setIsHeaderTransparent(false)
      return
    }

    const onScroll = () => {
      setIsHeaderTransparent(window.scrollY < window.innerHeight / 2)
    }

    window.addEventListener("scroll", onScroll)
    scrollSpy.update()

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [isHomePage])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-16 w-screen items-center justify-between bg-transparent px-4 transition duration-500 ease-in-out",
        isHeaderTransparent ? "backdrop-blur-xs" : "backdrop-blur-xl",
        isHomePage && "fixed"
      )}
    >
      {isHomePage ? (
        <HeaderLink to="home" headerTransparent={isHeaderTransparent} className="text-xl font-bold">
          Portfolio API
        </HeaderLink>
      ) : (
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
      )}

      {isHomePage && <RowNavigation isHeaderTransparent={isHeaderTransparent} />}

      <div className="flex items-center gap-2">
        <ModeToggle />
        {isHomePage && <HamburgerMenu />}
      </div>
    </header>
  )
}
