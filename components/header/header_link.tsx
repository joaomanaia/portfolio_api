import { useState } from "react"
import { Link } from "react-scroll"

type HeaderLinkType = {
    text: String
    to: string
    offset?: number | undefined
    headerTransparent: boolean
    onClick: () => void
}

const HeaderLink: React.FC<HeaderLinkType> = ({text, to, offset, headerTransparent, onClick}) => {
    
    const [active, setActive] = useState(false)
    
    return (
        // @ts-ignore
        <Link
            activeClass="active"
            onSetActive={() => setActive(true)}
            onSetInactive={() => setActive(false)}
            type="submit"
            to={to}
            spy={true}
            smooth={true}
            offset={offset}
            duration={500}
            onClick={onClick}
            className={`bg-transparent cursor-pointer px-4 py-2 rounded-2xl hover:bg-blue-500/50 ${active ? (headerTransparent ? "bg-blue-500/30 text-blue-500" : "bg-white/10 text-white") : "text-white"}`}>
            {text}
        </Link>
    )
}

export default HeaderLink