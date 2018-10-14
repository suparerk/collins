import SideNavBar from './SideNavBar'

const Layout = ({ children }) => (
  <div>
    <SideNavBar />
    <div className="page active">
      {children}
    </div>
  </div>
)

export default Layout