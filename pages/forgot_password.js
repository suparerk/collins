import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import '../css/login.css'
// import '../css/style.css'

const ForgotPassword = () => (
  <div>
    <Head>
      <title>B2PUI</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
    </Head>
    <div className="loginpage reset-password-page">
      <div className="loginpage__wrap loginpage__wrap--bg-2">
        <div className="reset-password-page__header pt-3">
          <div className="row w-100 m-0 p-3 justify-content-between align-items-center">
            <div className="col-auto">
              <div className="logo mb-2 mb-md-2">
                <img src="/static/images/logo/logo_2.png" />
              </div>
            </div>
            <div className="col-auto">
              <a href="/login" className="purple"> <i className="icon icon-arrow_small_left"></i> Back to Login</a>
            </div>
          </div>
        </div>
        <div className="container d-flex h-100">
          <div className="row w-100 m-0 justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-5 pb-5 pb-md-0">
              <h1 className="gray-1 mb-4">Forgot your <br />password?</h1>
              <p className="mb-0 font-light">Enter your e-mail and we’ll help <br />you create a new password.</p>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <div className="box">
                <form id="loginForm" className="col-12 p-0 needs-validation" novalidate="" action="/reset_resend.html">
                  <div className="form-group mb-2">
                    <div className="form-label-group">
                      <input type="text" id="inputUsername" className="form-control" placeholder="Username" value="testusername" required autofocus />
                      <label for="inputUsername">Username</label>
                    </div>
                  </div>
                  <div className="form-group mb-2">
                    <div className="form-label-group">
                      <input type="email" id="inputEmail" className="form-control" placeholder="E-mail" required autofocus />
                      <label for="inputEmail">E-mail</label>
                    </div>
                  </div>
                  <p className="invalid-feedback error_msg mb-2">We couldn’t find your account, Please try again</p>
                  <div className="row mt-4">
                    <div className="col-6">
                      <a href="login.html" className="btn btn--border w-100">Cancel</a>
                    </div>
                    <div className="col-6">
                      <button id="btnSubmit" type="submit" className="btn w-100">Send link</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ForgotPassword
