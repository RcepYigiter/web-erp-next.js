import PersonelSidebar from '@/components/sidebar/PersonelSidebar'
import React from 'react'

const Personel = ({children}) => {




  return (
    <div className="flex w-full " style={{ height: '100vh' }}>
    <PersonelSidebar/>
    <div className="animated fadeInRight w-full">
      {children}
    </div>
  </div>
  )
}

export default Personel