import React, { useState } from 'react';
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
} from 'reactstrap';

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <Navbar light expand="md" className="mb-2 nav">
      <div className="container">
        <NavbarBrand href="/" className="logo">
          {' '}
          DB Movie{' '}
        </NavbarBrand>{' '}
        <NavbarToggler onClick={() => setToggle(!toggle)} />{' '}
        <Collapse isOpen={toggle} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/"> Components </NavLink>{' '}
            </NavItem>{' '}
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                {' '}
                GitHub{' '}
              </NavLink>{' '}
            </NavItem>{' '}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options{' '}
              </DropdownToggle>{' '}
              <DropdownMenu right>
                <DropdownItem>Option 2 </DropdownItem> <DropdownItem divider />
                <DropdownItem>Reset </DropdownItem>{' '}
              </DropdownMenu>{' '}
            </UncontrolledDropdown>{' '}
          </Nav>{' '}
        </Collapse>{' '}
      </div>{' '}
    </Navbar>
  );
}
export default Header;
