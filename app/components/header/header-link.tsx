import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "react-scroll"

interface HeaderLinkProps {
  children?: React.ReactNode
  to: string
  headerTransparent?: boolean
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({ children, to, headerTransparent }) => {
  return (
    <li>
      <Button asChild variant="outline">
        <Link
          className={cn(
            "transition bg-transparent duration-300 ease-in-out cursor-pointer",
            headerTransparent
              ? "text-inherit"
              : "text-secondary-foreground border-secondary-foreground/10"
          )}
          activeStyle={{
            backgroundColor: headerTransparent
              ? "hsl(var(--secondary))"
              : "hsl(var(--secondary-foreground) / 0.1)",
            borderWidth: 0,
          }}
          type="submit"
          to={to}
          spy={true}
          smooth={true}
          duration={500}
        >
          {children}
        </Link>
      </Button>
    </li>
  )
}
