
import React from 'react'

import '../sidebar/css/sidebar.css'
import TreeviewMenu from './treeview/TreeviewMenu';
const StokSidebar = () => {

  const menu = [
    {
      label: 'Kartlar',
      icon: '',
      href: '',
      submenu: [
        { label: 'Stok', icon: 'fa fa-inbox', submenu: [], href: '/stok-yonetimi/stok-karti' },
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

  return (


    <>
      <TreeviewMenu menu={menu} />
    </>
  )
}

export default StokSidebar