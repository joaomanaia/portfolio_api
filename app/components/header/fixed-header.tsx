import { Button } from "@/components/ui/button"
import Link from "next/link"

export const FixedHeader: React.FC = () => {
  return (
    <header className="fixed flex items-center top-0 z-50 w-screen h-16 bg-primary">
      <Button asChild variant="link" className="text-xl text-primary-foreground">
        <Link href="/">
          Portfolio API
        </Link>
      </Button>
    </header>
  )
}
