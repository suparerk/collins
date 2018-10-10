import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Nav, NavItem, NavLink } from 'reactstrap'

const Index = () => (
  <div>
    <Head>
      <title>B2PUI</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
    </Head>
    <div className="page">
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
          <div className="row mb-5" />
        </div>
      </div>
    </div>
  </div>
)
export default Index
