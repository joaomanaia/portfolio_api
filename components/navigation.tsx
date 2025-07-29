"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { HeaderLink } from "@/app/components/header/header-link"
import { scrollSpy } from "react-scroll"

type NavItem = {
  to: string
  label: string
}

const navItems = [
  { to: "home", label: "Inicio" },
  { to: "participants", label: "Participantes" },
  { to: "projects", label: "Projetos" },
]

export function RowNavigation({ isHeaderTransparent }: { isHeaderTransparent: boolean }) {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-4">
        {navItems.map((item) => (
          <li key={item.to}>
            <HeaderLink to={item.to} headerTransparent={isHeaderTransparent}>
              {item.label}
            </HeaderLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function HamburgerMenu() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    setInterval(() => {
      scrollSpy.update()
    }, 100)
  }, [])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Portfolio API</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col px-2 pb-4">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <HeaderLink to={item.to} headerTransparent={true} className=" w-full text-start">
                  {item.label}
                </HeaderLink>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
