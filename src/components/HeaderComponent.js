import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false,
            isModalOpen: false
        };
    }


    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" >
                                        <span className="fa fa-book fa-lg" style={{justifyContent:'center', marginLeft:"300px"}}> Projekt Siguri Informacioni</span> 
                             </NavLink>
                                </NavItem>
                                
                            </Nav>
                    </div>
                </Navbar>
            </>

        )
    }
}
export default Header;