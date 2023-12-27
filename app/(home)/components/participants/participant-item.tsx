import { UserType } from "@/common/common"
import Image from "next/image"

interface ParticipantItemProps {
  user: UserType
}

export const ParticipantItem: React.FC<ParticipantItemProps> = ({ user }) => {
  return (
    <li className="group rounded-lg border bg-card text-card-foreground shadow-sm flex lg:flex-col p-4 w-full lg:w-1/3 h-24 lg:h-auto hover:bg-accent/90 transition cursor-pointer">
      <div className="relative h-full lg:h-auto lg:w-full aspect-square">
        <Image
          src={user.photoUrl}
          alt={user.name}
          className="rounded-2xl group-hover:brightness-125 transition"
          layout="fill"
        />
      </div>
      <div className="grow flex flex-col items-start lg:items-center justify-center mx-2 ml-12 lg:ml-0">
        <p className="text-xl font-bold lg:mt-4">{user.name}</p>
        <p className="text-md lg:mt-4">{user.role}</p>
      </div>
    </li>
  )
}
