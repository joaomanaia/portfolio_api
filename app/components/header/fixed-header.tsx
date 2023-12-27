import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "../mode-toggle"

export const FixedHeader: React.FC = () => {
  return (
    <header className="sticky flex items-center justify-between top-0 z-50 w-screen px-4 h-16 bg-secondary">
      <Button asChild variant="link" className="text-xl font-bold text-secondary-foreground">
        <Link href="/">
          Portfolio API
        </Link>
      </Button>
      <ModeToggle />
    </header>
  )
}
