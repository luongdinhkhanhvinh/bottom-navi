"use client"

import { useState } from "react"
import { HomeIcon, UserIcon, ChatBubbleOvalLeftIcon, CameraIcon, Cog6ToothIcon } from "@heroicons/react/24/outline"

const navItems = [
  { name: "Home", icon: HomeIcon },
  { name: "Profile", icon: UserIcon },
  { name: "Message", icon: ChatBubbleOvalLeftIcon },
  { name: "Photos", icon: CameraIcon },
  { name: "Settings", icon: Cog6ToothIcon },
]

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(2)

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#000000]">
      <nav className="navigation relative flex h-[70px] w-[400px] items-center justify-center rounded-[10px] bg-gradient-to-r from-[#ffffff] to-[#ffffff]">
        <ul className="flex w-[350px]">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className={`list relative z-[1] h-[70px] w-[70px] ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <a href="#" className="flex h-full w-full flex-col items-center justify-center text-center font-medium">
                <span className="icon relative block text-[1.5em] leading-[75px] text-black transition duration-500">
                  <item.icon className="h-6 w-6" />
                </span>
                <span className="text absolute text-[0.75em] font-normal text-black opacity-0 transition duration-500">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
          <div
            className="indicator absolute top-[-50%] flex h-[70px] w-[70px] items-center justify-center rounded-full border-[6px] border-[#06021b] bg-gradient-to-r from-[#f321ec] to-[#f321ec] transition duration-500"
            style={{ transform: `translateX(calc(70px * ${activeIndex}))` }}
          ></div>
        </ul>
      </nav>
    </main>
  )
}

