"use client"

import classNames from 'classnames'
import Link from 'next/link';
import React, { useState } from 'react'

const TreeviewSubmenu =  ({ data,title ,icon,index}) => {
    const [show, setShow] = useState([false, false, false]);
    const showSubMenu = (index) => {

        setShow((prevItems) =>
            prevItems.map((item, idx) => (idx === index ? !item : item))
        );

    };
    return (
        <>
            <div onClick={() => showSubMenu(index)} className={`${classNames({ 'show': show[index] })} flex items-center justify-between hover:bg-slate-200 px-2 cursor-pointer `}>
                {/* <Link className='w-[180px] whitespace-nowrap overflow-hidden text-ellipsis' href={sub.href}> <i className="fa fa-circle text-warning"></i> {sub.label} </Link> */}
                <a className='w-[180px] whitespace-nowrap overflow-hidden text-ellipsis'  > <i className={icon}></i> {title} </a>

                {
                    show[index] ? <i className="fa-solid fa-sort-down"></i> : <i className="fa-solid fa-caret-right"></i>
                }
            </div>

            <ul className="category-list sub-menu">

                {
                    data.map((item, t) => (
                        <li key={t} className="pl-4"><Link href={item.href}  > <i className="fa fa-file "></i>
                            {item.label}</Link></li>
                    ))
                }
                <div className="clearfix"></div>
            </ul>

      

        </>
    )
}

export default TreeviewSubmenu