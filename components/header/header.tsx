import { Link } from "react-scroll"
import HeaderLink from "./header_link"
import { XIcon, MenuIcon } from "@heroicons/react/solid"
import { useEffect, useState } from "react"

type HeaderType = {
    headerTransparent: boolean
}

const Header: React.FC<HeaderType> = ({ headerTransparent }) => {

    const [headerToolsVisible, setHeaderToolsVisible] = useState(false)

    const [windowMobile, setWindowMobile] = useState(false)

    useEffect(() => {
        setWindowMobile(window.innerWidth < 768)

        window.addEventListener('resize', () => {
            setWindowMobile(window.innerWidth < 768)
        })
    }, [])

    return (
        <div className={`fixed flex items-center top-0 z-50 w-screen h-16 transition-all ease-in-out duration-500 ${headerTransparent ? "bg-transparent" : "bg-blue-800"}`}>
            <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-xl ml-8 text-white cursor-pointer">
                Portfolio API
            </Link>

            {!headerToolsVisible && (
                <div className="grow md:invisible flex justify-end mr-8 text-white">
                    <div
                        onClick={() => setHeaderToolsVisible(true)}
                        className="h-10 w-10 p-2 md:invisible rounded-full hover:bg-blue-500/30 cursor-pointer">
                        <MenuIcon />
                    </div>
                </div>
            )}

            {(headerToolsVisible || !windowMobile) && (
                <div className="absolute md:relative mt-72 md:mt-0 bg-blue-900/90 rounded-2xl md:bg-transparent w-screen md:w-auto h-96 md:h-auto md:grow text-white flex flex-col md:flex-row items-center justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-2 md:mr-8">
                    <div
                        onClick={() => setHeaderToolsVisible(false)}
                        className="md:invisible h-10 w-10 p-2 cursor-pointer hover:bg-blue-500/30 rounded-full">
                        <XIcon />
                    </div>

                    <HeaderLink
                        text="Home"
                        to="home"
                        headerTransparent={headerTransparent}
                        onClick={() => setHeaderToolsVisible(false)} />
                    <HeaderLink
                        text="Participantes"
                        to="participants"
                        headerTransparent={headerTransparent}
                        onClick={() => setHeaderToolsVisible(false)} />
                    <HeaderLink
                        text="Projetos"
                        to="projects"
                        headerTransparent={headerTransparent}
                        onClick={() => setHeaderToolsVisible(false)} />
                </div>
            )}
        </div>
    )
}

export default Header