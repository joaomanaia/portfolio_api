import { defaultUserPhotoUrl } from "../../../common/common"
import ParticipantItem from "./participant_item"

type ParticipantsContentType = {}

const ParticipantsContent: React.FC<ParticipantsContentType> = () => {
    return (
        <div className='flex flex-col h-screen w-screen bg-black'>
            <div className='absolute z-0 bg-blue-900 h-96 w-full'></div>
            <div className='absolute mt-96 z-0 bg-gradient-to-b from-blue-900 h-1/5 w-full'></div>
            <div className="z-10 flex mx-2 lg:mx-32 xl:mx-64 lg:space-x-12 xl:space-x-32 flex-col mt-24 lg:mt-44 lg:flex-row items-center space-y-2 lg:space-y-0 lg:justify-around px-4">
                <ParticipantItem 
                    name="João Neves"
                    photoUrl={defaultUserPhotoUrl}
                    role="Não faz nada"/>
                <ParticipantItem 
                    name="João Manaia"
                    photoUrl={defaultUserPhotoUrl}
                    role="O que faz tudo"/>
                <ParticipantItem 
                    name="Tiago Caetano"
                    photoUrl={defaultUserPhotoUrl}
                    role="Dá ideias"/>
            </div>
            <div className='z-10 mx-2 lg:mx-32 xl:mx-64 flex flex-col lg:flex-row items-center grow justify-center lg:justify-around space-y-8 lg:space-x-24'>
                <p className="text-white text-4xl lg:text-5xl xl:text-7xl">
                    O nosso
                    <p className="text-blue-500">
                        Grupo
                    </p>
                </p>
                <p className="text-white text-md xl:text-xl">
                    Constituido por 3 elementos, João Neves, João Manaia e Tiago Caetado este é o melhor grupo da turma!
                    <br />
                    Criamos projetos originais como este site. Se viram algum site parecido com este foram eles é que nos copiaram.
                </p>
            </div>
        </div>
    )
}

export default ParticipantsContent