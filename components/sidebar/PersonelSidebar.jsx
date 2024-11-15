

import React from 'react'
import '../sidebar/css/sidebar.css'
import TreeviewMenu from './treeview/TreeviewMenu';
const PersonelSidebar = () => {
  const menu = [
    {
      label: 'Personel',
      icon: '',
      href: '',
      submenu: [
        {
          label: 'Personel / Departman Girişi', icon: 'fa fa-inbox', href: '',
          submenu: [
            { label: 'Departman İşlemleri', icon: 'fa fa-inbox', submenu: [], href: '/personel/departman-islemleri' },
            { label: 'Personel İşlemleri', icon: 'fa fa-inbox', submenu: [], href: '/personel/personel-islemleri' },

          ]
        },
        { label: 'İzin Ve Rapor Girişi', icon: 'fa fa-inbox', submenu: [], href: '' },
        { label: 'Aylık Puantaj Tablosu', icon: 'fa fa-inbox', submenu: [], href: '' },
        { label: 'Çalışma Saatleri', icon: 'fa fa-inbox', submenu: [], href: '' },
        { label: 'Tatil Girişleri', icon: 'fa fa-inbox', submenu: [], href: '' },
        { label: 'Yıllık İzinler', icon: 'fa fa-inbox', submenu: [], href: '' },
        { label: 'Giriş Onay / Kart Tanımları', icon: 'fa fa-inbox', submenu: [], href: '' },
        { label: 'Kart Hareketleri Ve Raporlar', icon: 'fa fa-inbox', submenu: [], href: '' },
        { label: 'Bordro Bilgileri', icon: 'fa fa-inbox', submenu: [], href: '' },
        { label: 'Olay Görüntüleyici ', icon: 'fa fa-inbox', submenu: [], href: '' },
        { label: 'Uygulama Kılavuzu ', icon: 'fa fa-inbox', submenu: [], href: '' },
        { label: 'Ayarlar ', icon: 'fa fa-inbox', submenu: [], href: '' },
      ],
    },

  ];


  return (
    // <div id="sidebar-menu" className="ibox overflow-auto min-w-52 md:min-w-56 md:max-w-56" style={{ borderRight: '1px solid rgba(0, 0, 0, 0.06)' }}>
    //   <div className="ibox-content mailbox-content p-1  ">
    //     <div className="file-manager">

    //       <div className="space-25"></div>
    //       {
    //         menu.map((menu, index) => (

    //           <div key={index}>
    //             <div className="space-25"></div>
    //             <h5 >{menu.label} </h5>

    //             <ul className="folder-list m-b-md" style={{ padding: 0 }}>
    //               {
    //                  menu.submenu.map((sub, j) => (

    //                   <div key={j}>
    //                     {
    //                       sub.submenu.length == 0 ?
    //                         <li key={j} className="hover:bg-slate-200 px-2">
    //                           <Link href={sub.href} > <i className={`${sub.icon}`}></i> {sub.label} </Link>
    //                         </li>

    //                         :

    //                         <li key={j}>
    //                           <div onClick={(e) => showSubMenu(j)} className={`${classNames({ 'show': show[j] })} flex items-center justify-between hover:bg-slate-200 px-2 cursor-pointer `}>



    //                             <a className='w-[180px] whitespace-nowrap overflow-hidden text-ellipsis' > <i className={sub.icon}></i> {sub.label} </a>

    //                             {
    //                               show[j] ? <i className="fa-solid fa-sort-down"></i> : <i className="fa-solid fa-caret-right"></i>
    //                             }
    //                           </div>

    //                           <ul className="category-list sub-menu">

    //                             {
    //                               sub.submenu.map((item, t) => (
    //                                 <li key={t} className="pl-4"><Link className='w-[180px] whitespace-nowrap overflow-hidden text-ellipsis' href={item.href}  > <i className="fa fa-file "></i>
    //                                   {item.label}</Link></li>
    //                               ))
    //                             }
    //                             <div className="clearfix"></div>
    //                           </ul>
    //                         </li>
    //                     }

    //                   </div>
    //                 ))
    //               }
    //             </ul>

    //           </div>



    //         ))
    //       }


    //     </div>
    //   </div>
    // </div>

    <>
    <TreeviewMenu menu={menu} />
  </>
  )
}

export default PersonelSidebar