import { useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Environment, useGLTF, Text, Float, MeshTransmissionMaterial } from '@react-three/drei'
import { useAtom } from 'jotai'
import { brokenGlassRefAtom } from '../../store'

export default function Scene() {

  const brokenGlassRef = useRef(null)

  const [ , setBrokenGlassRef ] = useAtom(brokenGlassRefAtom)

  setBrokenGlassRef(brokenGlassRef.current)

  return (
    <Canvas ref={brokenGlassRef} orthographic camera={{ position: [0, 0, 1], zoom: 800 }}>
      <Model />
      <directionalLight intensity={3} position={[0, 0.1, 1]} />
      <Environment preset="city"/>
    </Canvas>
  )
}

function Model() {

  const { viewport } = useThree()
  const { nodes } = useGLTF('/broken-glass/shards.glb')

  const textOption = {
    color: 'white',
    anchorX: 'center',
    anchorY: 'middle'
  }

  return (
    <group scale={viewport.width / 1.5}>
      <group>
        <Text position={[0, 0, -.1]} fontSize={0.2} {...textOption}>
          Broken Glass
        </Text>
      </group>
      {nodes.Scene.children.map((mesh, i) => <Mesh data={mesh} key={i}/> )}
    </group>
  )
}

function Mesh({ data }) {
  return (
    <Float>
      <mesh {...data}>
        <MeshTransmissionMaterial
          roughness={0}
          transmission={0.99}
          thickness={0.275}
          ior={1.8}
          chromaticAberration={0.75}
          resolution={300}
        />
      </mesh>
    </Float>
  )
}
