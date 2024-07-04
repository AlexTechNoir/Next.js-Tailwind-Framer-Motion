import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls } from '@react-three/drei'
import { useMotionValue, useSpring } from 'framer-motion'
import { motion } from 'framer-motion-3d'

export default function Cube() {
  return (
    <div className="
      row-start-1 row-end-2 col-start-3 col-end-4 justify-self-end
      w-[400px] h-[400px] z-[0]
      max-[1023px]:hidden
    ">
      <Canvas>
        <OrbitControls pages={5} enablePan={false} enableZoom={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <CubeComponent />
      </Canvas>
    </div>
  )
}

function CubeComponent() {

  const mesh = useRef(null)

  const options = {
    damping: 20
  }

  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options)
  }

  const manageMouseMove = e => {

    const { innerWidth, innerHeight } = window
    const { clientX, clientY } = e
    const x = -0.5 + (clientX / innerWidth)
    const y = -0.5 + (clientY / innerHeight)

    mouse.x.set(x)
    mouse.y.set(y)
  }

  useEffect( () => {
    window.addEventListener('mousemove', manageMouseMove)

    return () => window.removeEventListener('mouse', manageMouseMove)
  }, [])

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.25
    mesh.current.rotation.y += delta * 0.25
    mesh.current.rotation.z += delta * 0.25
  })

  const texture_1 = useLoader(TextureLoader, '/assets/1.png')
  const texture_2 = useLoader(TextureLoader, '/assets/5.webp')
  const texture_3 = useLoader(TextureLoader, '/assets/3.webp')
  const texture_4 = useLoader(TextureLoader, '/assets/4.png')
  const texture_5 = useLoader(TextureLoader, '/assets/2.jpg')
  const texture_6 = useLoader(TextureLoader, '/assets/6.jpg')

  return (
    <motion.mesh ref={mesh}>
      <boxGeometry args={[3.5, 3.5, 3.5]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </motion.mesh>
  )
}
