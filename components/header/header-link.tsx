import { Link } from "react-scroll"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeaderLinkProps {
  children?: React.ReactNode
  to: string
  headerTransparent?: boolean
  className?: string
  applyActiveStyles?: boolean
}

export function HeaderLink({
  children,
  to,
  headerTransparent,
  className,
  applyActiveStyles,
}: HeaderLinkProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant: "ghost" }), className)}
      type="submit"
      to={to}
      id={to}
      spy
      hashSpy
      smooth
      duration={500}
      activeClass={
        applyActiveStyles
          ? cn(
              headerTransparent
                ? "bg-secondary text-secondary-foreground"
                : "bg-secondary-foreground/10"
            )
          : undefined
      }
    >
      {children}
    </Link>
  )
}
