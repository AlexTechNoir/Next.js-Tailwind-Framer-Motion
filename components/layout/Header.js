import Nav from '../header/Nav'

export default function Header() {
  return (
    <header
      className="row-start-1 row-end-2 col-start-1 col-end-2 p-[1rem] flex items-center justify-center z-10"
    >
      <div className="w-[1024px] grid grid-rows-[auto] grid-cols-[auto_1fr_auto] items-center px-4">
        <img
          className="col-start-1 col-end-2 cursor-pointer"
          src="/tailwindcss-logotype-white.svg"
          alt="logo"
          width="200"
        />
        <Nav />
        <button className="col-start-3 col-end-4 text-white w-36 text-right">
          <span className="link-underscore-gradient pb-1">Log In</span>
        </button>
      </div>
    </header>
  )
}
