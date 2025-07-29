import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "react-scroll"

interface HeaderLinkProps {
  children?: React.ReactNode
  to: string
  headerTransparent?: boolean
  className?: string
}

export function HeaderLink({ children, to, headerTransparent, className }: HeaderLinkProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant: "ghost" }), className)}
      type="submit"
      to={to}
      id={to}
      spy
      smooth
      duration={500}
      activeClass={headerTransparent ? "bg-secondary" : "bg-secondary-foreground/10"}
    >
      {children}
    </Link>
  )
}
