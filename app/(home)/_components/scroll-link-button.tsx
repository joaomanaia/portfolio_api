import { Link } from "react-scroll"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ScrollLinkButtonType extends ButtonProps {
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
  ...props
}) => {
  return (
    <Button asChild className={cn("w-40", className)} {...props}>
      <Link
        activeClass="active"
        type="submit"
        to={to}
        spy
        smooth
        offset={offset}
        duration={500}
        className="cursor-pointer"
      >
        {children}
      </Link>
    </Button>
  )
}
