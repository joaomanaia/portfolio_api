import { StartContent } from "./_components/start-content"
import { TransparentHeader } from "../../components/header/transparent-header"
import { ParticipantsContent } from "./_components/participants/participants-component"
import { ProjectsContent } from "./_components/projects/projects-content"

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
