import { UserType } from "@/common/common"
import Image from "next/image"
import Link from "next/link"

interface ParticipantItemProps {
  user: UserType
}

export const ParticipantItem: React.FC<ParticipantItemProps> = ({ user }) => {
  return (
    <li className="w-full lg:w-1/3 h-24 lg:h-auto">
      <Link
        href={`/${user.linkName}`}
        className="group rounded-lg h-24 lg:h-auto border bg-card text-card-foreground shadow-xs flex lg:flex-col p-4 hover:bg-accent/90 transition cursor-pointer"
      >
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
      </Link>
    </li>
  )
}
