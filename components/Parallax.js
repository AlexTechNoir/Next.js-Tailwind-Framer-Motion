import { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'

const projects = [
  {
    title: "Matthias Leidinger",
    description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "/parallax/rock.jpg",
    color: "#BBACAF"
  },
  {
    title: "Clément Chapillon",
    description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    src: "/parallax/tree.jpg",
    color: "#977F6D"
  },
  {
    title: "Zissou",
    description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "/parallax/water.jpg",
    color: "#C2491D"
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: "/parallax/house.jpg",
    color: "#B62429"
  },
  {
    title: "Mark Rammers",
    description: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
    src: "/parallax/cactus.jpg",
    color: "#88A28D"
  }
]

export default function Parallax() {

  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: [ 'start start', 'end end' ]
  })

  return (
    <section className="row-start-4 row-end-5 col-start-2 col-end-4 flex flex-col items-center mt-36" ref={container}>
      <h1 className="font-bold text-5xl mt-8 inline-block text-blue-500">
        Photography
      </h1>
      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05)
        return (
          <Card
            key={i}
            i={i}
            project={project}
            progress={scrollYProgress}
            range={[i * .25, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </section>
  )
}

function Card({ i, project, progress, range, targetScale }) {

  const { title, description, src, link, color, url } = project

  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: [ 'start end', 'start start' ]
  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className="flex items-center justify-center sticky top-0 h-[100vh]" ref={container}>
      <motion.div
        className="flex flex-col relative top-[-25%] h-[500px] w-[1000px] rounded-[25px] p-[50px] origin-top"
        style={{ scale, backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
      >
        <h2 className="text-center m-0 text-2xl">{title}</h2>
        <div className="flex h-full mt-[50px] gap-[50px]">

          <div className="w-[40%] relative top-[10%]">
            <p className="text-base first-letter:text-2xl">{description}</p>
            <span className="flex items-center gap-[5px]">
              <a className="text-xs underline cursor-pointer" href="/#" target="_blank">See more</a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          <div className="relative w-[60%] h-full rounded-3xl overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img 
                className="object-cover absolute top-0 bottom-0 right-0 left-0 h-full w-full"
                src={src}
                alt="image"
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}
