
"use client"
import classNames from 'classnames';
import React, { Children, useState } from 'react'

const StokYonetimi = ({children}) => {

  const menu = [
    {
      label: 'Kartlar',
      icon: '',
      href: '',
      submenu: [
        { label: 'Stok', icon: 'fa fa-inbox', submenu: [], href: '/stok-yonetimi/stok/stok-karti' },
        { label: 'Depo', icon: 'fa fa-inbox', submenu: [], href: '' },
        { label: 'Hizmet', icon: 'fa fa-inbox', submenu: [], href: '' },
        { label: 'Masraf', icon: 'fa fa-inbox', submenu: [], href: '' },
      ],
    },
    {
      label: 'Hareketler',
      icon: '',
      href: '',
      submenu: [
        {
          label: 'Giriş',
          icon: 'fa fa-circle text-warning',
          submenu: [
            {
              label: 'Satınalma Mal Girişi',
              icon: 'fa fa-circle text-warning',
              submenu: [], href: '',
            },
            {
              label: 'Konsiye Girişi',
              icon: 'fa fa-circle text-warning',
              submenu: [], href: '',
            },
            {
              label: 'Konsiye Çıkıştan İade Alımı',
              icon: 'fa fa-circle text-warning',
              submenu: [], href: '',
            },
            {
              label: 'Teşvikli İthalat',
              icon: 'fa fa-circle text-warning',
              submenu: [], href: '',
            },
            {
              label: 'Teşviksiz İthalat',
              icon: 'fa fa-circle text-warning',
              submenu: [], href: '',
            },
            {
              label: 'Fason Giriş',
              icon: 'fa fa-circle text-warning',
              submenu: [], href: '',
            },
          ],
          href: '',
        },
        {
          label: 'Çıkış',
          icon: 'fa fa-circle text-warning',
          submenu: [
            {
              label: 'Parakende Satış',
              icon: 'fa fa-circle text-warning',
              submenu: [], href: '',
            },
            {
              label: 'Toptan Satış',
              icon: 'fa fa-circle text-warning',
              submenu: [], href: '',
            },
          ],
          href: '',
        },
        { label: 'Depo Transferi', icon: 'fa fa-circle text-warning', submenu: [], href: '', },
        { label: 'Stok Devir', icon: 'fa fa-circle text-warning', submenu: [], href: '', },
        { label: 'Barkod Oluştur', icon: 'fa fa-circle text-warning', submenu: [], href: '', },
        { label: 'Maliyet Düzenle', icon: 'fa fa-circle text-warning', submenu: [], href: '', },
      ],
    },
    {
      label: 'Listeler',
      icon: '',
      href: '',
      submenu: [


        { label: 'Stok Listesi', icon: 'fa fa-circle text-warning', submenu: [], href: '', },
        { label: 'Stok Hareket Listesi', icon: 'fa fa-circle text-warning', submenu: [], href: '', },
        { label: 'Stok Bazında Hareketler', icon: 'fa fa-circle text-warning', submenu: [], href: '', },
        { label: 'Stok Toplam', icon: 'fa fa-circle text-warning', submenu: [], href: '', },
        { label: 'Depo Hareket Listesi', icon: 'fa fa-circle text-warning', submenu: [], href: '', },
        { label: 'Depo Transfer Hareketleri', icon: 'fa fa-circle text-warning', submenu: [], href: '', },
        { label: 'Hizmet Listesi', icon: 'fa fa-circle text-warning', submenu: [], href: '', },

      ],
    },
    {
      label: 'Tanımlar',
      icon: '',
      href: '',
      submenu: [


        { label: 'Stok Sınıfları', icon: 'fa fa-circle text-warning', submenu: [], href: '', },
        { label: 'Hizmet Sınıfları', icon: 'fa fa-circle text-warning', submenu: [], href: '', },
        { label: 'Depo Sınıfları', icon: 'fa fa-circle text-warning', submenu: [], href: '', },
        { label: 'Birim Tanımları', icon: 'fa fa-circle text-warning', submenu: [], href: '', },


      ],
    },
  ];





  const [show, setShow] = useState([false, false, false]);
  const showSubMenu = (index) => {
    setShow((prevItems) =>
      prevItems.map((item, idx) => (idx === index ? !item : item))
    );

  };




  return (
    <div className="flex w-full " style={{ height: '100vh' }}>
      <div id="sidebar-menu" className="ibox overflow-auto min-w-52 md:min-w-56 md:max-w-56" style={{ borderRight: '1px solid rgba(0, 0, 0, 0.06)' }}>
        <div className="ibox-content mailbox-content p-1  ">
          <div className="file-manager">

            <div className="space-25"></div>
            {
              menu.map((menu, index) => (

                <div key={index}>
                  <div className="space-25"></div>
                  <h5 >{menu.label} </h5>

                  <ul className="folder-list m-b-md" style={{ padding: 0 }}>
                    {
                      menu.submenu.map((sub, j) => (

                        <div key={j}>
                          {
                            sub.submenu.length == 0 ?
                             <li key={j} className="hover:bg-slate-200 px-2"><a > <i className={`${sub.icon}`}></i> {sub.label} </a></li> :

                              <li key={j}>
                                <div onClick={() => showSubMenu(j)} className={`${classNames({ 'show': show[j] })} flex items-center justify-between hover:bg-slate-200 px-2 cursor-pointer `}>
                                  <a> <i className="fa fa-circle text-warning"></i> {sub.label} </a>

                                  {
                                    show[j] ? <i className="fa-solid fa-sort-down"></i> : <i className="fa-solid fa-caret-right"></i>
                                  }
                                </div>

                                <ul className="category-list sub-menu">

                                  {
                                    sub.submenu.map((item, t) => (
                                      <li key={t} className="pl-4"><a  > <i className="fa fa-file "></i>
                                        {item.label}</a></li>
                                    ))
                                  }
                                  <div className="clearfix"></div>
                                </ul>
                              </li>
                          }

                        </div>
                      ))
                    }
                  </ul>
                </div>



              ))
            }


          </div>
        </div>
      </div>
      <div className="animated fadeInRight w-full">

        {children}
      </div>
    </div>

  )
}

export default StokYonetimi