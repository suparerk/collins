import React from 'react'
import ReactTable from 'react-table'
import styled from 'styled-components'
import 'react-table/react-table.css'

const StyledTableWrapper = styled.div`
  .ReactTable {
    border: 0 !important;
  }
  .rt-thead {
    box-shadow: none !important;
  }
  .rt-th {
    border: 0 !important;
    padding: 18px 15px 18px 15px !important;
    background-color:#F1F3F6;
    font-weight: 800;
    white-space: unset !important;
  }
  .rt-tr-group {
    border-top: 2px solid #F1F3F6 !important;
    border-bottom: 0 !important;
  }
  .rt-td {
    font-family: 'kanitlight' !important;
    border: 0 !important;
    padding: 10px 15px 10px 15px !important;
    white-space: unset !important;
    a {
      color: #AF3694;
      text-decoration: underline;
    }
  }
`

const ReactDataTable = ({ columns, data }) => {
  return (
    <StyledTableWrapper>
      <ReactTable
        data={data}
        columns={columns}
        showPagination={false}
        showPaginationTop={false}
        showPaginationBottom={false}
        minRows={0}
      />
    </StyledTableWrapper>
  )
}

export default ReactDataTable
