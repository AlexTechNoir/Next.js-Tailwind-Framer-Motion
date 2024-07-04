import { Rubik } from 'next/font/google'

import Header from './layout/Header'
import Footer from './layout/Footer'

const rubik = Rubik({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <div
      className={`${rubik.className} grid grid-rows-[auto_1fr_auto] grid-cols-[100%] min-h-full bg-custom`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}
