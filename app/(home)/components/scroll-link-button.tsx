import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "react-scroll"

type ScrollLinkButtonType = {
  to: string
  offset?: number | undefined
  className?: string
  children?: React.ReactNode
}

export const ScrollLinkButton: React.FC<ScrollLinkButtonType> = ({
  to,
  offset,
  className,
  children,
}) => {
  return (
    <Button asChild className={cn("w-40", className)}>
      <Link
        activeClass="active"
        type="submit"
        to={to}
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
        className="cursor-pointer"
      >
        {children}
      </Link>
    </Button>
  )
}
