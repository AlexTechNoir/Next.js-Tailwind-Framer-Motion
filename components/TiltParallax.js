import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function TiltParallax() {

  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: [ 'start', 'end' ]
  })

  useEffect(() => {

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  },[])

  return (
    <section className="row-start-6 row-end-7 col-start-1 col-end-5 relative h-[200vh]" ref={container}>
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </section>
  )
}

function Section1({ scrollYProgress }) {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])

  return (
    <motion.div
      className="
        sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]
      "
      style={{ scale, rotate }}
    >
      <p>Scroll perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
            <img className="absolute top-0 bottom-0 right-0 left-0 h-full w-full" src="/tilt/1.jpg" alt="image" />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  )
}

function Section2({ scrollYProgress }) {

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])

  return (
    <motion.div className="relative h-screen" style={{ scale, rotate }}>
      <img className="absolute top-0 bottom-0 right-0 left-0 h-full w-full" src="/tilt/2.jpeg" alt="image" />
    </motion.div>
  )
}
