import Head from 'next/head'

import Cube from '../components/Cube'
import HeroSection from '../components/HeroSection'
import Companies from '../components/Companies'
import Gallery from '../components/Gallery'
import Parallax from '../components/Parallax'
import ZoomParallax from '../components/ZoomParallax'
import TiltParallax from '../components/TiltParallax'
import Shapes3D from '../components/Shapes3D'
import DistortedGlass from '../components/DistortedGlass'
import BrokenGlass from '../components/BrokenGlass'
import ScrollLines from '../components/ScrollLines'
import ScrollSVGText from '../components/ScrollSVGText'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js main page</title>
        <meta name="description" content="Next.js, pages router" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="
          row-start-2 row-end-3 col-start-1 col-end-2
          grid grid-rows-[repeat(11, auto)] grid-cols-[1fr_512px_512px_1fr]
          w-screen pt-[1rem] relative
          max-[1024px]:grid-cols-[1fr_50vw_50vw_1fr]
        "
      >
        <HeroSection />
        <Cube />
        <Companies />
        <Gallery />
        <Parallax />
        <ZoomParallax />
        <TiltParallax />
        <Shapes3D />
        <DistortedGlass />
        <BrokenGlass />
        <ScrollLines />
        <ScrollSVGText />
      </main>
    </>
  )
}
