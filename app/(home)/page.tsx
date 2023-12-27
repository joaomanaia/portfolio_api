import { StartContent } from "./components/start-content"
import { TransparentHeader } from "../components/header/transparent-header"
import { ParticipantsContent } from "./components/participants/participants-component"
import { ProjectsContent } from "./components/projects/projects-content"

export default function Page() {
  return (
    <>
      <TransparentHeader />
      <StartContent />
      <ParticipantsContent />
      <ProjectsContent />
    </>
  )
}
