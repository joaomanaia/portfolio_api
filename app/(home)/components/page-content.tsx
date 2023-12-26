"use client"

import { signal, useSignalEffect } from "@preact-signals/safe-react"
import { StartContent } from "./start-content"

export const isHeaderTransparent = signal(true)

export const PageContent: React.FC = () => {
  useSignalEffect(() => {
    // Scroll listener
    const onScroll = () => {
      isHeaderTransparent.value = window.scrollY < 100
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  })

  return (
    <div className="bg-background">
      <StartContent />
    </div>
  )
}
