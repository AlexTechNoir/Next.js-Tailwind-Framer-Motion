import { useRef, useEffect } from 'react'
import { useScroll } from 'framer-motion'
import Lenis from 'lenis'

export default function ScrollSVGText() {

  const container = useRef()
  const texts = useRef([])
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end']
  })

  useEffect(() => {
    scrollYProgress.on('change', e => {
      texts.current.forEach((text, i) => text.setAttribute('startOffset', -40 + (i * 40) + (e * 40) + "%"))
    })
  },[])

  useEffect(() => {

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

  },[])

  return (
    <section className="row-start-9 row-end-10 col-start-1 col-end-5 pb-40" ref={container}>
      <svg viewBox="0 0 250 90">
        <path id="curve" fill="none" d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68" />
        <text className="text-[6px] uppercase">
          {[...Array(3)].map((_, i) => {
            return (
              <textPath key={i} ref={ref => texts.current[i] = ref} href="#curve" startOffset={i * 40 + "%"}>
                Curabitur mattis efficitur velit
              </textPath>
            )
          })}
        </text>
      </svg>
    </section>
  )
}
