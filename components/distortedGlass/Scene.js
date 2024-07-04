import { useRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
export default function Scene() {

  const mesh = useRef()
  const { nodes } = useGLTF('/distorted-glass/torus.glb')
  const { viewport } = useThree()

  useFrame(() => {
    mesh.current.rotation.x += 0.02
  })

  return (
    <group scale={viewport.width / 3.5}>
      <Text fontSize={0.5} position={[0, 0, -.5]}>
        Hello, world!
      </Text>
      <mesh ref={mesh} {...nodes.Torus002}>
        <MeshTransmissionMaterial
          thickness={0.2}
          roughness={0}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.02}
          backside={true}
        />
      </mesh>
    </group>
  )
}
