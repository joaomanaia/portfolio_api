import Image from "next/image"

type ParticipantItemType = {
    name: string
    photoUrl: string
    role: string
}

const ParticipantItem: React.FC<ParticipantItemType> = ({name, photoUrl, role}) => {
    return (
        <div className="flex lg:flex-col p-4 w-full lg:w-1/3 h-24 lg:h-auto bg-white shadow-lg rounded-2xl">
            <div className="relative h-full lg:h-auto lg:w-full aspect-square">
                <Image
                    src={photoUrl}
                    alt={name}
                    className="rounded-2xl"
                    layout="fill"/>
            </div>
            <div className="grow flex flex-col items-start lg:items-center justify-center mx-2 ml-12 lg:ml-0">
                <p className="text-xl font-bold lg:mt-4">
                    {name}
                </p>
                <p className="text-md lg:mt-4">
                    {role}
                </p>
            </div>
        </div>
    )
}

export default ParticipantItem