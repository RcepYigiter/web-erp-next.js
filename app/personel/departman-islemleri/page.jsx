"use client"
import React, { useState } from 'react'
import Personel from '../page'
import ListTable from '@/components/ListTable'
import BlankPage from '@/components/BlankPage'

const DepartmanIslemleri = () => {


  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },

  ]);

  // Column Definitions: Defines the columns to be displayed.
  // const [colDefs, setColDefs] = useState([
  //   { field: "make" },
  //   { field: "model" },
  //   { field: "price" },
  //   { field: "electric" }
  // ]);
  const colDefs = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'Title', field: 'title' },
    { headerName: 'Body', field: 'body' },
  ]
  return (
    <Personel>
      <div className="flex h-full w-full">
        <div className="file-manager border-r-2 h-[calc(100vh-140px)] w-full ">
          <div className=" w-full flex gap-5 shadow-sm h-[30px] px-4 my-4">
            <div className="flex gap-5 items-center ">
              <a><i className="fa-solid fa-folder-plus text-2xl text-slate-400 hover:text-cyan-700" /></a>
              <a><i className="fa-solid fa-file-medical text-2xl text-slate-400 hover:text-cyan-700" /></a>
              <a><i className="fa-solid fa-trash text-2xl text-slate-400 hover:text-cyan-700" /></a>
              <a><i className="fa-solid fa-filter text-2xl text-slate-400 hover:text-cyan-700" /></a>
            </div>
            <input className="w-2/3 pl-2 outline-none" placeholder="Search" />

          </div>


          <ListTable colDefs={colDefs}/>





        </div>





      </div>
    </Personel>
  )
}

export default DepartmanIslemleri