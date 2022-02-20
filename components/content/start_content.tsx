import { ArrowCircleDownIcon } from "@heroicons/react/outline"
import { Element, Link } from "react-scroll"
import Particles from "react-tsparticles"
import Button from "../button/button"
import ScrollLinkButton from "../button/scroll_link_button"

type StartContentType = {}

const StartContent: React.FC<StartContentType> = () => {

    return (
        <Element
            name="home"
            className="relative">
            <div className="absolute top-0 z-0 w-screen h-screen">
                <Particles
                    id="particles"
                    options={{
                        fullScreen: {
                            enable: false,
                            zIndex: 0
                        },
                        fpsLimit: 60,
                        particles: {
                            color: {
                                value: "#3b82f6",
                            },
                            links: {
                                color: "#3b82f6",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                                triangles: {
                                    enable: false,
                                },
                            },
                            collisions: {
                                enable: false,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>

            <div className='flex z-10 flex-col w-full h-screen bg-black/50'>
                <div className='z-10 flex flex-col mt-36 items-center justify-center mx-12 xl:mx-24 grow'>
                    <p className="text-white text-2xl md:text-3xl lg:text-5xl xl:text-7xl">
                        Somos um grupo de trabalho de
                        <p className='text-blue-500 lg:mt-4'>Aplicações informaticas</p>
                    </p>
                    <ScrollLinkButton text="Continuar" to="participants" />
                </div>
                <div className='flex w-full h-64 bg-gradient-to-b from-transparent to-blue-900 items-center justify-center'>
                    <Link
                        to="participants"
                        smooth={true}
                        duration={500}
                        className='mt-32 h-12 w-12 animate-bounce text-white cursor-pointer hover:text-blue-200'>
                        <ArrowCircleDownIcon />
                    </Link>
                </div>
            </div>
        </Element>
    )
}

export default StartContent