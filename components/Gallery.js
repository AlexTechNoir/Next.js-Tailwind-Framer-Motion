import { useEffect, useRef } from 'react'
import { useTransform, useScroll, motion } from 'framer-motion'
import Lenis from 'lenis'
import useDimension from './useDimension'

const imgs = [
  '/gallery/1.jpg',
  '/gallery/2.jpg',
  '/gallery/3.jpg',
  '/gallery/4.jpg',
  '/gallery/5.jpg',
  '/gallery/6.jpg',
  '/gallery/7.jpg',
  '/gallery/8.jpg',
  '/gallery/9.jpg',
  '/gallery/10.jpg',
  '/gallery/11.jpg',
  '/gallery/12.jpg'
]

export default function Gallery() {

  const container = useRef(null)

  const { height } = useDimension()

  const { scrollYProgress } = useScroll({
    target: container,
    offset: [ 'start end', 'end start' ]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  },[])

  return (
    <>
      <h1
        className="
          row-start-3 row-end-4 col-start-2 col-end-4 justify-self-center
          font-bold text-5xl inline-block text-gradient mt-36 text-center
          max-[767px]:text-4xl
        "
      >
        Framer Motion
      </h1>
      <section className="row-start-3 row-end-4 col-start-1 col-end-5 mt-36">
        <div className="h-[20vh]"></div>
        <div className="h-[175vh] flex flex-row gap-[2vw] p-[2vw] overflow-y-hidden" ref={container}>
          <Column imgs={[ imgs[0], imgs[1], imgs[2] ]} y={y} />
          <Column imgs={[ imgs[3], imgs[4], imgs[5] ]} y={y2} />
          <Column imgs={[ imgs[6], imgs[7], imgs[8] ]} y={y3} />
          <Column imgs={[ imgs[9], imgs[10], imgs[11] ]} y={y4} />
        </div>
      </section>
    </>
  )
}

const Column = ({ imgs, y = 0 }) => {
  return (
    <motion.div className="w-[25%] h-[100%] flex flex-col gap-[2vw] relative custom" style={{y}}>
      {imgs.map((src, index) => (
        <div className="w-full h-full relative rounded-[1vw] overflow-hidden" key={index}>
          <img className="w-full h-full object-cover" src={src} alt="image" />
        </div>
      ))}
    </motion.div>
  )
}
