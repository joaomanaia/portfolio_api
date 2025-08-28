import { ParticipantsContent } from "./_components/participants/participants-component"
import { ProjectsContent } from "./_components/projects/projects-content"
import { StartContent } from "./_components/start-content"

export default function Page() {
  return (
    <>
      <StartContent />
      <ParticipantsContent />
      <ProjectsContent />
    </>
  )
}
