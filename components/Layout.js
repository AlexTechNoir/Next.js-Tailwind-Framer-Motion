import { Rubik } from 'next/font/google'
import { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { cubeRefAtom, brokenGlassRefAtom } from '../store'

import Header from './layout/Header'
import Footer from './layout/Footer'

const rubik = Rubik({ subsets: ['latin'] })

export default function Layout({ children }) {

  const [ cubeRef ] = useAtom(cubeRefAtom)
  const [ brokenGlassRef ] = useAtom(brokenGlassRefAtom)

  const [ isLoaded, setIsLoaded ] = useState(false)

  useEffect(() => {
    if (cubeRef && brokenGlassRef) {
      setIsLoaded(true)
    }
  },[ cubeRef, brokenGlassRef ])

  return (
    <>
      <div
        className={`${rubik.className} grid grid-rows-[auto_1fr_auto] grid-cols-[100%] min-h-full bg-custom text-white ${isLoaded ? 'hidden' : 'block'}`}
      >
        Loading...
      </div>
      <div
        className={`${rubik.className} grid grid-rows-[auto_1fr_auto] grid-cols-[100%] min-h-full bg-custom ${isLoaded ? 'visible' : 'invisible'}`}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )  
}
