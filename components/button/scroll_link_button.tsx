import { Link } from "react-scroll"

type ScrollLinkButtonType = {
    text: String
    to: string
    offset?: number | undefined;
}

const ScrollLinkButton: React.FC<ScrollLinkButtonType> = ({text, to, offset}) => {
    return (
        <Link
            activeClass="active"
            type="submit"
            to={to}
            spy={true}
            smooth={true}
            offset={offset}
            duration={500}
            className="bg-blue-700 text-white mt-8 self-center w-40 rounded-full cursor-pointer text-center px-4 py-2 transition-all ease-in-out duration-300 hover:bg-white hover:text-black">
            {text}
        </Link>
    )
}

export default ScrollLinkButton