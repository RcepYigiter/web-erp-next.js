"use client"

import { useState } from "react";
import StokYonetimi from "../page";
import '@/public/css/tree-view.css'
import Treeview from "@/components/treeview/tree-view";
import ListTable from "@/components/ListTable";
// Ağaç verisi





function StokKarti() {
    const treeData = [
        {
            id: 1,
            name: '150 - HAMMADDELER',
            expanded: false, // Başlangıçta kapalı
            children: [
                {
                    id: 3,
                    name: '150.001 - SACLAR',
                    expanded: false,
                    children: [
                        {
                            id: 4,
                            name: '150.001.001 - DKP SAC',
                            expanded: false,
                            children: [
                                { id: 5, name: '150.001.001.001 - 1.2 MM DKP SAC' },
                                { id: 6, name: '150.001.001.002 - 1.5 MM DKP SAC' },
                            ],
                        },
                        { id: 7, name: '150.001.002 - HRP SAC' },
                    ],
                },
                { id: 8, name: '150.002 - CİVATA VE SOMUN GRUBU' },
                {
                    id: 9,
                    name: '150.003 - PLASTİK GRUBU',
                    expanded: false,
                    children: [
                        { id: 10, name: '150.003.001 - 20*55 CİVATALI LASTIK TAKOZ' },
                        { id: 11, name: '150.003.002 - PLEXİ DÖKME 5MM 6520DF BEYAZ 200*200CM' },
                    ],
                },
            ],
        },
        {
            id: 2,
            name: '151 - YARIMAMUL',
            expanded: false,
            children: [
                {
                    id: 12,
                    name: '151.001 - TABAN',
                    expanded: false,
                    children: [{ id: 15, name: '151.001.001 TABAN SACI' }],
                },
                { id: 13, name: '151.002 - TAVAN' },
                { id: 14, name: '151.003 - DUVAR' },
            ],
        },
    ];
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
    const [colDefs, setColDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
        { field: "electric" }
    ]);



    return (
        <StokYonetimi>

            <div className="flex h-full">
                <div className="file-manager min-w-[500px] w-1/3 border-r-2 h-full">
                    <div className=" w-full flex gap-3  shadow-sm h-[30px]">
                        <input className="w-2/3 pl-2 outline-none" placeholder="Search" />
                        <div className="flex gap-2 items-center">
                            <a><i className="fa-solid fa-folder-plus text-2xl text-slate-400 hover:text-cyan-700" /></a>
                            <a><i className="fa-solid fa-file-medical text-2xl text-slate-400 hover:text-cyan-700" /></a>
                            <a><i className="fa-solid fa-trash text-2xl text-slate-400 hover:text-cyan-700" /></a>
                        </div>
                    </div>


                    <Treeview treeData={treeData} />







                </div>

                {
                    rowData.length > 0 ? <ListTable rowData={rowData}
                        columnDefs={colDefs} /> : <div className="w-2/3 m-auto ">
                        <svg width={184} height={152} viewBox="0 0 184 152" xmlns="http://www.w3.org/2000/svg" className="w-full">
                            <g fill="none" fillRule="evenodd">
                                <g transform="translate(24 31.67)">
                                    <ellipse cx="67.797" cy="106.89" rx="67.797" ry="12.668" className="fill-[#f5f5f5];opacity:0.1; " style={{ fillOpacity: '0.8' }} />
                                    <path d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z" className="fill-[#aeb8c2]" />
                                    <path d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z" transform="translate(13.56)" className="ant-empty-img-default-path-2" />
                                    <path d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" className="fill-[#f5f5f7]" />
                                    <path d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z" className="fill-[#dce0e6]" />
                                </g>
                                <path d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z" className="fill-[#dce0e6]" />
                                <g transform="translate(149.65 15.383)" className="fill-white">
                                    <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
                                    <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
                                </g>
                            </g>
                        </svg>
                        <div className="text-center">
                            Gösterilecek birşey yok..
                        </div>
                    </div>
                }



            </div>







        </StokYonetimi>
    );
}

export default StokKarti;