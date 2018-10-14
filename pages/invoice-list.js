import React from 'react'
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import ReactPaginate from 'react-paginate';
import classnames from 'classnames'
import styled from 'styled-components'
import { init } from '../reducer/store'
import Layout from '../components/common/Layout'
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

const StyledSelectPerPage = styled.select`
  border-radius: 30px !important;
  border-color: #AF3694;
  width: 64px;
  padding-left: 8px;
  appearance: none;
`

const StyledPaginationWrapper = styled.div`
  .pagination {
    margin-bottom: 0 !important;
    a {
      color: #AF3694 !important;
    }
    li {
      line-height: 30px;
      margin-left: 24px;
      margin-right: 24px;
      /* :hover {
        a {
          background-image: linear-gradient(to right, #b83895, #672d91);
          color: #fff !important;
          width: 30px;
          height: 30px;
          padding: 0;
          text-align: center;
          border-radius: 30px;
          display: block;
        }
      } */
    }
    .active {
      a {
        background-image: linear-gradient(to right, #b83895, #672d91);
        color: #fff !important;
        width: 30px;
        height: 30px;
        padding: 0;
        text-align: center;
        border-radius: 30px;
        display: block;
        :focus {
          outline: none !important;
        }
      }
    }
  }
`

class Index extends React.Component {
  static getInitialProps({ reduxStore }) {
    reduxStore.dispatch(init())

    return {}
  }

  state = {
    perPage: 10,
    page: 0,
    isSearchExpanded: false,
    invoice: [
      {
        invoiceNo: 'NEGRESIT-001',
        companyCode: '0100',
        vendorCode: '0001001150',
        vendorName: 'BKK BAYSWOOD CO.,LT.',
        invoiceDate: '15/08/2018',
        dueDate: '15/08/2018',
        paymentTermDescription: 'CREDIT 30 DAYS AFTER RECEIVE BILL',
        invoiceAmount: 362000.50,
        status: 'VERIFYING'
      },
      {
        invoiceNo: 'NEGRESIT-001',
        companyCode: '0100',
        vendorCode: '0001001150',
        vendorName: 'BKK BAYSWOOD CO.,LT.',
        invoiceDate: '15/08/2018',
        dueDate: '15/08/2018',
        paymentTermDescription: 'CREDIT 30 DAYS AFTER RECEIVE BILL',
        invoiceAmount: 362000.50,
        status: 'VERIFYING'
      },
      {
        invoiceNo: 'NEGRESIT-001',
        companyCode: '0100',
        vendorCode: '0001001150',
        vendorName: 'BKK BAYSWOOD CO.,LT.',
        invoiceDate: '15/08/2018',
        dueDate: '15/08/2018',
        paymentTermDescription: 'CREDIT 30 DAYS AFTER RECEIVE BILL',
        invoiceAmount: 362000.50,
        status: 'VERIFYING'
      },
    ]
  }

  _toggleSearchExpanded = () => {
    this.setState({
      isSearchExpanded: !this.state.isSearchExpanded
    })
  }

  _changePerPage = (e) => {
    this.setState({
      perPage: parseInt(e.target.value)
    })
  }

  _changePage = (data) => {
    this.setState({
      page: data.selected
    })
  }

  render() {
    const { invoice, perPage, page, isSearchExpanded } = this.state
    const classSearchBox = classnames('col-12 col-md-10 pl-2 pr-2 pb-2 pb-md-0 box-more-search', { active: isSearchExpanded });

    const columns = [
      {
        Header: 'Invoice No.',
        accessor: 'invoiceNo',
        Cell: props => <a>{props.value}</a>
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
        Cell: props => <small>{props.value}</small>
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
                <a className="btn btn--transparent btn-clear mr-2" href="#"><i className="icon icon-x" /> Clear</a>
                <button className="btn" type="submit"><i className="icon icon-search" /> Search</button>
              </div>
            </div>
            <div className="row justify-content-between align-items-start ml--2 mr--2">
              <div className={classSearchBox}>
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
                  <a className="btn-show-more-search" onClick={this._toggleSearchExpanded}>
                    <span className="text-close text-bold">More Search</span><span className="text-open text-bold">Less Search</span> <i className="icon icon-arrow_small_down"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box__inner">
            <div className="_dp-f _jtfct-spbtw _pdv-12px _mgt-24px _mgbt-12px">
              <div className="_dp-f">
                <div className="_dp-f _alit-ct">
                  <div>Display</div>
                  <StyledSelectPerPage className="_mgh-4px _h-32px" onChange={this._changePerPage}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </StyledSelectPerPage>
                  <div>Per page</div>
                </div>
                <StyledPaginationWrapper className="_dp-f _alit-ct">
                  <ReactPaginate
                    previousLabel={<i className="icon icon-arrow_small_left"></i>}
                    nextLabel={<i className="icon icon-arrow_small_right"></i>}
                    breakLabel={<a>...</a>}
                    breakClassName={"break-me"}
                    pageCount={2}
                    marginPagesDisplayed={1}
                    initialPage={page}
                    pageRangeDisplayed={2}
                    onPageChange={this._changePage}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                </StyledPaginationWrapper>

              </div>
              <div className="_dp-f">
                <div className="btn-wrap create"><a className="btn ml-1" href="#">Upload Invoice</a></div>
                <div className="btn-wrap create"><a className="btn ml-1" href="#">Create Invoice</a></div>
                <div className="btn-wrap col-display"><button className="btn btn--transparent ml-1">Column Display</button></div>
                <div className="btn-wrap export"><a className="btn btn--transparent ml-1" href="#"><i className="icon icon-export"></i> Export</a></div>
              </div>
            </div>
            <StyledTableWrapper>
            <ReactTable
              data={invoice}
              columns={columns}
              showPagination={false}
              showPaginationTop={false}
              showPaginationBottom={false}
              minRows={0}
            />
            </StyledTableWrapper>
          </div>
        </section>
      </Layout>
    )
  }
}

export default connect()(Index)
