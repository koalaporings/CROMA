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
          const MAX_TITLE_LENGTH = 30;
          const MAX_BODY_LENGTH = 150;
        
          const truncatedTitle = row.announcement_title.length > MAX_TITLE_LENGTH
            ? row.announcement_title.substring(0, MAX_TITLE_LENGTH) + '...'
            : row.announcement_title;
        
          const truncatedBody = row.announcement_body.length > MAX_BODY_LENGTH
            ? row.announcement_body.substring(0, MAX_BODY_LENGTH) + '...'
            : row.announcement_body;
        
          const hasBodyText = row.announcement_body && row.announcement_body.length > 0;
          const cellStyle = {
            width: hasBodyText ? '75%' : '100%',
          };
        
          return (
            <tr key={row.index} className="table-row-center">
              <td className="title-date" key={row.index} data-heading={row.index}>
                <NavLink to={`/announcements/view/${row.announcement_id}`} state={{ row }}>
                  <p className="title">{truncatedTitle}</p>
                </NavLink>
                <p>{row.announcement_date} {row.announcement_time}</p>
              </td>
              <td className="announce-body" style={cellStyle} key={row.index} data-heading={row.index}>
                {truncatedBody}
              </td>
            </tr>
          );
        }

          if (type === 'student_announcement_table') {
          
            const MAX_TITLE_LENGTH = 30;
            const MAX_BODY_LENGTH = 150;
          
            const truncatedTitle = row.announcement_title.length > MAX_TITLE_LENGTH
              ? row.announcement_title.substring(0, MAX_TITLE_LENGTH) + '...'
              : row.announcement_title;
          
            const truncatedBody = row.announcement_body.length > MAX_BODY_LENGTH
              ? row.announcement_body.substring(0, MAX_BODY_LENGTH) + '...'
              : row.announcement_body;
          
            const hasBodyText = row.announcement_body && row.announcement_body.length > 0;
            const cellStyle = {
              width: hasBodyText ? '75%' : '100%',
            };
          
            return (
              <tr key={row.index} className="table-row-center">
                <td className="title-date" key={row.index} data-heading={row.index}>
                  <NavLink to={`/announcements/view/${row.announcement_id}`} state={{ row }}>
                    <p className="title">{truncatedTitle}</p>
                  </NavLink>
                  <p>{row.announcement_date} {row.announcement_time}</p>
                </td>
                <td className="announce-body" style={cellStyle} key={row.index} data-heading={row.index}>
                  {truncatedBody}
                </td>
              </tr>
            );
          }

          if (type === 'signatory_announcement_table') {
            const MAX_TITLE_LENGTH = 30;
            const MAX_BODY_LENGTH = 150;
          
            const truncatedTitle = row.announcement_title.length > MAX_TITLE_LENGTH
              ? row.announcement_title.substring(0, MAX_TITLE_LENGTH) + '...'
              : row.announcement_title;
          
            const truncatedBody = row.announcement_body.length > MAX_BODY_LENGTH
              ? row.announcement_body.substring(0, MAX_BODY_LENGTH) + '...'
              : row.announcement_body;
          
            const hasBodyText = row.announcement_body && row.announcement_body.length > 0;
            const cellStyle = {
              width: hasBodyText ? '75%' : '100%',
            };
          
            return (
              <tr key={row.index} className="table-row-center">
                <td className="title-date" key={row.index} data-heading={row.index}>
                  <NavLink to={`/announcements/view/${row.announcement_id}`} state={{ row }}>
                    <p className="title">{truncatedTitle}</p>
                  </NavLink>
                  <p>{row.announcement_date} {row.announcement_time}</p>
                </td>
                <td className="announce-body" style={cellStyle} key={row.index} data-heading={row.index}>
                  {truncatedBody}
                </td>
              </tr>
            );
          }

          if (type === 'clerk_announcement_table') {
            const MAX_TITLE_LENGTH = 30;
            const MAX_BODY_LENGTH = 150;
          
            const truncatedTitle = row.announcement_title.length > MAX_TITLE_LENGTH
              ? row.announcement_title.substring(0, MAX_TITLE_LENGTH) + '...'
              : row.announcement_title;
          
            const truncatedBody = row.announcement_body.length > MAX_BODY_LENGTH
              ? row.announcement_body.substring(0, MAX_BODY_LENGTH) + '...'
              : row.announcement_body;
          
            const hasBodyText = row.announcement_body && row.announcement_body.length > 0;
            const cellStyle = {
              width: hasBodyText ? '75%' : '100%',
            };
          
            return (
              <tr key={row.index} className="table-row-center">
                <td className="title-date" key={row.index} data-heading={row.index}>
                  <NavLink to={`/announcements/view/${row.announcement_id}`} state={{ row }}>
                    <p className="title">{truncatedTitle}</p>
                  </NavLink>
                  <p>{row.announcement_date} {row.announcement_time}</p>
                </td>
                <td className="announce-body" style={cellStyle} key={row.index} data-heading={row.index}>
                  {truncatedBody}
                </td>
              </tr>
            );
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