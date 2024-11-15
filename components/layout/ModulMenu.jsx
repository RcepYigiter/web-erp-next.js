"use client"

import Link from 'next/link'
import React from 'react'

const ModulMenu = () => {


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
            href: '/stok-yonetimi',
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
            href: '/personel',
            disabled: false,
        },
    ];



    return (
        <>
            <div className="w-20 h-full bg-slate-50 fixed z-[2] py-1" style={{ borderRight: '1px solid rgba(0, 0, 0, 0.06)' }}>


                <div className=" flex items-center flex-col">

                    {
                        moduls.map((menu, index) => (

                            <Link href={menu.href} key={index} className={`${menu.disabled ? 'disabled' : ''}  flex flex-col w-full py-1 items-center cursor-pointer hover:bg-slate-200 group`} style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
                                <i className={`${menu.icon} ${menu.class}`} />
                                <span className="text-slate-600 py-1 font-bold">{menu.modul}</span>
                            </Link>

                        ))
                    }



                </div>
            </div>
        </>
    )
}

export default ModulMenu