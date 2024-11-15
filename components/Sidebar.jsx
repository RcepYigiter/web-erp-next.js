"use client"

import React, { useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    CreditCard,
    Mail,
    MessageSquare,
    PlusCircle,
    User,
    UserPlus,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMdArrowDropright } from "react-icons/io";
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import StokSidebar from './sidebar/StokSidebar'
import MuhasebeSidebar from './sidebar/MuhasebeSidebar'
const SidebarMenu = () => {

    const {activeTab}=useSelector(state=>state.layout)
    return (

        <div id='sidebar-menu' className='border max-h-[1000px] h-[calc(100vh-77px)] overflow-auto w-72 min-w-[250px]'>
            {
                activeTab == 'Muhasebe' && <MuhasebeSidebar />
            }
            {
                activeTab == 'Stok' && <StokSidebar />
            }
            {
                activeTab == 'Finans' && <div className=" min-w-56 max-w-6">Finans</div>
            }
            {
                activeTab == 'Satış' && <div className=" min-w-56 max-w-6">Satış</div>
            }
            {
                activeTab == 'Satınalma' && <div className=" min-w-56 max-w-6">Satınalma</div>
            }
           
            {
                activeTab == 'Üretim' && <div className=" min-w-56 max-w-6">Üretim</div>
            }
            {
                activeTab == 'Personel' && <div className=" min-w-56 max-w-6">Personel</div>
            }

        </div>
    )
}

export default SidebarMenu