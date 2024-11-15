"use client"
import React, { useState } from 'react'
import TreeviewItem from './TreeviewItem';

const TreeviewMenu = ({ menu }) => {
    const [show, setShow] = useState([false, false, false]);
    const showSubMenu = (index) => {

        setShow((prevItems) =>
            prevItems.map((item, idx) => (idx === index ? !item : item))
        );

    };
    return (
        <div id="sidebar-menu" className="ibox overflow-auto min-w-52 md:min-w-56 md:max-w-56" style={{ borderRight: '1px solid rgba(0, 0, 0, 0.06)' }}>
            <div className="ibox-content mailbox-content p-1  ">
                <div className="file-manager">

                    <div className="space-25"></div>


                    {
                      menu.map((item, index) => (
                            <div key={index}>
                                <div className="space-25"></div>
                                <h5 >{item.label} </h5>

                                <TreeviewItem data={item.submenu} />

                            </div>
                      ))
                    }

                </div>
            </div>
        </div>
    )
}

export default TreeviewMenu