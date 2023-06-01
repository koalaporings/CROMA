import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";

import { faChevronLeft, faChevronRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import "./Table Footer.css";

library.add(faChevronLeft, faChevronRight, faAnglesLeft, faAnglesRight);

const TableFooter = ({
  range,
  setPage,
  page,
  slice,
  setRowsPerPage,
  rowsPerPage,
  type,
  flag,
  setFlag,
}) => {

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);

  
  function setRows() {
    if (type === "student_tracking_table" && flag === 0){
      setRowsPerPage(10)
      setFlag(1)
    }
    else if (type === "signatory_transaction_table" && flag === 0){
      setRowsPerPage(10)
      setFlag(1)
    }
    else if (type === "signatory_transaction_table_1" && flag === 0){
      setRowsPerPage(10)
      setFlag(1)
    }
    else if (type === "student_history_table" && flag === 0){
      setRowsPerPage(10)
      setFlag(1)
    }
    else if (type === "admin_history_table" && flag === 0){
      setRowsPerPage(10)
      setFlag(1)
    }
  }

  setRows()

  function navigateStart() {
    if (range.length !== 0) {
      setPage(range[0]);
      setEndIndex(5);
      setStartIndex(0);
    }
  }

  function navigatePrevious() {
    var end = endIndex;
    var start = startIndex;
    if (startIndex > 0) {
      setEndIndex(end - 5);
      setStartIndex(start - 5);
    }
  }

  function navigateNext() {
    var end = endIndex;
    var start = startIndex;
    if (endIndex <= range.length - 1) {
      setEndIndex(end + 5);
      setStartIndex(start + 5);
    }
  }

  function navigateLast() {
    if (range.length !== 0) {
      setPage(range.length);
      setEndIndex(range.length);
      setStartIndex(range.length - 5);
    }
  }

  function setPageNav(el) {
    var division = Math.floor(el / 5);
    if (Math.floor(el % 5) !== 0) {
      division += 1;
    }
    setEndIndex(division * 5);
    setStartIndex(division * 5 - 5);
    setPage(parseFloat(el));
  }

  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <div className="table-footer">
        <div className="page-count-cont">
            <span>Rows per page: </span>
            <select
            className="rows-input"
            onChange={(e) => setRowsPerPage(e.target.value)}
            value={rowsPerPage}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
            <span>
            | &nbsp; {page} of {range.length}
            </span>
        </div>
        <div className="pages-cont">
            <button className="button navigateButton" onClick={() => navigateStart()}>
            <FontAwesomeIcon
                icon={"angles-left"}
                title={"Start"}
                alt={"Start"}
                aria-hidden="true"
                className="prev-icon"
            />
            </button>
            <button
            className={
                range.length <= 5
                ? "disable button navigateButton"
                : "button navigateButton"
            }
            onClick={() => navigatePrevious()}
            >
            <FontAwesomeIcon
                icon={"chevron-left"}
                title={"Previous"}
                alt={"previous"}
                aria-hidden="true"
                className="prev-icon"
            />
            </button>
            {range.slice(startIndex, endIndex).map((num, index) => (
            <button
                key={index}
                className={`${"button"} ${
                page === num ? "activeButton" : "inactiveButton"
                }`}
                onClick={() => setPage(num)}
            >
                {num}
            </button>
            ))}
            <button
            className={
                range.length <= 5
                ? "disable button navigateButton"
                : "button navigateButton"
            }
            onClick={() => navigateNext()}
            >
            <FontAwesomeIcon
                icon="chevron-right"
                alt={"next"}
                title={"Next"}
                aria-hidden="true"
                className="next-icon"
            />
            </button>
            <button className="button navigateButton" onClick={() => navigateLast()}>
            <FontAwesomeIcon
                icon="angles-right"
                alt={"previous"}
                title={"End"}
                aria-hidden="true"
                className="prev-icon"
            />
            </button>
        </div>
        <div className="page-number-input-container">
            <select
            className="page-number-input"
            value={page}
            onChange={(e) => setPageNav(e.target.value)}>
            <option value="" disabled>
                
            </option>
            {range.map((el, index) => {
                return (
                <option key={index} value={el}>
                    {index + 1}
                </option>
                );
            })}
            </select>
        </div>
    </div>
  )
}

export default TableFooter;
