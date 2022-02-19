import { RefObject } from "react"
import ParticipantItem from "./participant_item"

type ParticipantsContentType = {
    participantsRef: RefObject<HTMLDivElement>
    scrollToTimeline: () => void
}

const ParticipantsContent: React.FC<ParticipantsContentType> = ({participantsRef, scrollToTimeline}) => {
    return (
        <div 
            ref={participantsRef}
            className='flex flex-col h-screen w-screen bg-black'>
            <div className='absolute z-0 bg-blue-900 h-96 w-full'></div>
            <div className='absolute mt-96 z-0 bg-gradient-to-b from-blue-900 h-1/5 w-full'></div>
            <div className="z-10 flex mx-2 lg:mx-32 xl:mx-64 lg:space-x-12 xl:space-x-32 flex-col mt-24 lg:mt-44 lg:flex-row items-center space-y-2 lg:space-y-0 lg:justify-around px-4">
                <ParticipantItem 
                    name="João Neves"
                    photoUrl="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/joaoneves2.jpg?alt=media&token=fbf37dd5-491e-400b-a30a-1cd3328245f6"
                    role="Secretário"/>
                <ParticipantItem 
                    name="João Manaia"
                    photoUrl="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/joaomanaia2.jpeg?alt=media&token=f40b1305-30ae-4cd4-8156-58f246fd5908"
                    role="O que faz tudo"/>
                <ParticipantItem 
                    name="Tiago Caetano"
                    photoUrl="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/timilo2.jpg?alt=media&token=2fef7a9b-ad44-45e5-9abb-214bad8efb89"
                    role="Motorista que dá ideias"/>
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

                    <button 
                        onClick={() => scrollToTimeline()}
                        className="bg-blue-700 text-white mt-8 self-center w-40 rounded-full px-4 py-2 transition-all ease-in-out duration-300 hover:bg-white hover:text-black">
                        Ver projetos
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ParticipantsContent