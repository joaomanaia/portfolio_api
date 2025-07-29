import { FixedHeader } from "../../components/header/fixed-header"

export default function FixedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FixedHeader />
      <main className="container max-w-5xl">{children}</main>
    </>
  )
}
