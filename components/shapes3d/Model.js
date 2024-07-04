import React from 'react'
import { useGLTF, Float } from '@react-three/drei'
import { useTransform } from 'framer-motion'
import { motion } from 'framer-motion-3d'

export default function Model({ mouse }) {

  const { nodes } = useGLTF('/shapes/floating_shapes4.glb')

  return (
    <Float>
      <group>
        <Mesh node={nodes.Sphere001} mouse={mouse} multiplier={2.4} />
        <Mesh node={nodes.Sphere002} mouse={mouse} multiplier={2.4} />
        <Mesh node={nodes.Cylinder002} mouse={mouse} multiplier={1.2} />
        <Mesh node={nodes.Sphere003} mouse={mouse} multiplier={1} />
        <Mesh node={nodes.Cylinder003} mouse={mouse} multiplier={1.8} />
        <Mesh node={nodes.Cylinder005} mouse={mouse} multiplier={1.8} />
        <Mesh node={nodes.Cube002} mouse={mouse} multiplier={2} />
        <Mesh node={nodes.Cylinder006} mouse={mouse} multiplier={1.2} />
        <Mesh node={nodes.Cylinder007} mouse={mouse} multiplier={1.6} />
        <Mesh node={nodes.Cylinder009} mouse={mouse} multiplier={1.8} />
        <Mesh node={nodes.Sphere} mouse={mouse} multiplier={1.5} />
      </group>
    </Float>
  )
}

function Mesh({ node, mouse, multiplier }) {

  const { castShadow, receiveShadow, geometry, material, position, rotation, scale } = node

  const a = multiplier / 2
  const rotationX = useTransform(mouse.x, [0, 1], [rotation.x - a, rotation.x + a])
  const rotationY = useTransform(mouse.y, [0, 1], [rotation.y - a, rotation.y + a])
  const positionX = useTransform(mouse.x, [0, 1], [position.x - multiplier * 2, position.x + multiplier * 2])
  const positionY = useTransform(mouse.y, [0, 1], [position.y + multiplier * 2, position.y - multiplier * 2])

  return (
    <motion.mesh
      castShadow={castShadow}
      receiveShadow={receiveShadow}
      geometry={geometry}
      material={material}
      position={position}
      rotation={rotation}
      scale={scale}
      rotation-x={rotationY}
      rotation-y={rotationX}
      position-x={positionX}
      position-y={positionY}
    />
  )
}

useGLTF.preload('/shapes/floating_shapes4.glb')
