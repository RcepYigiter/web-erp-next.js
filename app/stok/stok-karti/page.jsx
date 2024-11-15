
"use client"

import React, { useState } from 'react'
import StokPage from '../page'
import Table from '@/components/table/Table';
import TableContent from '@/components/table/TableContent';
import { usePathname, useRouter } from 'next/navigation';
const StokKartiPage = () => {

    const tableHeaders = [
        { field: "stokKodu", header: "Stok Kodu" },
        { field: "alisKdv", header: "Alış Kdv(%)" },
        { field: "kisaAdi", header: "Kısa Adı" },
        { field: "alisVade", header: "Alış Vade" },
        { field: "birimAdi", header: "Birim Adı" }
    ];

    const data = [
        {
            id: 1,
            stokKodu: "00000001",
            alisKdv: "18",
            kisaAdi: "stok 1",
            alisVade: "6 ay",
            birimAdi: "m",
        },
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "m",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "m",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
        ,
        {
            id: 2,
            stokKodu: "000000002",
            alisKdv: "20",
            kisaAdi: "stok 2",
            alisVade: "12 ay",
            birimAdi: "kg",
        }
    ]


    const router = useRouter();

    const onRowClick = (id) => {
        router.push(`/stok/stok-karti/${id}`);
    }
    // const boşluk=data.map(c=>c.kisaAdi.replace(/\s+/g, ''));

    const [search, setSearch] = useState('');
    const filteredData = data.filter(item => {

        return tableHeaders.map(c => c.field).some(field =>
            item[field].replace(/\s+/g, '').toString().toLowerCase().includes(search.replace(/\s+/g, '').toLowerCase())
        );
    });


    return (
        <>

            <StokPage>


                <div className=" flex  items-center justify-between ">


                    <div className="mail-tools tooltip-demo ">

                        <button className="btn btn-sm"><i className="fa fa-refresh" /> Refresh</button>
                        <button className="btn btn-sm"><i className="fa fa-eye" /></button>
                        <button className="btn btn-sm"><i className="fa fa-exclamation" /> </button>
                        <button className="btn btn-sm"><i className="fa fa-trash-o" /> </button>
                    </div>

                    <div className=' items-center hidden md:flex'>
                        <div className="btn-group float-right">
                            <button className="btn  btn-sm"><i className="fa fa-arrow-left" /></button>
                            <button className="btn  btn-sm"><i className="fa fa-arrow-right" /></button>
                        </div>
                        <form method="get" action="index.html" className="float-right mail-search">
                            <div className="input-group">
                                <input value={search} onChange={e => setSearch(e.target.value)} type="text" className="form-control form-control-sm" name="search" placeholder="ara..." />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-sm btn-primary">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>



                <Table searchable={true} headers={tableHeaders} minCellWidth={120}
                    tableContent={<TableContent rowData={filteredData} headers={tableHeaders} onRowClick={onRowClick} />}/>

            </StokPage>

        </>
    )
}

export default StokKartiPage