import { TableFooter } from "@mui/material";
import { width } from "@mui/system";
import { useState } from "react";
import React from "react";
import ViewModal from '../../Components/Modal/View Modal';
import Table from 'react-bootstrap/Table';
import TableFooterComponent from './Table Footer';
import { useNavigate } from "react-router-dom";
import useTable from "./Pagination";
import './Announcement Table.css';

function AnnouncementTableComponent ({
    type,
    tableData,
    // setID,
}) {

    const navigate = useNavigate();
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [clickData, setClickData] = useState();
    const { slice, range } = useTable(tableData, page, rowsPerPage);
    const [isOpen, setIsOpen] = useState(false);
    const fillData = [];

    const data = slice.map((row,index) => {
        let i = 0;
        let rowData = [];

        for (const key in row) {
            rowData.push({
              val: row[key],
            });
            i++;
        }

        if (type === 'admin_announcement_table'){
            return(
                <tr key={row.index} className="table-row-center">
                    
                    <td className="title-date"key={row.index}>
                        <p className="title">{row.name}</p> 
                        <p>{row.date} {row.time}</p> 
                    </td>
                    <td key={row.index}>
                        {row.description}
                    </td>
                </tr>
            )
        }

    

    })

    if (slice.length < rowsPerPage){
        const fillSpace = rowsPerPage - slice.length
        fillData.length = 0;

        for (let i = 0; i < fillSpace; i++) {    
            fillData.push({
                value: " ",
            });
        }
    }

    return(
        <div>
            <Table>
    
                <tbody>
                    {data}
                    {fillData.map((data,index) => (
                        <tr key={index}>

                                <td>
                                    {data.val}
                                </td>

                            
                        </tr>
                    ))}
                </tbody>
            </Table>

            <TableFooterComponent
                range={range}
                slice={slice}
                setPage={setPage}
                page={page}
                setRowsPerPage={setRowsPerPage}
                rowsPerPage={rowsPerPage}
            />
        </div> 
    )
}


export default AnnouncementTableComponent;