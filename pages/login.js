import React, { Component } from "react";
import Link from 'next/link'
import Head from 'next/head'
import '../css/login.css'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Head>
          <title>B2PUI</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        </Head>
        <div>
          <div class="loginpage">
            <div class="loginpage__wrap">
              <div class="container d-flex h-100 p-0">
                <div class="row w-100 m-0 justify-content-center align-self-center">
                  <div class="col-12">
                    <div class="logo mb-2 mb-md-2">
                      <img src="/static/images/logo/logo.png" />
                    </div>
                    <div class="w-100 text-md-right mb-4 pb-3 mb-md-0 pb-md-0">
                      <p class="mb-0 font-light">Blockchain Solution for</p>
                      <h1 class="gray-1 mb-0">PROCURE-TO-PAY</h1>
                    </div>
                    <div class="middle">
                      <h2 class="gray-1 mb-1">Welcome</h2>
                      <p class="mb-3 font-light">Please login to your account.</p>
                      <form id="loginForm" class="col-12 col-md-6 col-lg-4 p-0 needs-validation" novalidate="" action="/" method="POST">
                        <div class="form-group mb-2">
                          <input type="text" id="" class="form-control" placeholder="Username" required autofocus />
                        </div>
                        <div class="form-group mb-2">
                          <input type="password" id="" class="form-control" placeholder="Password" required />
                        </div>
                        <p class="invalid-feedback error_msg mb-2">Your account or password is incorrect. Please try again.</p>
                        <div class="row">
                          <div class="col-6 pr-1">
                            <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="remember" />
                              <label class="custom-control-label pl-1 font-small text-shadow" for="remember">Remember Me</label>
                            </div>
                          </div>
                          <div class="col-6 pl-1 text-right">
                            <a class="gray-2 font-small text-shadow" href="forgot_password.html">Forgot Password?</a>
                          </div>
                        </div>
                        <div class="col-12 col-md-6 p-0 mt-4">
                          <button id="btnSubmit" type="submit" class="btn w-100">Login</button>
                        </div>
                        <div class="col-12 col-md-6 p-0 mt-4">
                          <Link href="/">
                           <button id="btnSubmit" type="submit" class="btn w-100">Home</button>
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div class="mt-5 pt-3">
                      <div class="col-3 col-md-2 col-lg-1 p-0">
                        <div class="font-x-small">Powered by</div>
                        <img class="w-100" src="/static/images/logo/dv.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Link href="/">
          <button type="button">Home</button>
        </Link>
    </div>
    )
  }
}
