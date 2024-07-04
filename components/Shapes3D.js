import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { useMotionValue, useSpring } from 'framer-motion'

import Model from './shapes3d/Model'

export default function Shapes3D() {

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 100, damping: 75, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 100, damping: 75, mass: 3 })
  }

  const manageMouseMove = e => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const x = clientX / innerWidth
    const y = clientY / innerHeight
    mouse.x.set(x)
    mouse.y.set(y)
  }

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove)
    return () => window.removeEventListener('mousemove', manageMouseMove)
  },[])

  return (
    <section className="row-start-7 row-end-8 col-start-1 col-end-5 h-screen flex flex-col items-center bg-black">
      <h1 className="font-bold text-5xl mt-36 inline-block text-blue-500">3D Models and Effects</h1>
      <Canvas className="mt-36" orthographic camera={{ position: [0, 0, 150], zoom: 5 }}>
        <Model mouse={smoothMouse} />
        <Environment preset="studio" />
      </Canvas>
    </section>
  )
}
