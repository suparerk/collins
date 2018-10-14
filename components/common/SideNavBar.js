import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'

class SideNavBar extends React.Component {
  state = {
    isExpandedSideNavBar: false
  }

  render () {
    const { isExpandedSideNavBar } = this.state
    const classSideNavBar = classnames('side-navbar', { shrink: !isExpandedSideNavBar });

    return (
      <div>
        <nav className={classSideNavBar} onMouseOver={() => this.setState({ isExpandedSideNavBar: true })} onMouseLeave={() => this.setState({ isExpandedSideNavBar: false })}>
          <div className="side-navbar-wrapper">
            <div className="sidenav-header d-flex align-items-center">
              <div className="sidenav-header-inner">
                <div className="sidenav-header-inner--wrap">
                  <div id="toggle-btn" className="toggle-btn">
                    <div className="logo-wrap">
                      <img src="/static/images/logo/logo.png" alt="logo" />
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
                  <li><Link href="/invoice"><a className="nav-link"><span><i className="icon icon-INV"></i></span>Invoice</a></Link></li>
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
              <img src="/static/images/logo/logo.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SideNavBar
