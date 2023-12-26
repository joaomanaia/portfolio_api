import { TransparentHeader } from "../components/header/transparent-header"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TransparentHeader />
      {children}
    </>
  )
}
