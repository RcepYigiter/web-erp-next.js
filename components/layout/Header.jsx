import React from 'react'

const Header = () => {
    return (
        <header className="flex items-center w-full h-10 bg-slate-600 ">
            <div className=" flex-grow flex items-center ">
                <div className=" flex items-center px-2 ">
                    <div className="grid-icon group cursor-pointer" >
                        <div className="grid-item group-hover:bg-slate-300" />
                        <div className="grid-item group-hover:bg-slate-300" />
                        <div className="grid-item group-hover:bg-slate-300" />
                        <div className="grid-item group-hover:bg-slate-300" />
                        <div className="grid-item group-hover:bg-slate-300" />
                        <div className="grid-item group-hover:bg-slate-300" />
                        <div className="grid-item group-hover:bg-slate-300" />
                        <div className="grid-item group-hover:bg-slate-300" />
                        <div className="grid-item group-hover:bg-slate-300" />
                    </div>
                    <span className="text-xl px-2 text-white">Yükseliş Asansör</span>
                </div>
                <div className="w-2/3  px-5 flex justify-around ">
                    <div className="relative w-full">
                        <input type="text" className="p-2 w-full" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-2">
                <span className="text-right p-0 text-white">Recep YİĞİTER</span>
                <span className="text-right p-0 text-white">Admin</span>
            </div>
            <i className="fa-regular fa-user text-2xl text-white p-2 hover:bg-slate-500" />
            <i className="fa-solid fa-gear text-2xl text-white p-2 hover:bg-slate-500" />
        </header>
    )
}

export default Header