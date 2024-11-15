"use client"

import React, { useEffect } from 'react'
import { GrMenu } from "react-icons/gr";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from 'next/navigation';

const NavigationBar = () => {

    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter((segment) => segment);
    const isHome = pathname === '/';
    const names = {
        'stok': 'Stok',
        'stok-karti': 'Stok Kartı',
        'muhasebe': 'Muhasebe',
        'stok-yonetimi':'Stok Yönetimi'
    };






  return (
    <section className='flex flex-col   w-full ' style={{ borderBottom: "1px solid #e5e5e5" }}>

    <div className='h-[32px] flex items-center px-1 gap-2 text-xs relative '>
        <div className='mx-3  gap-3 h-[32px] relative flex items-center'>
            <GrMenu className='text-[16px]  flex h-full items-center  cursor-pointer ' />
            <Breadcrumb >
                <BreadcrumbList>

                    {isHome ? (
                        <>
                            <BreadcrumbItem>
                                <BreadcrumbPage >Ana Sayfa</BreadcrumbPage>
                            </BreadcrumbItem>
                        </>
                    ) : <>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Ana Sayfa</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </>

                    }

                    {pathSegments.map((segment, index) => {
                        const href = '/' + pathSegments.slice(0, index + 1).join('/');
                        return (
                            < span key={href} className='flex items-center gap-1'>

                                <BreadcrumbItem >
                                    {
                                        index < pathSegments.length - 1 ? <BreadcrumbLink href={href}>{names[segment] || segment}</BreadcrumbLink> : <BreadcrumbPage>{names[segment] || segment}</BreadcrumbPage>
                                    }
                                </BreadcrumbItem>
                                {index < pathSegments.length - 1 && <BreadcrumbSeparator />}

                            </span>

                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    </div>

</section>
  )
}

export default NavigationBar