import { StartContent } from "./components/start-content"
import { TransparentHeader } from "../components/header/transparent-header"
import { ParticipantsContent } from "./components/participants-component"

export default function Page() {
  return (
    <>
      <TransparentHeader />
      <StartContent />
      <ParticipantsContent />
      <div className="h-screen">b</div>
    </>
  )
}
