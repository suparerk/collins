import React, { Component } from "react"
import Head from 'next/head'
import { connect } from 'react-redux'
import { init, login } from '../reducer/store'
import '../css/style.css'
import '../css/login.css'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  init = () => {
    const { dispatch } = this.props
    dispatch(init())
  }

  login = () => {
    const { dispatch } = this.props
    dispatch(login(this.state))
  }

  render() {
    console.log('here', this.props)
    const { current_user } = this.props
    return (
      <div>
        <Head>
          <title>B2PUI</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        </Head>
        <div>
          <div className="loginpage">
            <div className="loginpage__wrap">
              <div className="container d-flex h-100 p-0">
                <div className="row w-100 m-0 justify-content-center align-self-center">
                  <div className="col-12">
                    <div className="logo mb-2 mb-md-2">
                      <img src="/static/images/logo/logo.png" />
                    </div>
                    <div className="w-100 text-md-right mb-4 pb-3 mb-md-0 pb-md-0">
                      <p className="mb-0 font-light">Blockchain Solution for</p>
                      <h1 className="gray-1 mb-0">PROCURE-TO-PAY</h1>
                    </div>
                    <div className="middle">
                      <h2 className="gray-1 mb-1">Welcome {current_user && current_user.name}</h2>
                      <p className="mb-3 font-light">Please login to your account.</p>
                      <div id="loginForm" className="col-12 col-md-6 col-lg-4 p-0 needs-validation">
                        <div className="form-group mb-2">
                          <input type="text" name="username" className="form-control" placeholder="Username" required autoFocus value={this.state.username} onChange={this.handleChange} />
                        </div>
                        <div className="form-group mb-2">
                          <input type="password" name="password" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <p className="invalid-feedback error_msg mb-2">Your account or password is incorrect. Please try again.</p>
                        <div className="row">
                          <div className="col-6 pr-1">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="remember" />
                              <label className="custom-control-label pl-1 font-small text-shadow" htmlFor="remember">Remember Me</label>
                            </div>
                          </div>
                          <div className="col-6 pl-1 text-right">
                            <a className="gray-2 font-small text-shadow" href="/forgot_password">Forgot Password?</a>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 p-0 mt-4">
                          <button id="btnSubmit" className="btn w-100" onClick={this.login}>Login</button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 pt-3">
                      <div className="col-3 col-md-2 col-lg-1 p-0">
                        <div className="font-x-small">Powered by</div>
                        <img className="w-100" src="/static/images/logo/dv.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
    </div>
    )
  }
}

function mapStateToProps (state) {
  const {login, current_user, token} = state
  return {login, current_user, token}
}

export default connect(mapStateToProps)(Login)
