import React, {  useEffect, useState } from 'react';


export function UseBackendDataHook() {
    const [backendData, setBackendData] = useState([{}])
    useEffect(() => {
        fetch("/api").then(
          response => response.json()
        ).then(
          data => {
            setBackendData(data)
          }
        )
    }, [])
  
    return backendData;
  }

export function UseQueryResultsHook() {
    const [queryResults, setQueryResults] = useState ([{}])
    useEffect(() => {
        fetch("/api/database").then(
            response => response.json()
        ).then(
            data => {
            setQueryResults(data)
            }
        )
    }, [])
  
    return queryResults;
  }
  