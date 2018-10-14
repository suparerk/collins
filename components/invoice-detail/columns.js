import React from 'react'

const creditnoteListColumns = [
  {
    Header: 'Invoice Date',
    accessor: 'invoiceDate',
    Cell: props => <a>{props.value}</a>
  },
  {
    Header: 'No.',
    accessor: 'no',
  },
  {
    Header: 'CN No.',
    accessor: 'cnNo',
  },
  {
    Header: 'Type of CN',
    accessor: 'typeOfCN',
  },
  {
    Header: 'CN Reason',
    accessor: 'CNReason',
    Cell: props => <small>{props.value}</small>,
  },
  {
    Header: 'CN Date',
    accessor: 'CNDate',
  },
  {
    Header: 'CN Amount [inc. VAT]',
    accessor: 'CNAmount',
  },
  {
    Header: 'CN Status',
    accessor: 'CNStatus',
  },
  {
    Header: 'Currency',
    accessor: 'currency',
  },
]

const creditnoteReferColumns = [
  {
    Header: 'No.',
    accessor: 'no',
    Cell: props => <a>{props.value}</a>
  },
  {
    Header: 'CN No.',
    accessor: 'cnNo',
  },
  {
    Header: 'Type of CN',
    accessor: 'typeOfCN',
  },
  {
    Header: 'CN Reason',
    accessor: 'CNReason',
    Cell: props => <small>{props.value}</small>,
  },
  {
    Header: 'CN Date',
    accessor: 'CNDate',
  },
  {
    Header: 'CN Amount [inc. VAT]',
    accessor: 'CNAmount',
  },
  {
    Header: 'CN Status',
    accessor: 'CNStatus',
  },
  {
    Header: 'Currency',
    accessor: 'currency',
  },
]

export {
  creditnoteListColumns,
  creditnoteReferColumns,
}
