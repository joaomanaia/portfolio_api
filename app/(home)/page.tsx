import { StartContent } from "./components/start-content"
import { TransparentHeader } from "../components/header/transparent-header"

export default function Page() {
  return (
    <>
      <TransparentHeader />
      <StartContent />
      <div className="h-screen">a</div>
      <div className="h-screen">b</div>
    </>
  )
}
