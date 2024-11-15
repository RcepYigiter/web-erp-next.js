"use client"
import React from 'react'
import StokPage from '../../page'
import { usePathname } from 'next/navigation'

const StokDetayPage = () => {
  const pathName = usePathname()

  const [id] = pathName.split("/").slice(-1)
  console.log(id)//veri tanından id'ye göre veri çelir ve işlem yapılır
  return (
    <StokPage>
      Detay Page 
    </StokPage>
  )
}

export default StokDetayPage