"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { isHeaderTransparent } from "@/app/(home)/components/page-content"
import { ModeToggle } from "../mode-toggle"

export const TransparentHeader: React.FC = () => {
  return (
    <header
      className={cn(
        "fixed flex items-center justify-between top-0 z-50 w-screen px-4 h-16 transition duration-300 ease-in-out",
        isHeaderTransparent.value ? "bg-transparent backdrop-blur-sm" : "bg-primary"
      )}
    >
      <Button
        asChild
        variant="link"
        className={cn(
          "text-xl font-bold transition duration-300 ease-in-out",
          isHeaderTransparent.value ? "text-inherit" : "text-primary-foreground"
        )}
      >
        <Link href="/">Portfolio API</Link>
      </Button>
      <ModeToggle />
    </header>
  )
}
