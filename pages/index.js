import React from 'react'
import { connect } from 'react-redux'
import { init } from '../reducer/store'
import Menu from '../components/menu'

class Index extends React.Component {
  static getInitialProps({ reduxStore }) {
    reduxStore.dispatch(init())

    return {}
  }

  // componentDidMount() {
  //   const { dispatch } = this.props
  //   this.timer = startClock(dispatch)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer)
  // }

  render() {
    return (
      <Menu />
    )
  }
}

export default connect()(Index)
