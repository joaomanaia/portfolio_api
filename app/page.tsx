"use client"

import { useState } from 'react'
import MainContent from "../components/content/main_content"
import Header from "../components/header/header"

export default function Page() {
  const [headerTransparent, setHeaderTransparent] = useState(true)

  return (
    <div className="w-screen h-screen bg-black scroll-smooth">
      <Header headerTransparent={headerTransparent} />

      <MainContent setHeaderTransparent={setHeaderTransparent} />
    </div>
  )
}
