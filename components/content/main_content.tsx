import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { allUsers } from "../../common/common"
import { postItems } from "../../data/timeline/PostTimeLineData"
import ScrollLinkButton from "../button/scroll_link_button"
import ParticipantItem from "./participants/participant_item"
import PostTimelineContent from "./projects/timeline/post_timeline_content"
import PostTimeLineItem from "./projects/timeline/post_timeline_item"
import GroupInfoContent from "./start_content/group_info_content"
import ParticlesContent from "./start_content/particles_content"
import StartContent from "./start_content/start_content"

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

      <Parallax pages={7} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="flex justify-center items-center">
          <ParticlesContent />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1.5}
          className="flex justify-center items-center">
          <StartContent />
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 5 }}
          className="flex justify-start items-center">
          <div className="flex flex-col space-y-12 justify-center items-center w-1/4 h-40 ml-12 xl:ml-64">
            <p className="text-white text-4xl lg:text-5xl xl:text-7xl text-center">
              O nosso
              <p className="text-blue-500">
                Grupo
              </p>
            </p>

            <div className='flex flex-col'>
              <p className="text-white text-lg xl:text-xl">
                Constituido por 3 elementos, João Neves, João Manaia e Tiago Caetano este é o melhor grupo da turma!
                <br /> <br />
                Criamos projetos originais como este site. Se viram algum site parecido com este foram eles é que nos copiaram.
              </p>

              <ScrollLinkButton
                text="Ver Projetos"
                to="projects" />
            </div>
          </div>
        </ParallaxLayer>


        <ParallaxLayer
          offset={1.5}
          speed={2}
          className="flex justify-end items-center">
          <GroupInfoContent />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={2}
          className="flex justify-end items-center">
          <div className="flex justify-center items-center w-1/4 h-40 mr-12 xl:mr-64">
            <div className="relative h-full lg:h-auto lg:w-full aspect-square">
              <Image
                src={allUsers[0].photoUrl}
                alt={allUsers[0].name}
                className="rounded-2xl"
                layout="fill" />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.8}
          speed={1.8}
          className="flex justify-end items-center">
          <div className="flex justify-center items-center w-1/4 h-40 mr-12 xl:mr-64">
            <div className="grow flex flex-col items-start lg:items-center justify-center mx-2 ml-12 lg:ml-0">
              <p className="text-4xl font-bold lg:mt-4 text-white">
                {allUsers[0].name}
              </p>
              <p className="text-md lg:mt-4 text-white">
                {allUsers[0].role}
              </p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.5}
          speed={2}
          className="flex justify-end items-center">
          <div className="flex justify-center items-center w-1/4 h-40 mr-12 xl:mr-64">
            <div className="relative h-full lg:h-auto lg:w-full aspect-square">
              <Image
                src={allUsers[1].photoUrl}
                alt={allUsers[1].name}
                className="rounded-2xl"
                layout="fill" />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.8}
          speed={1.8}
          className="flex justify-end items-center">
          <div className="flex justify-center items-center w-1/4 h-40 mr-12 xl:mr-64">
            <div className="grow flex flex-col items-start lg:items-center justify-center mx-2 ml-12 lg:ml-0">
              <p className="text-4xl font-bold lg:mt-4 text-white">
                {allUsers[1].name}
              </p>
              <p className="text-md lg:mt-4 text-white">
                {allUsers[1].role}
              </p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.5}
          speed={2}
          className="flex justify-end items-center">
          <div className="flex justify-center items-center w-1/4 h-40 mr-12 xl:mr-64">
            <div className="relative h-full lg:h-auto lg:w-full aspect-square">
              <Image
                src={allUsers[2].photoUrl}
                alt={allUsers[2].name}
                className="rounded-2xl"
                layout="fill" />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.8}
          speed={1.8}
          className="flex justify-end items-center">
          <div className="flex justify-center items-center w-1/4 h-40 mr-12 xl:mr-64">
            <div className="grow flex flex-col items-start lg:items-center justify-center mx-2 ml-12 lg:ml-0">
              <p className="text-4xl font-bold lg:mt-4 text-white">
                {allUsers[2].name}
              </p>
              <p className="text-md lg:mt-4 text-white">
                {allUsers[2].role}
              </p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={0.5}
          className="flex justify-center items-center">
          <div className="w-screen h-auto flex flex-col items-center justify-center px-8 lg:px-32 xl:px-48 2xl:px-96 py-32">
            <PostTimeLineItem
              key={postItems[0].route}
              postData={postItems[0]}
              onMoreInfoClicked={() => { }} />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default MainContent