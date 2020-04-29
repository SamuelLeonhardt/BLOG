import PropTypes from 'prop-types'
import React from 'react';
import logo from "../image/RW.png"

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
  Form,
  Input,
  Button
} from 'reactstrap';

class Header extends React.Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
    isOpen: false
    };
  }
  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return (
      <div>
        <Navbar fixed= "top" light expand="sm"> 
          <div className= "container">
          <NavbarBrand href="/"><img src={logo} width="45" height="45" class="d-inline-block align-center" alt="Logo"/>
            </NavbarBrand> {/* titulo do site */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/educacao-infantil">Educação Infantil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sobre-mim">Sobre mim</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/top-10-livros">Top 10 Livros</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Mundo Literário
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavLink href="/livros-nacionais">Livros Nacionais</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href="/livros-internacionais">Livros Internacionais</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
                <Form inline center>
                  <Input type="text" placeholder="Search" className="mr-sm-2" onChange={this.changeSearchText} value={this.state.searchtext} onClick={this.findBooks}/>
                  <Button color="danger" variant="outline-primary">Search</Button>
                </Form>
                </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
export default Header;
