
"use client"

import { changeActiveTab } from '@/store/layout-slice'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'

const FixedMenu = () => {

  const dispatch = useDispatch()

  // const menus = [
  //   {
  //     icon: <i className="fa fa-home fa-2x" />,
  //     module: "Muhasebe",
  //     href: "/muhasebe"
  //   },
  //   {
  //     icon: <i className="fa fa-globe fa-2x" />,
  //     module: "Stok",
  //     href: "/stok"
  //   },


  // ]

  const moduls = [
    {
      modul: 'Muhasebe',
      icon: 'fa-solid fa-receipt',
      class: 'text-slate-600 text-2xl group-hover:text-cyan-700',
      href: '',
      disabled: true,
    },
    {
      modul: 'Stok',
      icon: 'fa-solid fa-cubes',
      class: 'text-slate-600 text-2xl group-hover:text-cyan-700',
      href: 'stok-yonetimi',
      disabled: false,
    },
    {
      modul: 'Finans',
      icon: 'fa-solid fa-coins',
      class: 'text-slate-600 text-2xl group-hover:text-cyan-700',
      href: '',
      disabled: true,
    },
    {
      modul: 'Satış',
      icon: 'fa-solid fa-share-from-square',
      class: 'text-slate-600 text-2xl group-hover:text-cyan-700',
      href: '',
      disabled: true,
    },
    {
      modul: 'Satınalma',
      icon: 'fa-solid fa-shop',
      class: 'text-slate-600 text-2xl group-hover:text-cyan-700',
      href: '',
      disabled: true,
    },
    {
      modul: 'Üretim',
      icon: 'fa-solid fa-industry',
      class: 'text-slate-600 text-2xl group-hover:text-cyan-700',
      href: '',
      disabled: true,
    },
    {
      modul: 'Personel',
      icon: 'fa-solid fa-users',
      class: 'text-slate-600 text-2xl group-hover:text-cyan-700',
      href: 'personel',
      disabled: true,
    },
  ];

  const pathname = usePathname(); // usePathname ile pathname alınıyor





  return (
    <>

      <div className="w-20 h-full bg-slate-50 fixed z-[2] py-1" style={{ borderRight: '1px solid rgba(0, 0, 0, 0.06)' }}>


        <div className=" flex items-center flex-col">

          {
            moduls.map((menu, index) => (
              <a  key={index} className={`${menu.disabled?'disabled':''}  flex flex-col w-full py-1 items-center cursor-pointer hover:bg-slate-200 group`} style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <i className={`${menu.icon} ${menu.class}`} />
                <span className="text-slate-600 py-1 font-bold">{menu.modul}</span>
              </a>
            ))
          }



        </div>
      </div>
    </>

  )
}

export default FixedMenu