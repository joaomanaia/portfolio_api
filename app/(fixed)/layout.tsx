import { FixedHeader } from "@/components/header/fixed-header"

export default function FixedLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <FixedHeader />
      <main className="container mx-auto w-full max-w-6xl px-4 md:px-0">{children}</main>
    </>
  )
}
