import Router from "next/router"
import { Element } from "react-scroll"
import { allUsers } from "../../../common/common"
import ScrollLinkButton from "../../button/scroll_link_button"
import ParticipantItem from "./participant_item"

type ParticipantsContentType = {}

const ParticipantsContent: React.FC<ParticipantsContentType> = () => {
    const router = Router

    return (
        <Element
            name="participants"
            className='flex flex-col h-screen w-screen bg-black'>
            <div className='absolute z-0 bg-blue-900 h-96 w-full'></div>
            <div className='absolute mt-96 z-0 bg-gradient-to-b from-blue-900 h-1/5 w-full'></div>
            <div className="z-10 flex mx-2 lg:mx-32 xl:mx-64 lg:space-x-12 xl:space-x-16 2xl:space-x-24 space-x-1.5 flex-col mt-24 lg:mt-44 lg:flex-row items-center space-y-2 lg:space-y-0 lg:justify-around px-4">
                {allUsers.map((user) => (
                    <ParticipantItem 
                        key={user.linkName} 
                        user={user}
                        onParticipantClick={() => router.push(user.linkName)} /> 
                ))}
            </div>
            <div className='z-10 mx-2 lg:mx-32 xl:mx-64 flex flex-col lg:flex-row items-center grow justify-center lg:justify-around space-y-8 lg:space-x-24'>
                <div>
                    <p className="text-white text-4xl lg:text-5xl xl:text-7xl">
                        O nosso
                        <p className="text-blue-500">
                            Grupo
                        </p>
                    </p>
                </div>

                <div className='flex flex-col'>
                    <p className="text-white text-lg xl:text-xl">
                        Constituido por 3 elementos, João Neves, João Manaia e Tiago Caetano este é o melhor grupo da turma!
                        <br />
                        Criamos projetos originais como este site. Se viram algum site parecido com este foram eles é que nos copiaram.
                    </p>

                    <ScrollLinkButton
                        text="Ver Projetos"
                        to="projects"/>
                </div>
            </div>
        </Element>
    )
}

export default ParticipantsContent