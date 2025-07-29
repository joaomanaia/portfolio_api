import Image from "next/image"
import Link from "next/link"
import type { UserType } from "@/common/common"

interface ParticipantItemProps {
  user: UserType
}

export const ParticipantItem: React.FC<ParticipantItemProps> = ({ user }) => {
  return (
    <li className="h-28 w-full md:h-auto md:w-1/3 md:max-w-md">
      <Link
        href={`/${user.linkName}`}
        className="group border-border/50 bg-card/50 text-card-foreground hover:bg-accent/80 hover:border-accent-foreground/20 relative flex h-28 cursor-pointer overflow-hidden rounded-xl border p-5 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:shadow-md md:h-auto md:flex-col"
      >
        <div className="relative aspect-square h-full shrink-0 md:h-auto md:w-full">
          <Image
            src={user.photoUrl}
            alt={user.name}
            className="rounded-xl object-cover transition-all duration-300 ease-out group-hover:scale-105 group-hover:brightness-110"
            fill
            sizes="(max-width: 1024px) 80px, 200px"
          />
        </div>

        <div className="relative ml-4 flex min-w-0 flex-1 flex-col items-start justify-center md:mt-4 md:ml-0 md:items-center">
          <h3 className="text-md group-hover:text-accent-foreground w-full truncate font-semibold transition-colors duration-200 md:text-center md:text-xl">
            {user.name}
          </h3>
          <p className="text-muted-foreground group-hover:text-muted-foreground/80 w-full truncate text-sm transition-colors duration-200 md:mt-1 md:text-center md:text-base">
            {user.role}
          </p>
        </div>
      </Link>
    </li>
  )
}
