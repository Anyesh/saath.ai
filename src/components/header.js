import React from 'react'
import Link from 'gatsby-link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

class NavBar extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <div className="container">
            <Link to="/" className="navbar-brand">
              SAATH | <span style={{ color: '#45a7e9ec' }}>AI</span>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="#about" className="nav-link">
                    About
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="#services" className="nav-link">
                    Services
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="#work" className="nav-link">
                    Work
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact/" className="nav-link">
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
