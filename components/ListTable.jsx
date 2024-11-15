
"use client"
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import defaultColDef from '@/utility/defaultColDef';
import AG_GRID_LOCALE_TR from '@/utility/LocaleText';
import { useEffect, useState } from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import fetchApi from '@/lib/api/fetchApi';
const ListTable = ({ colDefs }) => {
    const [rowData, setRowData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(20); // Sayfa başına 5 öğe
    const [totalPages, setTotalPages] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const [loading, setLoading] = useState(false);

    // Kolonlar (Ag-Grid için)
    const [columnDefs] = useState(colDefs);

    const fetchData = async (page, pageSize) => {
        setLoading(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`);
            const result = await response.json();
            const total = response.headers.get('x-total-count'); // Toplam öğe sayısını al
            setRowData(result);
            setTotalRecords(parseInt(total));
            setTotalPages(Math.ceil(total / pageSize)); // Toplam sayfa sayısını hesapla
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }



    };


    useEffect(() => {
        fetchData(currentPage, pageSize);
    }, [currentPage, pageSize]);

    // Sayfa geçişi işlemleri
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };



    return (
        <div className='flex flex-col w-full h-full'>
            <div className="ag-theme-quartz w-full h-full" // applying the Data Grid theme
            >
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    rowHeight="25"
                    headerHeight="26"
                    defaultColDef={defaultColDef}
                    localeText={AG_GRID_LOCALE_TR}
                    pagination={false}  // Sayfalama Ag-Grid'de değil, dışarıda yapılacak
                />
            </div>

            {/* Shadcn UI Pagination Controls */}
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" onClick={handlePreviousPage} disabled={currentPage === 1} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" onClick={handleNextPage} disabled={currentPage === totalPages} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>




    )
}

export default ListTable