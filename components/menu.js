import React from 'react'
import Head from 'next/head'
import '../css/style.css'
import '../css/login.css'

const Menu = () => (
  <div>
    <Head>
      <title>B2PUI</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
    </Head>
    <nav className="side-navbar shrink">
      <div className="side-navbar-wrapper">
        <div className="sidenav-header d-flex align-items-center">
          <div className="sidenav-header-inner">
            <div className="sidenav-header-inner--wrap">
              <div id="toggle-btn" className="toggle-btn">
                <div className="logo-wrap">
                  <img src="/static/images/logo/logo.png" />
                </div>
              </div>
              <a className="nav-link" href="/static/images/dashboard.html">
                <span>Dashboard</span>
              </a>
            </div>
          </div>
        </div>
        <div className="main-menu">
          <ul id="side-main-menu" className="side-menu list-unstyled">
            <div>
              <li><a className="nav-link active" href="po.html"><span><i className="icon icon-PO"></i></span>Purchase Order</a></li>
              <li><a className="nav-link" href="gr.html"><span><i className="icon icon-GR"></i></span>Goods Receive</a></li>
              <li><a className="nav-link" href="invoice.html"><span><i className="icon icon-INV"></i></span>Invoice</a></li>
              <li><a className="nav-link" href="cn.html"><span><i className="icon icon-CN"></i></span>Credit Note</a></li>
              <li><a className="nav-link" href="dn.html"><span><i className="icon icon-DN"></i></span>Debit Note</a></li>
              <li><a className="nav-link" href="3wm.html"><span><i className="icon icon-3wm"></i></span>3 Way Matching</a></li>
              <li><a className="nav-link" href="2wm.html"><span><i className="icon icon-2wm"></i></span>2 Way Matching</a></li>
              <li><a className="nav-link" href="doa.html"><span><i className="icon icon-DOA"></i></span>Waiting DOA Approval</a></li>
            </div>
            <li className="bottom"><a className="nav-link" href="login.html"><span><i className="icon icon-Logout"></i></span>Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="sidenav-header-toggle">
      <div id="toggle-btn-open" className="toggle-btn-open">
        <div className="logo-wrap">
          <img src="/static/images/logo/logo.png" />
        </div>
      </div>
    </div>
    <div className="page active">
      <div className="container main pt-4">
        <div className="container">
          <div className="row">
            <div className="text-center mb-3 col col-lg-12">
              <h1>MENU</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-lg-6 mt-3">
              <a className="btn w-100" href="/login">Login</a>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-lg-6 mt-3">
              <a className="btn w-100" href="/forgot_password">forgot password</a>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-lg-6 mt-3">
              <a className="btn w-100" href="dashboard.html">Dashboard</a>
            </div>
          </div>
          <div className="row mb-5"></div>
        </div>
      </div>
    </div>
  </div>
)
export default Menu
