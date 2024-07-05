import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function ScrollLines() {

  useEffect(() => {

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  },[])

  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  return (
    <section className="row-start-8 row-end-9 col-start-1 col-end-5">
      <div className="h-[100vh]"></div>
      <div ref={container}>
        <Slider src='/scroll-lines/1.jpg' left="-55%" progress={scrollYProgress} direction="left" />
        <Slider src='/scroll-lines/2.jpg' left="-15%" progress={scrollYProgress} direction="right" />
        <Slider src='/scroll-lines/3.jpg' left="-40%" progress={scrollYProgress} direction="left" />
      </div>
      <div className="h-[100vh]"></div>
    </section>
  )
}

function Slider({ src, left, progress, direction }) {

  const dir = direction === 'left' ? -1 : 1
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir])

  return (
    <motion.div className="flex whitespace-nowrap relative" style={{ left, x }}>
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  )
}

function Phrase({ src }) {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-[7.5vw]">Front End Developer</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <img className="object-cover absolute top-0 bottom-0 right-0 left-0 h-full w-full" src={src} alt="image" />
      </span>
    </div>
  )
}
