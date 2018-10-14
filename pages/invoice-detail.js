import React from 'react'
import moment from 'moment'
import { UncontrolledCollapse } from 'reactstrap'
import ReactDataTable from '../components/common/ReactDataTable'
import Layout from '../components/common/Layout'
import {
  creditnoteListColumns,
  creditnoteReferColumns,
} from '../components/invoice-detail/columns'
import {
  creditnoteListData,
  creditnoteReferData,
} from '../components/invoice-detail/data'
import '../css/style.css'
import data from '../data/invoice_detail.js'

const yesNoLabel = (value) => {
  if (value === 'Y') return 'Yes'
  if (value === 'N') return 'No'
  return 'N/A'
}

const InvoiceDetail = () => {
  const { rows } = data
  const { items, fileAttachments, ...theData } = rows[0]
  const theItem = items[0]
  return (
    <Layout>
      <div className="page active">
        <div className="page__header">
          <h2>Invoice No. : {theItem.invoiceLinearId}</h2>
        </div>
        <div className="page__breadcrumb">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Invoice</a></li>
              <li className="breadcrumb-item active" aria-current="page">Invoice No. : {theItem.invoiceLinearId}</li>
            </ol>
          </nav>
        </div>
        <section className="box box--width-header">
          <div className="box__header">
            <div className="row justify-content-between align-items-center mb-2">
              <div className="col"> Entry Date : <strong>{moment(theItem.issuedDate).format('DD/MM/YYYY')}</strong>
              </div>
              <div className="col text-right"> Invoice Status : <strong className="purple">Request to Resubmit</strong>
                <button name="btnCancel" className="btn btn--transparent mr-2">Cancel Invoice</button>
                <button name="btnEdit" className="btn btn--transparent mr-2">Edit Invoice</button>
              </div>
            </div>
          </div>
          <div className="box__inner">
            { /* <!-- Box "#vendor" - Start --> */ }
            <div className="row box">
              <a href="#vendorInfo" data-toggle="collapse" role="button" aria-expanded="true" area-controls="vendorInfo" className="d-flex w-100 btnToggle">
                <div className="col-6">
                  <h3 className="border-bottom gray-1">Vendor</h3>
                </div>
                <div className="col-6">
                  <h3 className="border-bottom gray-1">Company</h3>
                  <i className="fa fa-chevron-up gray-1" aria-hidden="true" />
                  <i className="fa fa-chevron-down gray-1" aria-hidden="true" />
                </div>
              </a>
              { /* <!-- Vendor Lists - Start --> */ }
              <div id="vendorInfo" className="collapse multi-collapse w-100 show">
                <div className="card card-body noborder">
                  <div className="row">
                    <div className="col-6">
                      <div className="row">
                        <p className="col-4 text-right">Code :</p>
                        <p className="col-6">{theData.vendorNumber}</p>
                      </div>
                      <div className="row">
                        <p className="col-4 text-right">Name :</p>
                        <p className="col-6">{theData.vendorName}</p>
                      </div>
                      <div className="row">
                        <p className="col-4 text-right">Tax ID :</p>
                        <p className="col-6">{theData.vendorTaxNumber}</p>
                      </div>
                      <div className="row">
                        <p className="col-4 text-right">Branch :</p>
                        <p className="col-6">{theData.vendorBranchCode}</p>
                      </div>
                      <div className="row">
                        <p className="col-4 text-right">Address :</p>
                        <p className="col-6">{theData.vendorAddress}</p>
                      </div>
                      <div className="row">
                        <p className="col-4 text-right">Tel. :</p>
                        <p className="col-6">{theData.vendorAddress}</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <p className="col-4 text-right">Code :</p>
                        <p className="col-6">{theData.companyCode}</p>
                      </div>
                      <div className="row">
                        <p className="col-4 text-right">Name :</p>
                        <p className="col-6">{theData.companyName}</p>
                      </div>
                      <div className="row">
                        <p className="col-4 text-right">Tax ID :</p>
                        <p className="col-6">{theData.companyTaxNumber}</p>
                      </div>
                      <div className="row">
                        <p className="col-4 text-right">Branch :</p>
                        <p className="col-6">{`${theData.companyBranchCode} (${theData.companyBranchName})`}</p>
                      </div>
                      <div className="row">
                        <p className="col-4 text-right">Address :</p>
                        <p className="col-6">{theData.companyAddress}</p>
                      </div>
                      <div className="row">
                        <p className="col-4 text-right">Tel. :</p>
                        <p className="col-6">{theData.companyAddress}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              { /* <!-- Vendor Lists - End --> */ }
            </div>
            { /* <!-- Box #vendor" - End  --> */ }
            { /* <!-- Box "#paymentInfo" - Start  --> */ }
            <div className="row box">
              <a href="#paymentInfo" role="button" aria-expanded="false" area-controls="paymentInfo" className="d-flex w-100 btnToggle">
                <div className="col-12" id="toggler-paymentInfo">
                  <h3 className="border-bottom gray-1">Payment Information</h3>
                  <i className="fa fa-chevron-up gray-1" aria-hidden="true" />
                  <i className="fa fa-chevron-down gray-1" aria-hidden="true" />
                </div>
              </a>
              <UncontrolledCollapse className="w-100" toggler="#toggler-paymentInfo">
                { /* <!-- Payment Information Lists - Start --> */ }
                <div id="paymentInfo" className="w-100">
                  <div className="card card-body noborder">
                    <div className="row">
                      <div className="col-6">
                        <div className="row">
                          <p className="col-4 text-right">Invoice Date :</p>
                          <p className="col-6">{moment(theData.invoiceDate).format('DD/MM/YYYY')}</p>
                        </div>
                        <div className="row">
                          <p className="col-4 text-right">Payment Date :</p>
                          <p className="col-6">{theData.paymentTermDays} Days</p>
                        </div>
                        <div className="row">
                          <p className="col-4 text-right">Payment Term Description :</p>
                          <p className="col-6">{theData.paymentTermDesc}</p>
                        </div>
                        <div className="row">
                          <p className="col-4 text-right">Invoice Financing :</p>
                          <p className="col-6">{yesNoLabel(theData.invoiceFinancing)}</p>
                        </div>
                        <div className="row">
                          <p className="col-4 text-right">Send to CMS :</p>
                          <p className="col-6">{yesNoLabel('no data')}</p>
                        </div>
                        <div className="row">
                          <p className="col-4 text-right">Send to Bank :</p>
                          <p className="col-6">{yesNoLabel('no data')}</p>
                        </div>
                        <div className="row">
                          <p className="col-4 text-right">Last Edited By :</p>
                          <p className="col-6">{theData.dueDateLastEditedBy}</p>
                        </div>
                        <div className="row">
                          <p className="col-4 text-right">Last Edited Date :</p>
                          <p className="col-6">{moment(theData.dueDateLastEditedDate).format('DD/MM/YYYY')}</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <p className="col-4 text-right">Due Date :</p>
                          <p className="col-6">{moment(theData.initialDueDate).format('DD/MM/YYYY')}</p>
                        </div>
                        <div className="row">
                          <p className="col-4 text-right">Revised Payment Due Date :</p>
                          <p className="col-6"><strong className="purple">{moment(theData.dueDate).format('DD/MM/YYYY')} <i className="fa fa-calendar" /></strong></p>
                        </div>
                        <div className="row">
                          <p className="col-4 text-right">Sub Total :</p>
                          <p className="col-6">
                            <span className="number text-right">{Intl.NumberFormat('en-TH', { style: 'currency', currency: 'THB' }).format(theData.subTotal)}</span>
                            <span className="unit">THB</span>
                          </p>
                        </div>
                        <div className="row">
                          <p className="col-4 text-right">TAX Total :</p>
                          <p className="col-6">
                            <span className="number text-right">{Intl.NumberFormat('en-TH', { style: 'currency', currency: 'THB' }).format(theData.vatTotal)}</span>
                            <span className="unit">THB</span>
                          </p>
                        </div>
                        <div className="row">
                          <p className="col-4 text-right">Invoice Amount (inc. TAX) :</p>
                          <p className="col-6">
                            <span className="number text-right">{Intl.NumberFormat('en-TH', { style: 'currency', currency: 'THB' }).format(theData.invoiceTotal)}</span>
                            <span className="unit">THB</span>
                          </p>
                        </div>
                        <div className="row">
                          <p className="col-4 text-right">Invoice Payable Amount (inc. TAX) :</p>
                          <p className="col-6">
                            <span className="number text-right">{Intl.NumberFormat('en-TH', { style: 'currency', currency: 'THB' }).format(theData.totalPayable)}</span>
                            <span className="unit">THB</span>
                          </p>
                        </div>
                        <div className="row">
                          <p className="col-4 text-right">Last Edited Reason :</p>
                          <p className="col-6">{theData.dueDateLastEditedReason}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </UncontrolledCollapse>
              { /* <!-- Payment Information Lists - End --> */ }
            </div>
            { /* <!-- Box #paymentInfo" - End --> */ }
            { /* <!-- Box "#creditnoteList" - Start --> */ }
            <div className="row box">
              <a href="#creditnoteList" role="button" aria-expanded="false" area-controls="creditnoteList" className="d-flex w-100 btnToggle">
                <div className="col-12"  id="toggler-creditnoteList">
                  <h3 className="gray-1">Credit Note Refer to this Invoice ( 2 Items )</h3>
                  <i className="fa fa-chevron-up gray-1" aria-hidden="true" />
                  <i className="fa fa-chevron-down gray-1" aria-hidden="true" />
                </div>
              </a>
              { /* <!-- CreditNote Lists - Start --> */ }
              <UncontrolledCollapse className="w-100"  toggler="#toggler-creditnoteList">
                <div id="creditnoteList" className="w-100">
                  <div className="card card-body noborder">
                    <div className="row">
                      <div className="col-12">
                        <ReactDataTable columns={creditnoteListColumns} data={creditnoteListData} />
                      </div>
                      <div className="col-12">
                        <p className="border-bottom text-center">
                          <a href="javascript:void(0);" id="btnAddCN" className="purple">
                            <i className="fa fa-plus-circle" /> Create CN
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </UncontrolledCollapse>
              { /* <!-- CreditNote Lists - End --> */ }
            </div>
            { /* <!-- Box #creditnoteList" - End --> */ }
            { /* <!-- Box "#creditnoteRefer" - Start --> */ }
            <div className="row box">
              <a href="#creditnoteRefer" role="button" aria-expanded="false" area-controls="creditnoteRefer" className="d-flex w-100 btnToggle">
                <div className="col-12" id="toggler-creditnoteRefer">
                  <h3 className="gray-1">Credit Note Settled to this Invoice ( 1 Item )</h3>
                  <i className="fa fa-chevron-up gray-1" aria-hidden="true" />
                  <i className="fa fa-chevron-down gray-1" aria-hidden="true" />
                </div>
              </a>
              { /* <!-- creditnoteRefer Lists - Start --> */ }
              <UncontrolledCollapse className="w-100"  toggler="#toggler-creditnoteRefer">
                <div id="creditnoteRefer" className="multi-collapse w-100">
                  <div className="card card-body noborder">
                    <div className="row">
                    <div className="col-12">
                      <ReactDataTable columns={creditnoteReferColumns} data={creditnoteReferData} />
                    </div>
                    </div>
                  </div>
                </div>
              </UncontrolledCollapse>
              { /* <!-- creditnoteRefer Lists - End --> */ }
            </div>
            { /* <!-- Box #creditnoteRefer" - End --> */ }
            { /* <!-- Box Attachment - Start --> */ }
            <div className="row box">
              <a href="#attachmentLists" role="button" aria-expanded="false" area-controls="attachmentLists" className="d-flex w-100 btnToggle">
                <div className="col-12" id="toggler-attachmentLists">
                  <h3 className="border-bottom gray-1">Attachments</h3>
                  <i className="fa fa-chevron-up gray-1" aria-hidden="true" />
                  <i className="fa fa-chevron-down gray-1" aria-hidden="true" />
                </div>
              </a>
              { /* <!-- Attachment lists - Start --> */ }
              <UncontrolledCollapse className="w-100"  toggler="#toggler-attachmentLists">
                <div id="attachmentLists" className="w-100">
                  <div className="card card-body noborder">
                    <div className="row">
                      { fileAttachments.map(attachment => (
                        <div className="col-6" key={attachment.attachmentHash}>
                          <div className="row">
                            <p className="col-4 text-right">Attach {attachment.attachmentType}:</p>
                            <p className="col-6"><span className="fileName">{attachment.attachmentName}</span><a href="javascript:void(0);" className="purple font-bold underline">Download</a></p>
                          </div>
                          <div className="row">
                            <p className="col-4 text-right">Receipt NO. :</p>
                            <p className="col-6">123456789</p>
                          </div>
                          <div className="row">
                            <p className="col-4 text-right">Attach Other Documents :</p>
                            <p className="col-6"><span className="fileName">OtherDoc.PNG</span> <a href="javascript:void(0);" className="purple font-bold underline">Download</a></p>
                            <p className="col-6 offset-4"><span className="fileName">OtherDoc2.PNG</span> <a href="javascript:void(0);" className="purple font-bold underline">Download</a></p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </UncontrolledCollapse>
              { /* <!-- Attachment lists - End --> */ }
            </div>
            { /* <!-- Box Attachment lists - End --> */ }
          </div>{ /* <!-- box__inner --> */ }
        </section>
        <section className="box box--width-header">
          { /* <!-- box--no-shadow --> */ }
          <div className="box__header">
            <div className="row justify-content-between align-items-center mb-2">
              <div className="col">
                <h3>Items Information</h3>
              </div>
            </div>
          </div>{ /* <!-- box__header --> */ }
          <div className="box__inner">
            { /* <!-- Box "#tax3" - Start --> */}
            <div className="row box">
              <a href="#tax3" role="button" aria-expanded="false" area-controls="tax3" className="d-flex w-100 btnToggle">
                <div className="col-12" id="toggler-tax3">
                  <h3 className="gray-1">TAX 3%</h3>
                  <i className="fa fa-chevron-up gray-1" aria-hidden="true" />
                  <i className="fa fa-chevron-down gray-1" aria-hidden="true" />
                </div>
              </a>
              {/* <!-- tax3 Lists - Start --> */}
              <UncontrolledCollapse className="w-100"  toggler="#toggler-tax3">
                <div id="tax3" className="w-100">
                  <div className="card card-body noborder">
                  <div className="row">
                    <div className="col-12">
                      <div className="table_wrapper">
                        <table className="table datatable">
                          <thead>
                            <tr>
                              <th>PO No.</th>
                              <th>PO Item No.</th>
                              <th>Material Description</th>
                              <th>Qty</th>
                              <th>Unit Description</th>
                              <th>Unit Price</th>
                              <th>Sub Total</th>
                              <th>Currency</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                            <tr>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                            <tr>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan="6" className="text-right">Sub Total (Exclude VAT)</td>
                              <td className="font-bold">-</td>
                              <td>THB</td>
                            </tr>
                            <tr>
                              <td colSpan="6" className="text-right">TAX Total (3%)</td>
                              <td className="font-bold">-</td>
                              <td>THB</td>
                            </tr>
                            <tr>
                              <td colSpan="6" className="text-right">Invoice Amount (inc. TAX)</td>
                              <td className="font-bold">-</td>
                              <td>THB</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </UncontrolledCollapse>
              {/* <!-- tax3 Lists - End --> */}
            </div>
            {/* <!-- Box #tax3" - End --> */}
            {/* <!-- Box "#tax7" - Start --> */}
            <div className="row box">
              <a href="#tax7" role="button" aria-expanded="false" area-controls="tax7" className="d-flex w-100 btnToggle">
                <div className="col-12" id="toggler-tax7">
                  <h3 className="gray-1">TAX 7%</h3>
                  <i className="fa fa-chevron-up gray-1" aria-hidden="true" />
                  <i className="fa fa-chevron-down gray-1" aria-hidden="true" />
                </div>
              </a>
              {/* <!-- tax7 Lists - Start --> */}
              <UncontrolledCollapse className="w-100"  toggler="#toggler-tax7">
                <div id="tax7" className="w-100">
                  <div className="card card-body noborder">
                  <div className="row">
                    <div className="col-12">
                      <div className="table_wrapper">
                        <table className="table datatable">
                          <thead>
                            <tr>
                              <th>PO No.</th>
                              <th>PO Item No.</th>
                              <th>Material Description</th>
                              <th>Qty</th>
                              <th>Unit Description</th>
                              <th>Unit Price</th>
                              <th>Sub Total</th>
                              <th>Currency</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                            <tr>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                            <tr>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <td colSpan="6" className="text-right">Sub Total (Exclude VAT)</td>
                              <td className="font-bold">-</td>
                              <td>THB</td>
                            </tr>
                            <tr>
                              <td colSpan="6" className="text-right">TAX Total (7%)</td>
                              <td className="font-bold">-</td>
                              <td>THB</td>
                            </tr>
                            <tr>
                              <td colSpan="6" className="text-right">Invoice Amount (inc. TAX)</td>
                              <td className="font-bold">-</td>
                              <td>THB</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </UncontrolledCollapse>
              {/* <!-- tax3 Lists - End --> */}
            </div>
            {/* <!-- Box #tax7" - End --> */}
          </div>{/* <!-- box__inner --> */}
        </section>
      </div>
    </Layout>
  )
}

export default InvoiceDetail
