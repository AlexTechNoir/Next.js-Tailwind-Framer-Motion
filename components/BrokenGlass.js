import React from 'react'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('../components/brokenGlass/Scene'), {
  ssr: false
})

export default function BrokenGlass() {
  return (
    <div className="row-start-9 row-end-10 col-start-1 col-end-5 relative h-screen bg-black">
      <Scene />
    </div>
  )
}
