import { useRef, useEffect } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Lenis from 'lenis'

export default function ZoomParallax() {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: [ 'start', 'end' ]
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const pictures = [
    {
      src: '/zoom/1.jpeg',
      scale: scale4
    },
    {
      src: '/zoom/2.jpeg',
      scale: scale5
    },
    {
      src: '/zoom/3.jpg',
      scale: scale6
    },
    {
      src: '/zoom/4.jpg',
      scale: scale5
    },
    {
      src: '/zoom/5.jpg',
      scale: scale6
    },
    {
      src: '/zoom/6.jpg',
      scale: scale8
    },
    {
      src: '/zoom/7.jpeg',
      scale: scale9
    }
  ]

  useEffect(() => {

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  },[])

  return (
    <section className="row-start-5 row-end-6 col-start-1 col-end-5 mt-[50vh] mb-[100vh]">
      <div className="h-[300vh] relative" ref={container}>
        <div className="sticky top-0 h-[100vh] overflow-hidden">
          {pictures.map(({ src, scale }, index) => (
            <motion.div
              className="w-full h-full absolute top-0 flex items-center justify-center zoomedImages"
              key={index} 
              style={{ scale }}
            >
              <div className="imageContainer w-[25vw] h-[25vh] relative">
                <img
                  className="absolute top-0 bottom-0 right-0 left-0 h-full w-full object-cover"
                  src={src}
                  alt="image"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
