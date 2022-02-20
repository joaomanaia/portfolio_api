import { useEffect, useRef } from "react"
import ParticipantsContent from "./participants/participants_content"
import TimelineContent from "./projects/timeline/post_timeline_content"
import StartContent from "./start_content"

type MainContentType = {
  setHeaderTransparent: (transparent: boolean) => void
}

const MainContent: React.FC<MainContentType> = ({ setHeaderTransparent }) => {

  const ref = useRef<HTMLDivElement>(null)

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

  return (
    <div
      ref={ref}
      className='flex flex-col overflow-x-hidden overflow-y-scroll scrollbar-hide bg-black'>

      <StartContent />
      <ParticipantsContent />
      <TimelineContent />
    </div>
  )
}

export default MainContent