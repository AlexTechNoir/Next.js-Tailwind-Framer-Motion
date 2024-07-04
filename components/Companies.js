import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'

import { useMotionValue, animate, motion } from 'framer-motion'

export default function Companies() {

  const companies = [
    '/companies/github.svg',
    '/companies/gitlab.svg',
    '/companies/google.svg',
    '/companies/grammarly.svg',
    '/companies/mailchimp.svg',
    '/companies/microsoft.svg',
    '/companies/spotify.svg',
    '/companies/stripe.svg',
    '/companies/tinder.svg',
    '/companies/uber.svg'
  ]

  const FAST_DURATION = 25
  const SLOW_DURATION = 75

  const [ duration, setDuration ] = useState(FAST_DURATION)

  const [ ref, { width } ] = useMeasure()

  const xTranslation = useMotionValue(0)

  const [ mustFinish, setMustFinish ] = useState(false)
  const [ rerender, setRerender ] = useState(false)

  useEffect(() => {

    let controls
    let finalPosition = -width / 2 - 8

    if (mustFinish) {
      controls = animate(xTranslation, [ xTranslation.get(), finalPosition ], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false)
          setRerender(!rerender)
        }
      })
    } else {
      controls = animate(xTranslation, [ 0, finalPosition ], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0
      })
    }

    return controls.stop

  }, [ xTranslation, width, duration, rerender ])

  return (
    <div className="row-start-2 row-end-3 col-start-1 col-end-5 self-start relative w-full mt-36">
      <motion.div
        className="flex items-center gap-8"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true)
          setDuration(SLOW_DURATION)
        }}
        onHoverEnd={() => {
          setMustFinish(true)
          setDuration(FAST_DURATION)
        }}
      >
        {[ ...companies, ...companies ].map((item, index) => <Company key={index} item={item} />)}
      </motion.div>
    </div>
  )
}

function Company({ item }) {
  return (
    <div className="min-w-[200px] flex justify-center max-[767px]:min-w-[150px] max-[424px]:min-w-[100px]">
      <img src={item} alt={`${item.substring(item.lastIndexOf('/') + 1, item.lastIndexOf('.'))} logo`} />
    </div>
  )
}
