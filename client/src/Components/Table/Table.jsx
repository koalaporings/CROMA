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
        
        if (type === 'student_ongoing_table'){
            return(
            <tr key={row.index}>
                {rowData.map((data,index) => (
                    <td key={index} data-heading={data.key}>
                        {data.val}
                  </td>
                )
                
                )}
                {/* <td key={row.index}
                    data-heading={row.index}>
                    {row.id}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.name}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.transaction}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.status}
                </td> */}
            </tr>
            )
        }
    })

    //         return(
            //     <div>
            //         <Table striped bordered>
            //             <thead>
            //                 <tr className="main-table-header-container">
            //                     {headingColumns.map((data, index) => {
            //                     return (
            //                         <th key={index}>
            //                             {data}
            //                         </th>
            //                     );
            //                     })}
            //                 </tr>
            //             </thead>
            //             <tbody>
                            // <tr key={row.index}>
                            //     <td key={row.index}
                            //         data-heading={row.index}>
                            //         {row.id}
                            //     </td>
                            //     <td key={row.index}
                            //         data-heading={row.index}>
                            //         {row.name}
                            //     </td>
                            //     <td key={row.index}
                            //         data-heading={row.index}>
                            //         {row.transaction}
                            //     </td>
                            //     <td key={row.index}
                            //         data-heading={row.index}>
                            //         {row.status}
                            //     </td>
                            // </tr>
            //             </tbody>
            //         </Table>
            //     </div>
            // )


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
                    {/* {tableData.map((data) => {
                        return (
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.transaction}</td>
                                <td>{data.status}</td>
                            </tr>
                        )
                    })} */}
                    {data}
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