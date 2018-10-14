import React from 'react'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import { init } from '../reducer/store'
import Layout from '../components/common/Layout'
import 'react-table/react-table.css'

class Index extends React.Component {
  static getInitialProps({ reduxStore }) {
    reduxStore.dispatch(init())

    return {}
  }

  state = {
    invoice: [
      {
        invoiceNo: 'xxx xxxx',
        companyCode: 'xxx',
        vendorCode: 'xxx',
        invoiceDate: 'xx-xx-xxxx',
        dueDate: 'xx-xx-xxxx',
        paymentTermDescription: 'xxxxxxx',
        invoiceAmount: 0,
        status: 'x'
      },
      {
        invoiceNo: 'xxx xxxx',
        companyCode: 'xxx',
        vendorCode: 'xxx',
        invoiceDate: 'xx-xx-xxxx',
        dueDate: 'xx-xx-xxxx',
        paymentTermDescription: 'xxxxxxx',
        invoiceAmount: 0,
        status: 'x'
      },
      {
        invoiceNo: 'xxx xxxx',
        companyCode: 'xxx',
        vendorCode: 'xxx',
        invoiceDate: 'xx-xx-xxxx',
        dueDate: 'xx-xx-xxxx',
        paymentTermDescription: 'xxxxxxx',
        invoiceAmount: 0,
        status: 'x'
      },

    ]
  }

  render() {
    const { invoice } = this.state

    const columns = [
      {
        Header: 'Invoice No.',
        accessor: 'invoiceNo' // String-based value accessors!
      },
      {
        Header: 'Company Code',
        accessor: 'companyCode',
      },
      {
        Header: 'Vendor Code',
        accessor: 'vendorCode',
      },
      {
        Header: 'Invoice Date',
        accessor: 'invoiceDate',
      },
      {
        Header: 'Due Date',
        accessor: 'dueDate',
      },
      {
        Header: 'Payment Term Description',
        accessor: 'paymentTermDescription',
      },
      {
        Header: 'Invoice Amount',
        accessor: 'invoiceAmount',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ]
    return (
      <Layout>
        <div className="page__header">
          <h2 className="list">Invoice</h2>
        </div>
        <section className="box box--width-header _pd-0px">
          <div className="box__header box__header--shadow">
            <div className="row justify-content-between align-items-center mb-2">
              <div className="col">
                <h4>Search: </h4>
              </div>
              <div className="col text-right">
                <a className="btn btn--transparent btn-clear mr-2"><i className="icon icon-x" /> Clear</a>
                <button className="btn" type="submit"><i className="icon icon-search" /> Search</button>
              </div>
            </div>
            <div className="row justify-content-between align-items-start ml--2 mr--2">
              <div className="col-12 col-md-10 pl-2 pr-2 pb-2 pb-md-0 box-more-search active">
                <div className="row justify-content-start align-items-center ml--2 mr--2">
                  <div className="col w-20 pl-2 pr-2 pb-2 pb-md-0">
                    <div className="form-group">
                      <div className="form-label-group">
                        <input type="text" id="invoice_no" className="form-control" placeholder="Invoice No." />
                        <label htmlFor="invoice_no">Invoice No.</label>
                      </div>
                    </div>
                  </div>
                  <div className="col w-20 pl-2 pr-2 pb-2 pb-md-0">
                    <div className="form-group">
                      <div className="form-label-group">
                        <input type="text" id="inputDefault" className="form-control" placeholder="PO No." />
                        <label htmlFor="inputDefault">PO No.</label>
                      </div>
                    </div>
                  </div>
                  <div className="col w-20 pl-2 pr-2 pb-2 pb-md-0">
                    <div className="form-group">
                      <div className="form-label-group">
                        <input type="text" id="invoice_date" className="form-control datepicker" name="daterange" placeholder="Invoice Date" />
                        <label htmlFor="invoice_date">Invoice Date</label>
                      </div>
                    </div>
                  </div>
                  <div className="col w-20 pl-2 pr-2 pb-2 pb-md-0">
                    <div className="form-group">
                      <div className="form-label-group">
                        <input type="text" id="due_date" className="form-control datepicker" name="daterange" placeholder="Due Date" />
                        <label htmlFor="due_date">Due Date</label>
                      </div>
                    </div>
                  </div>
                  <div className="col w-20 pl-2 pr-2 pb-2 pb-md-0">
                    <div className="form-group">
                      <div className="form-label-group">
                        <select className="custom-select" defaultValue="" id="status">
                          <option value="" disabled="disabled">Choose...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col w-20 pl-2 pr-2 pb-2 pb-md-0">
                    <div className="form-group">
                      <div className="form-label-group">
                        <input type="text" id="company_code" className="form-control" placeholder="Company Code" />
                        <label htmlFor="company_code">Company Code</label>
                      </div>
                    </div>
                  </div>
                  <div className="col w-20 pl-2 pr-2 pb-2 pb-md-0">
                    <div className="form-group">
                      <div className="form-label-group">
                        <input type="text" id="company_name" className="form-control" placeholder="Company Name" />
                        <label htmlFor="company_name">Company Name</label>
                      </div>
                    </div>
                  </div>
                  <div className="col w-20 pl-2 pr-2 pb-2 pb-md-0">
                    <div className="form-group">
                      <div className="form-label-group">
                        <input type="text" id="vendor_code" className="form-control" placeholder="Vendor Code" />
                        <label htmlFor="vendor_code">Vendor Code</label>
                      </div>
                    </div>
                  </div>
                  <div className="col w-20 pl-2 pr-2 pb-2 pb-md-0">
                    <div className="form-group">
                      <div className="form-label-group">
                        <input type="text" id="vendor_name" className="form-control" placeholder="Vendor Name" />
                        <label htmlFor="vendor_name">Vendor Name</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-2 pl-2 pr-2 pb-2 pb-md-0 text-center">
                <div className="purple mt-3 mb-3">
                  <a  className="btn-show-more-search">
                    <span className="text-close text-bold">More Search</span><span className="text-open text-bold">Less Search</span> <i className="icon icon-arrow_small_down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box__inner">
            <div className="table__wrapper">
            <ReactTable
              className="table datatable"
              data={invoice}
              columns={columns}
              showPagination={false}
              showPaginationTop={false}
              showPaginationBottom={false}
            />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default connect()(Index)
