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

      </Layout>
    )
  }
}

export default connect()(Index)
