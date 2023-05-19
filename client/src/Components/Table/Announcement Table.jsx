import { TableFooter } from "@mui/material";
import { width } from "@mui/system";
import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
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
    const [rowsPerPage, setRowsPerPage] = useState(10);
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



        if (type === 'admin_announcement_table') {
            return (
              <tr key={row.index} className="table-row-center">
                <td className="title-date" key={row.index} data-heading={row.index}>
                  <NavLink to={`/announcements/view/${row.announcement_id}`} state={{ row }}>
                    {console.log(row.announcement_id)}
                    <p className="title">{row.announcement_title}</p> 
                  </NavLink>
                  <p>{row.announcement_date} {row.announcement_time}</p> 
                </td>
                <td key={row.index} data-heading={row.index}>
                  {row.announcement_body}
                </td>
              </tr>
            )
          }

          if (type === 'student_announcement_table') {
            return (
              <tr key={row.index} className="table-row-center">
                <td className="title-date" key={row.index} data-heading={row.index}>
                  <NavLink to={`/student/announcements/view/${row.announcement_id}`} state={{ row }}>
                    {console.log(row.announcement_id)}
                    <p className="title">{row.announcement_title}</p> 
                  </NavLink>
                  <p>{row.announcement_date} {row.announcement_time}</p> 
                </td>
                <td key={row.index} data-heading={row.index}>
                  {row.announcement_body}
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