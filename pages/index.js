import React from 'react'
import { connect } from 'react-redux'
import { init } from '../reducer/store'
import Layout from '../components/common/Layout'

class Index extends React.Component {
  static getInitialProps({ reduxStore }) {
    reduxStore.dispatch(init())

    return {}
  }

  render() {
    return (
      <Layout>
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
      </Layout>
    )
  }
}

export default connect()(Index)
