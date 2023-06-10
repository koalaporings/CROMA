import { TableFooter } from "@mui/material";
import { width } from "@mui/system";
import { useState } from "react";
import React from "react";
import ViewModal from '../../Components/Modal/View Modal';
import Table from 'react-bootstrap/Table';
import TableFooterComponent from './Table Footer';
import { useNavigate } from "react-router-dom";
import useTable from "./Pagination";
import './Table.css';

function TableComponent ({
    headingColumns,
    type,
    tableData,
    action,
    // setID,
}) {

    

    const navigate = useNavigate();

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const [clickData, setClickData] = useState();
    const [transactionStatus, setTransactionStatus] = useState("");

    const { slice, range } = useTable(tableData, page, rowsPerPage);
    const [flag, setFlag] = useState(0);

    // const clickEvent = () => {
    //     setID(clickData)
    // }
    // const showMoreNavigate = () => navigate('/notifications');

    // const tableColumns = props.headingColumns
    // const tableType = props.type
    // const tableData = props.tableData

    // for modal
    const [isOpen, setIsOpen] = useState(false);

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
                        {row.transaction_date.substring(0,10)}
                    </td>
                    <td key={row.index}
                        data-heading={row.index}>
                        {row.form_name}
                    </td>
                    {/* <td key={row.index}
                        data-heading={row.index}>
                        {row.transaction_id}
                    </td> */}
                    <td key={row.index}
                        data-heading={row.index}>
                        {row.transaction_status.charAt(0).toUpperCase() + row.transaction_status.slice(1)}
                    </td>
                    <td key={row.index}
                        data-heading={row.index}>
                        <button className="action-button" onClick={() => action(row.transaction_id)}>
                            View
                        </button>
                    </td>
                </tr>
            )
        }

        
        if (type === 'student_tracking_table'){
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
                        {row.transaction_date.substring(0,10)}
                    </td>
                    <td key={row.index}
                        data-heading={row.index}>
                        {row.form_name}
                    </td>
                    {/* <td key={row.index}
                        data-heading={row.index}>
                        {row.transaction_id}
                    </td> */}
                    <td key={row.index}
                        data-heading={row.index}>
                        {row.transaction_status}
                    </td>
                    <td key={row.index}
                        data-heading={row.index}>
                        <button className="action-button" onClick={() => action(row.transaction_id)}>
                            View
                        </button>
                    </td>
                </tr>
            )
        }




    if (type === 'student_history_table'){
        return(
            <tr key={row.index} className="table-row-center">
                <td key={row.index}
                    data-heading={row.index}>
                    {row.transaction_date.substring(0,10)}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.form_name}
                </td>
                {/* <td key={row.index}
                    data-heading={row.index}>
                    {row.transaction_id}
                </td> */}
                <td key={row.index}
                    data-heading={row.index}>
                    {row.transaction_status.charAt(0).toUpperCase() + row.transaction_status.slice(1)}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    <button className='action-button' onClick={() => setIsOpen(true)}>
                        View
                    </button>
                    {isOpen && <ViewModal setIsOpen={setIsOpen} data={row.transaction_id} />}
                </td>
            </tr>
        )
    }

    if (type === 'signatory_transaction_table'){
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
                    {row.transaction_date.substring(0,10)}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.form_name}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.name}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.degree_program}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.approved_by}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    <button className="action-button" onClick={() => action(row.transaction_id)}>
                        View
                    </button>
                </td>
            </tr>
        )
    }

    if (type === 'signatory_transaction_table_1'){
        return(
            <tr key={row.index} className="table-row-center">
                
                <td key={row.index}
                    data-heading={row.index}>
                    {row.transaction_date.substring(0,10)}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.form_name}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.name}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.degree_program}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    COS Secretary, Test Signatory 1
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    <button className="action-button" onClick={() => action(row.transaction_id)}>
                        View
                    </button>
                </td>
            </tr>
        )
    }

    if (type === 'clerk_transaction_table'){
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
                    
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.transaction_date.substring(0,10)}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.requester_name}
                </td>
                {/* <td key={row.index}
                    data-heading={row.index}>
                    {row.transaction_id}
                </td> */}
                <td key={row.index}
                    data-heading={row.index}>
                    {row.form_name}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    <button className="action-button" onClick={() => action(row.transaction_id)}>
                        View
                    </button>
                </td>
            </tr>
        )
    }

    // "User Name",
    // "Role",
    // "Edit Role",
    if (type === 'users_table'){
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
                    {row.email}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.role}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    <button className="action-button" onClick={() => action(row.email)}>
                        Edit Role
                    </button>
                </td>
            </tr>
        )
    }



    if (type === 'admin_history_table'){
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
                    {row.transaction_date.substring(0,10)}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.form_name}
                </td>
                {/* <td key={row.index}
                    data-heading={row.index}>
                    {row.transaction_id}
                </td> */}
                <td key={row.index}
                    data-heading={row.index}>
                    {row.requester_name}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    <button className='action-button' onClick={() => setIsOpen(true)}>
                        View
                    </button>
                    {isOpen && <ViewModal setIsOpen={setIsOpen} />}
                </td>
            </tr>
        )
    }

    if (type === 'clerk_history_table'){
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
                    {row.transaction_date.substring(0,10)}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.form_name}
                </td>
                {/* <td key={row.index}
                    data-heading={row.index}>
                    {row.transaction_id}
                </td> */}
                <td key={row.index}
                    data-heading={row.index}>
                    {row.requester_name}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    <button className='action-button' onClick={() => setIsOpen(true)}>
                        View
                    </button>
                    {isOpen && <ViewModal setIsOpen={setIsOpen} />}
                </td>
            </tr>
        )
    }

    if (type === 'admin_transaction_req_table'){
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
                    
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.transaction_date.substring(0,10)}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    {row.requester_name}
                </td>
                {/* <td key={row.index}
                    data-heading={row.index}>
                    {row.transaction_id}
                </td> */}
                <td key={row.index}
                    data-heading={row.index}>
                    {row.form_name}
                </td>
                <td key={row.index}
                    data-heading={row.index}>
                    <button className="action-button" onClick={() => action(row.transaction_id)}>
                        View
                    </button>
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
                key: headingColumns[i],
                value: " ",
            });
        }
    }

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
                type={type}
                flag={flag}
                setFlag={setFlag}
            />
        </div> 
    )
}


export default TableComponent;