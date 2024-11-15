import Link from 'next/link'
import React from 'react'
import TreeviewSubmenu from './TreeviewSubmenu'

const TreeviewItem = ({ data }) => {
  
    return (
        <ul className="folder-list m-b-md" style={{ padding: 0 }}>
            {
                data.map((sub, j) => (
                    <div key={j}>
                        {
                            sub.submenu.length == 0 ?
                                <li key={j} className="hover:bg-slate-200 px-2">
                                    <Link href={sub.href}  > <i className={`${sub.icon}`}></i> {sub.label} </Link>
                                </li>

                                :

                                <li key={j}>
                                        <TreeviewSubmenu icon={sub.icon} title={sub.label} data={sub.submenu} index={j}/>
                              </li>
                        }
                    </div>
                ))
            }
        </ul>
    )
}

export default TreeviewItem