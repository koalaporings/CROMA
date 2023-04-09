import { TableFooter } from "@mui/material";
import { width } from "@mui/system";
import { useState } from "react";
import React from "react";
import Table from 'react-bootstrap/Table';
import TableFooterComponent from './Table Footer';
import { useNavigate } from "react-router-dom";
import useTable from "./Pagination";
import './Table.css';

function TableComponent ({
    headingColumns,
    type,
    tableData,
}) {

    const navigate = useNavigate();

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);

    const { slice, range } = useTable(tableData, page, rowsPerPage);
    // const showMoreNavigate = () => navigate('/notifications');

    // const tableColumns = props.headingColumns
    // const tableType = props.type
    // const tableData = props.tableData

    const fillData = [];

    const data = slice.map((row,index) => {
        let i = 0;
        let rowData = [];

        for (const key in row) {
            rowData.push({
              key: headingColumns[i],
              val: row[key],
            });
            i++;
        }

        if (slice.length < rowsPerPage){
            const fillSpace = rowsPerPage - slice.length
            fillData.length = 0;

            for (let i = 0; i < fillSpace; i++) {    
                fillData.push({
                    key: headingColumns[i],
                    value: " ",
                });
            }
        }
        
        if (type === 'student_ongoing_table'){
            return(
                <tr key={row.index} className="table-row-center">
                    {/* {rowData.map((data,index) => (
                        <td key={index} data-heading={data.key}>
                            {data.val}
                        </td>
                    )
                    
                    )} */}
                    <td key={row.index}
                        data-heading={row.index}>
                        {row.date}
                    </td>
                    <td key={row.index}
                        data-heading={row.index}>
                        {row.transactionName}
                    </td>
                    <td key={row.index}
                        data-heading={row.index}>
                        {row.transactionID}
                    </td>
                    <td key={row.index}
                        data-heading={row.index}>
                        {row.transactionStatus}
                    </td>
                    <td key={row.index}
                        data-heading={row.index}>
                        <button className="action-button">
                            View Details
                        </button>
                    </td>
                </tr>
            )
        }


    })


    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        {headingColumns.map((data) => {
                            return (
                                <th style={{width: '10%', maxWidth: "10%"}}>{data}</th>
                            )
                        })}
                    </tr>
                </thead>
    
                <tbody>
                    {data}
                    {fillData.map((data,index) => (
                        <tr key={index}>
                            {headingColumns.map((data1) => {
                                return(
                                <td>
                                    {data.val}
                                </td>
                                )
                            })}
                            
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


export default TableComponent;