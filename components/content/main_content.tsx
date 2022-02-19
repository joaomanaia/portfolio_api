import { useEffect, useRef } from "react"
import ParticipantsContent from "./participants/participants_content"
import TimelineContent from "./projects/timeline/post_timeline_content"
import StartContent from "./start_content"

type MainContentType = {
  setHeaderTransparent: (transparent: boolean) => void
}

const MainContent: React.FC<MainContentType> = ({ setHeaderTransparent }) => {

  const ref = useRef<HTMLDivElement>(null)
  const participantsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", () => {
        let y = 1 + (window.scrollY || window.pageYOffset) / 150
        y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)

        setHeaderTransparent(y === 1)
      })
    }

    scrollListener()
  }, [setHeaderTransparent])

  const scrollToParticipants = () => participantsRef.current?.scrollIntoView()

  const scrollToTimeline = () => timelineRef.current?.scrollIntoView()

  return (
    <div
      ref={ref}
      className='flex flex-col overflow-x-hidden overflow-y-scroll scrollbar-hide bg-black'>

      <StartContent onNextClick={scrollToParticipants}/>
      <ParticipantsContent participantsRef={participantsRef} scrollToTimeline={scrollToTimeline}/>
      <TimelineContent timelineRef={timelineRef}/>
    </div>
  )
}

export default MainContent