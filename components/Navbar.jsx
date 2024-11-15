import React from 'react'

import { FaHome, FaUser, FaCog, FaBell, FaEnvelope } from "react-icons/fa";
import { CgLayoutGridSmall } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
const Navbar = () => {

    const navbarIcons = [
        {
          icon: <FaHome />,
          title: "Home",
          href: "/home",
        },
        {
          icon: <FaUser />,
          title: "Profile",
          href: "/profile",
        },
        {
          icon: <FaCog />,
          title: "Settings",
          href: "/settings",
        },
        {
          icon: <FaBell />,
          title: "Notifications",
          href: "/notifications",
        },
        {
          icon: <FaEnvelope />,
          title: "Messages",
          href: "/messages",
        },
        {
          icon: <FaEnvelope />,
          title: "Messages",
          href: "/messages",
        },
        {
          icon: <FaEnvelope />,
          title: "Messages",
          href: "/messages",
        },
      ];
  return (
    <div>
         <div className="bg-[#0F6CBD] text-white flex items-center  w-full gap-1 justify-between">
          <section className='flex w-full items-center gap-40'>
            <div className=' flex items-center  gap-1 flex-1-1'>
              <div className='h-[44px]  w-[44px]  hover:bg-slate-800/70'>
                <CgLayoutGridSmall className=' flex items-center  h-full w-full p-1' />
              </div>

              <div className='text-sm font-semibold px-1'>Outlook</div>

            </div>


            <div className='relative flex w-full max-w-[700px] items-center'>
              <IoMdSearch className=' absolute left-2 text-xl text-gray-500' />
              <input type="text" placeholder='Ara...'
                className='h-8 w-full rounded bg-white pl-10  text-black ' />
            </div>
          </section>


          <div className="flex items-center ">

            
              {navbarIcons.map(({ href, icon, title }, i) => (
                <a
                  key={i}
                  href={href}
                  className=" flex  items-center justify-center text-white text-lg h-[44px]  w-[44px] p-1 transition-all hover:bg-slate-800/70 "
                >
                  {icon || title}
                </a>
              ))}
      
          </div>









        </div>
    </div>
  )
}

export default Navbar