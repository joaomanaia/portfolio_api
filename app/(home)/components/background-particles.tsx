"use client"

import Particles, { initParticlesEngine } from "@tsparticles/react"
import { useEffect, useMemo, useState } from "react"
import { loadSlim } from "@tsparticles/slim"
import { type ISourceOptions, type Container } from "@tsparticles/engine"

function hslToHex(h: number, s: number, l: number) {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0") // convert to Hex and prefix "0" if needed
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

export const BackgroundParticles: React.FC = () => {
  const [init, setInit] = useState(false)
  const [particlesColor, setParticlesColor] = useState("#3b82f6")
  

  useEffect(() => {
    const computedStyles = getComputedStyle(document.documentElement)
    const color = computedStyles.getPropertyValue("--particles")
    setParticlesColor(color)

    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine)
      //await loadBasic(engine);
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log("Particles loaded", container)
    console.log("Particles Color", particlesColor)
  }

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
      className="absolute top-0 z-0 w-screen h-screen bg-background"
      id="particles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  )
}
