import Particles from "react-tsparticles"

type ParticlesContentType = {}

const ParticlesContent: React.FC<ParticlesContentType> = () => {

    return (
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
    )
}

export default ParticlesContent