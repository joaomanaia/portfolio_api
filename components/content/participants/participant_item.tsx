import Image from "next/image"
import { UserType } from "../../../common/common"

type ParticipantItemType = {
    user: UserType,
    onParticipantClick: () => void
}

const ParticipantItem: React.FC<ParticipantItemType> = ({user, onParticipantClick}) => {
    return (
        <div 
            onClick={onParticipantClick}
            className="flex lg:flex-col p-4 w-96 lg:h-auto bg-white shadow-lg rounded-2xl hover:bg-blue-200">
            <div className="relative h-full lg:h-auto lg:w-full aspect-square">
                <Image
                    src={user.photoUrl}
                    alt={user.name}
                    className="rounded-2xl"
                    layout="fill"/>
            </div>
            <div className="grow flex flex-col items-start lg:items-center justify-center mx-2 ml-12 lg:ml-0">
                <p className="text-xl font-bold lg:mt-4">
                    {user.name}
                </p>
                <p className="text-md lg:mt-4">
                    {user.role}
                </p>
            </div>
        </div>
    )
}

export default ParticipantItem