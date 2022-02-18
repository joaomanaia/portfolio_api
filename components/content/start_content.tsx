import { ArrowCircleDownIcon } from "@heroicons/react/outline"
import Particles from "react-tsparticles"

type StartContentType = {}

const StartContent: React.FC<StartContentType> = () => {

    return (
        <div className="relative">
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
                                }
                            },
                            collisions: {
                                enable: true,
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
                    <button className='cursor-pointer transition-all ease-in-out duration-300 bg-blue-500 text-white hover:bg-white hover:text-black text-lg py-2 px-4 rounded-full mt-12'>
                        Continuar
                    </button>
                </div>
                <div className='flex w-full h-64 bg-gradient-to-b from-transparent to-blue-900 items-center justify-center'>
                    <div className='mt-32 h-12 w-12 animate-bounce text-white cursor-pointer hover:text-blue-200'>
                        <ArrowCircleDownIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartContent