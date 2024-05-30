"use client"

import Particles, { initParticlesEngine } from "@tsparticles/react"
import { useEffect, useMemo, useState } from "react"
import { type ISourceOptions } from "@tsparticles/engine"

export const BackgroundParticles: React.FC = () => {
  const [init, setInit] = useState(false)
  const [particlesColor, setParticlesColor] = useState("#3b82f6")
  

  useEffect(() => {
    const computedStyles = getComputedStyle(document.documentElement)
    const color = computedStyles.getPropertyValue("--particles")
    setParticlesColor(color)

    initParticlesEngine(async (engine) => {
      // await loadSlim(engine)
      const slim = await import("@tsparticles/slim")
      await slim.loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: particlesColor,
        },
        links: {
          color: particlesColor,
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
    }),
    [particlesColor]
  )

  if (!init) return null

  return (
    <Particles
      className="absolute top-0 z-0 w-screen h-screen bg-background/50"
      id="particles"
      options={options}
    />
  )
}
