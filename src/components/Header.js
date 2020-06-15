import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

class Header extends Component {

    render() {
        return(
            <React.Fragment>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Post It</NavbarBrand>
                        <NavbarBrand className="ml-auto">Bagas Naufal Insani</NavbarBrand>
                        
                    </div>          
                </Navbar>
            </React.Fragment>
        );
    }

}

export default Header; 