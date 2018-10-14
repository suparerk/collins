import React from 'react'
import classnames from 'classnames'
import SideNavBar from './SideNavBar'

class Layout extends React.Component {
  state = {
    isExpandedSideNavBar: false
  }

  _toggleExpandedSideNavBar = (bool) => {
    this.setState({
      isExpandedSideNavBar: bool
    })
  }

  render() {
    const { children } = this.props
    const { isExpandedSideNavBar } = this.state
    const classPage = classnames('page', { active: !isExpandedSideNavBar });

    return (
      <div>
        <SideNavBar toggleExpandedSideNavBar={this._toggleExpandedSideNavBar} isExpandedSideNavBar={isExpandedSideNavBar} />
        <div className={classPage}>
          {children}
        </div>
      </div>
    )
  }
}

export default Layout