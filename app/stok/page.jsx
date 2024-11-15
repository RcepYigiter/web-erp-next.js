
'use client'
import React from 'react'
import Home from '../page';
import StokSidebar from '@/components/sidebar/StokSidebar';
import BlankPage from '@/components/BlankPage';


const StokPage = ({ children }) => {

    return (
        <Home>
            <div className='flex '>
                <StokSidebar />
                <div className="animated fadeInRight min-w-[490px]  w-full overflow-hidden">
                    {children? children:<BlankPage></BlankPage>}
                </div>
            </div>
        </Home>
    );
}

export default StokPage