import React from 'react'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

const Scene = dynamic(() => import('../components/distortedGlass/Scene'), {
  ssr: false
})

export default function DistortedGlass() {
  return (
    <section className="row-start-8 row-end-9 col-start-1 col-end-5 h-screen relative bg-black">
      <Canvas>
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset='city' />
        <Scene />
      </Canvas>
    </section>
  )
}
